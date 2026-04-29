"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

const CRM_API = "/api/chat/qualify";
const SLOTS_API = "/api/calendar/availability-next";
const BOOK_API = "/api/calendar/book";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface SlotOption {
  date: string;
  time: string;
  label: string;
}

type Phase = "chat" | "collecting_info" | "picking_slot" | "booking" | "booked";

const DAY_NAMES: Record<number, string> = {
  0: "Dom",
  1: "Seg",
  2: "Ter",
  3: "Qua",
  4: "Qui",
  5: "Sex",
  6: "Sáb",
};

interface DiagnosticChatCtx {
  openChat: () => void;
}

const DiagnosticChatContext = createContext<DiagnosticChatCtx>({
  openChat: () => {},
});

export function useDiagnosticChat() {
  return useContext(DiagnosticChatContext);
}

export function DiagnosticChatProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<Phase>("chat");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [slots, setSlots] = useState<SlotOption[]>([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [bookedInfo, setBookedInfo] = useState<{
    date: string;
    time: string;
    meetLink?: string;
  } | null>(null);
  const [initialized, setInitialized] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, loading, phase, slots]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openChat = useCallback(async () => {
    setOpen(true);
    if (initialized) return;
    setInitialized(true);
    setLoading(true);
    try {
      const res = await fetch(CRM_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [] }),
      });
      const data = await res.json();
      if (data.message) {
        setMessages([{ role: "assistant", content: data.message }]);
      }
    } catch {
      setMessages([
        {
          role: "assistant",
          content:
            "Oi! Eu sou o assistente da DMTN. Como posso te ajudar? Se quiser, já pode agendar uma conversa com nosso time.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [initialized]);

  function addAssistantMessage(text: string) {
    setMessages((prev) => [...prev, { role: "assistant", content: text }]);
  }

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(CRM_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      if (data.message) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message },
        ]);
        if (data.qualified === true) {
          setTimeout(() => {
            addAssistantMessage(
              "Para agendar, preciso de algumas informações rápidas:"
            );
            setPhase("collecting_info");
          }, 600);
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Desculpe, tive um problema. Tente novamente.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function handleInfoSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: `${name.trim()} — ${phone.trim()}${email.trim() ? ` — ${email.trim()}` : ""}`,
      },
    ]);
    setLoading(true);

    try {
      const today = new Date().toISOString().slice(0, 10);
      const res = await fetch(`${SLOTS_API}?from=${today}&days=5`);
      const data = await res.json();

      if (!data.byDate || Object.keys(data.byDate).length === 0) {
        addAssistantMessage(
          "No momento não encontrei horários disponíveis. Tente novamente mais tarde ou fale pelo WhatsApp."
        );
        setPhase("chat");
        setLoading(false);
        return;
      }

      const parsed: SlotOption[] = [];
      const dates = Object.keys(data.byDate).sort();
      for (const dateStr of dates) {
        const daySlots = data.byDate[dateStr];
        if (!daySlots || daySlots.length === 0) continue;
        const show = daySlots.slice(0, 3);
        for (const s of show) {
          const [y, m, d] = dateStr.split("-").map(Number);
          const dt = new Date(y ?? 0, (m ?? 1) - 1, d ?? 1);
          const dayName = DAY_NAMES[dt.getDay()] ?? "";
          const dd = String(d).padStart(2, "0");
          const mm = String(m).padStart(2, "0");
          parsed.push({
            date: dateStr,
            time: s.start,
            label: `${dayName} ${dd}/${mm} ${s.start}`,
          });
          if (parsed.length >= 12) break;
        }
        if (parsed.length >= 12) break;
      }

      setSlots(parsed);
      setSlotIndex(0);
      addAssistantMessage("Encontrei horários disponíveis. Que tal este?");
      setPhase("picking_slot");
    } catch {
      addAssistantMessage(
        "Erro ao buscar horários. Tente novamente ou fale pelo WhatsApp."
      );
      setPhase("chat");
    } finally {
      setLoading(false);
    }
  }

  async function handleSlotPick(slot: SlotOption) {
    setMessages((prev) => [...prev, { role: "user", content: slot.label }]);
    setPhase("booking");
    setLoading(true);

    try {
      const res = await fetch(BOOK_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          date: slot.date,
          time: slot.time,
          summary: `Reunião DMTN — ${name.trim()}`,
        }),
      });
      const data = await res.json();

      if (data.ok) {
        const [y, m, d] = slot.date.split("-").map(Number);
        const dt = new Date(y ?? 0, (m ?? 1) - 1, d ?? 1);
        const dayName = DAY_NAMES[dt.getDay()] ?? "";
        const dd = String(d).padStart(2, "0");
        const mm = String(m).padStart(2, "0");

        const meetMsg = data.hangoutLink
          ? `\n\nLink da reunião: ${data.hangoutLink}`
          : "";

        addAssistantMessage(
          `Reunião confirmada para ${dayName} ${dd}/${mm} às ${slot.time}!${meetMsg}\n\nVocê receberá um convite no e-mail. Nos vemos lá!`
        );
        setBookedInfo({
          date: slot.date,
          time: slot.time,
          meetLink: data.hangoutLink,
        });
        setPhase("booked");
      } else {
        addAssistantMessage(
          data.error || "Erro ao confirmar agendamento. Tente outro horário."
        );
        setPhase("picking_slot");
      }
    } catch {
      addAssistantMessage("Erro ao agendar. Tente novamente.");
      setPhase("picking_slot");
    } finally {
      setLoading(false);
    }
  }

  return (
    <DiagnosticChatContext.Provider value={{ openChat }}>
      {children}

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            >
              <div className="bg-[#0F1629] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/40 w-full max-w-lg max-h-[85vh] flex flex-col pointer-events-auto">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-indigo-300 text-sm font-medium">
                      Assistente DMTN
                    </span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-zinc-500 hover:text-white transition-colors p-1"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 min-h-0">
                  {messages.map((m, i) => (
                    <motion.div
                      key={i}
                      className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                      initial={{
                        opacity: 0,
                        y: 8,
                        scale: 0.95,
                        filter: "blur(2px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        type: "spring",
                        duration: 0.35,
                        bounce: 0,
                      }}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                          m.role === "user"
                            ? "bg-indigo-500 text-white rounded-br-sm"
                            : "bg-zinc-800 text-zinc-200 rounded-bl-sm"
                        }`}
                      >
                        {m.content}
                      </div>
                    </motion.div>
                  ))}

                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-zinc-800 px-4 py-3 rounded-2xl rounded-bl-sm">
                        <span className="flex gap-1">
                          <span
                            className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-pulse"
                            style={{ animationDelay: "0ms" }}
                          />
                          <span
                            className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-pulse"
                            style={{ animationDelay: "150ms" }}
                          />
                          <span
                            className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-pulse"
                            style={{ animationDelay: "300ms" }}
                          />
                        </span>
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>

                {/* Input area */}
                <div className="px-6 py-4 border-t border-white/[0.06]">
                  {phase === "chat" && (
                    <form
                      onSubmit={sendMessage}
                      className="flex gap-2"
                    >
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={loading}
                        placeholder="Digite sua resposta..."
                        autoFocus
                        className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 text-sm disabled:opacity-50 transition focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                      />
                      <button
                        type="submit"
                        disabled={loading || !input.trim()}
                        className="bg-indigo-500 hover:bg-indigo-600 disabled:opacity-40 disabled:pointer-events-none text-white px-4 py-3 rounded-xl transition"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </button>
                    </form>
                  )}

                  {phase === "collecting_info" && (
                    <motion.form
                      onSubmit={handleInfoSubmit}
                      className="space-y-3"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome completo *"
                        required
                        autoFocus
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                      />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Seu WhatsApp com DDD *"
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Seu e-mail (para enviar o convite)"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                      />
                      <button
                        type="submit"
                        disabled={loading || !name.trim() || !phone.trim()}
                        className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-40 disabled:pointer-events-none text-white font-semibold py-3 rounded-xl transition"
                      >
                        {loading
                          ? "Buscando horários..."
                          : "Ver horários disponíveis"}
                      </button>
                    </motion.form>
                  )}

                  {phase === "picking_slot" && slots.length > 0 && slotIndex < slots.length && (
                    <motion.div
                      key={slotIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 text-center">
                        <p className="text-zinc-400 text-xs mb-1">
                          Sugestão {slotIndex + 1} de {slots.length}
                        </p>
                        <p className="text-white text-lg font-semibold">
                          {slots[slotIndex]!.label}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <motion.button
                          onClick={() => handleSlotPick(slots[slotIndex]!)}
                          disabled={loading}
                          className="flex-1 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-40 disabled:pointer-events-none text-white font-semibold py-3 rounded-xl transition"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          Confirmar este horário
                        </motion.button>
                        <motion.button
                          onClick={() => setSlotIndex((i) => i + 1)}
                          disabled={loading}
                          className="flex-shrink-0 bg-transparent hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-600 text-zinc-300 px-4 py-3 rounded-xl transition disabled:opacity-40 disabled:pointer-events-none"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          Ver outro →
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {phase === "picking_slot" && slots.length > 0 && slotIndex >= slots.length && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <p className="text-zinc-400 text-sm text-center">
                        Não há mais horários nesta semana.
                      </p>
                      <motion.button
                        onClick={() => setSlotIndex(0)}
                        className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 font-medium py-3 rounded-xl transition"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        ← Ver horários novamente
                      </motion.button>
                    </motion.div>
                  )}

                  {phase === "booked" && bookedInfo?.meetLink && (
                    <motion.a
                      href={bookedInfo.meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-base px-6 py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Abrir link da reunião
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </DiagnosticChatContext.Provider>
  );
}
