"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const CRM_API = "https://crm.dmtn.com.br/api/chat/qualify";
const BOOKING_URL = "https://crm.dmtn.com.br/agendar";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function DiagnosticSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [qualified, setQualified] = useState<boolean | null>(null);
  const [chatStarted, setChatStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

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
        if (data.qualified !== null) setQualified(data.qualified);
      }
    } catch {
      setMessages([
        {
          role: "assistant",
          content: "Oi! Me conta: qual é o seu negócio e o que você precisa?",
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
        if (data.qualified !== null) setQualified(data.qualified);
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
          {!chatStarted ? (
            <div className="text-center">
              <p className="text-zinc-400 text-sm mb-6">
                Conte um pouco sobre o seu projeto para iniciarmos.
              </p>
              <motion.button
                onClick={startChat}
                className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/20"
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
            </div>
          ) : (
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-indigo-300 text-sm font-medium">
                  Assistente DMTN
                </span>
              </div>

              <div className="space-y-4 mb-5 min-h-[80px] max-h-[400px] overflow-y-auto">
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
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
                          className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </span>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {qualified === true && (
                <motion.a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-base px-6 py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/20 mt-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Escolher horário e agendar
                </motion.a>
              )}

              {qualified === null && (
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
            </div>
          )}
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>
    </section>
  );
}
