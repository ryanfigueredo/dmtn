"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackConversion, trackEvent, CONVERSION_SEND_TO } from "@/app/_lib/gtag";

type ConversionKey = keyof typeof CONVERSION_SEND_TO;

interface TrackedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  /** Qual conversão disparar ao clicar (ex: "whatsappClick") */
  conversion?: ConversionKey;
  /** Nome do evento customizado (além da conversão) */
  event?: string;
  /** Parâmetros extras do evento */
  eventParams?: Record<string, unknown>;
}

/**
 * Link client-side que dispara conversão/evento do Google Ads ao clicar.
 * Útil em páginas server components que precisam de tracking sem virar client.
 */
export function TrackedLink({
  href,
  children,
  className,
  target,
  rel,
  conversion,
  event,
  eventParams,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={() => {
        if (conversion) trackConversion(CONVERSION_SEND_TO[conversion]);
        if (event) trackEvent(event, eventParams);
      }}
    >
      {children}
    </Link>
  );
}
