"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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

export default function DiagnosticSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);

  // Scheduling flow
  const [phase, setPhase] = useState<Phase>("chat");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [slots, setSlots] = useState<SlotOption[]>([]);
  const [bookedInfo, setBookedInfo] = useState<{
    date: string;
    time: string;
    meetLink?: string;
  } | null>(null);

  const bottomRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, loading, phase, slots]);

  function addAssistantMessage(text: string) {
    setMessages((prev) => [...prev, { role: "assistant", content: text }]);
  }

  async function startChat() {
    setChatStarted(true);
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
          // Transition to scheduling
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
    if (!name.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: `${name.trim()}${email.trim() ? ` — ${email.trim()}` : ""}`,
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
      addAssistantMessage("Escolha um horário disponível:");
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
    setMessages((prev) => [
      ...prev,
      { role: "user", content: slot.label },
    ]);
    setPhase("booking");
    setLoading(true);

    try {
      const res = await fetch(BOOK_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
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
    <section id="agendar" className="py-24 relative" ref={sectionRef}>
      <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-indigo-600/5 top-[20%] -left-[200px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] text-indigo-300 text-xs font-medium tracking-wider uppercase mb-5">
            Diagnóstico gratuito
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Agende seu{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              diagnóstico gratuito
            </span>
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Nossos especialistas analisam seu negócio e indicam as melhores
            soluções. Fale com nosso assistente para começar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <AnimatePresence mode="wait">
            {!chatStarted ? (
              <motion.div
                key="start"
                className="text-center"
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-zinc-400 text-sm mb-6">
                  Conte um pouco sobre o seu projeto para iniciarmos.
                </p>
                <motion.button
                  onClick={startChat}
                  className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agendar reunião gratuita
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>

                <p className="text-zinc-500 text-sm mt-6 flex items-center justify-center gap-2">
                  Prefere falar direto?
                  <a
                    href="https://wa.me/5521997624873?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20DMTN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 sm:p-8"
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ type: "spring", duration: 0.45, bounce: 0 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-indigo-300 text-sm font-medium">
                    Assistente DMTN
                  </span>
                </div>

                {/* Messages */}
                <div className="space-y-4 mb-5 min-h-[80px] max-h-[400px] overflow-y-auto">
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

                {/* Phase: Normal chat */}
                {phase === "chat" && (
                  <form onSubmit={sendMessage} className="flex gap-2 mt-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={loading}
                      placeholder="Digite sua resposta..."
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

                {/* Phase: Collect name + email */}
                {phase === "collecting_info" && (
                  <motion.form
                    onSubmit={handleInfoSubmit}
                    className="space-y-3 mt-3"
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
                      disabled={loading || !name.trim()}
                      className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-40 disabled:pointer-events-none text-white font-semibold py-3 rounded-xl transition"
                    >
                      {loading ? "Buscando horários..." : "Ver horários disponíveis"}
                    </button>
                  </motion.form>
                )}

                {/* Phase: Pick a slot */}
                {phase === "picking_slot" && slots.length > 0 && (
                  <motion.div
                    className="mt-3"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {slots.map((slot, i) => (
                        <motion.button
                          key={i}
                          onClick={() => handleSlotPick(slot)}
                          disabled={loading}
                          className="bg-zinc-800 hover:bg-indigo-500/20 border border-zinc-700 hover:border-indigo-500/50 text-zinc-200 text-sm px-3 py-2.5 rounded-xl transition disabled:opacity-40 disabled:pointer-events-none"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {slot.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Phase: Booked — show meet link */}
                {phase === "booked" && bookedInfo?.meetLink && (
                  <motion.a
                    href={bookedInfo.meetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-base px-6 py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/20 mt-3"
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>
    </section>
  );
}
