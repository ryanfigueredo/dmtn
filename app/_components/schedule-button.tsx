"use client";

import { useDiagnosticChat } from "./diagnostic-chat-provider";
import { trackConversion, trackEvent, CONVERSION_SEND_TO } from "@/app/_lib/gtag";

interface ScheduleButtonProps {
  className?: string;
  label?: string;
  location?: string;
  children?: React.ReactNode;
}

export default function ScheduleButton({
  className = "inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25",
  label = "Agendar diagnóstico gratuito",
  location = "page",
  children,
}: ScheduleButtonProps) {
  const { openChat } = useDiagnosticChat();

  return (
    <button
      onClick={() => {
        trackConversion(CONVERSION_SEND_TO.scheduleClick);
        trackEvent("cta_click", { location, label });
        openChat();
      }}
      className={className}
    >
      {children ?? label}
    </button>
  );
}
