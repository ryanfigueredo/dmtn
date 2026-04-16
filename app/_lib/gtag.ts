/**
 * Helpers de tracking do Google Ads / gtag.js
 *
 * O script gtag.js é carregado em app/layout.tsx com o ID AW-17323130920.
 * Estas funções encapsulam chamadas para conversões e eventos customizados.
 */

export const GA_CONVERSION_ID = "AW-17323130920";

/**
 * IDs das ações de conversão criadas no Google Ads.
 * Preencha com o send_to gerado pelo Google Ads ao criar cada ação de conversão.
 * Formato: "AW-17323130920/XXXXXXXXXXXX"
 *
 * Enquanto não houver o send_to, os eventos caem só como "event" (sem conversão).
 */
export const CONVERSION_SEND_TO = {
  // Form de contato enviado no site dmtn.com.br
  contactForm: "AW-17323130920/CONTACT_FORM_LABEL",
  // Clique em "Agendar diagnóstico gratuito" / "Falar com especialista"
  scheduleClick: "AW-17323130920/SCHEDULE_CLICK_LABEL",
  // Clique em WhatsApp
  whatsappClick: "AW-17323130920/WHATSAPP_CLICK_LABEL",
} as const;

type GtagArgs =
  | ["event", string, Record<string, unknown>?]
  | ["config", string, Record<string, unknown>?]
  | ["js", Date]
  | ["set", Record<string, unknown>];

declare global {
  interface Window {
    gtag?: (...args: GtagArgs[number] extends infer _ ? unknown[] : never) => void;
    dataLayer?: unknown[];
  }
}

function safeGtag(...args: unknown[]): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    (window.gtag as (...a: unknown[]) => void)(...args);
  } else if (Array.isArray(window.dataLayer)) {
    // Fallback: empilha no dataLayer mesmo se gtag() ainda não carregou
    window.dataLayer.push(args);
  }
}

/**
 * Dispara uma conversão no Google Ads.
 * Use esta função para ações que valem dinheiro (form enviado, reunião agendada).
 */
export function trackConversion(
  sendTo: string,
  params?: { value?: number; currency?: string; transactionId?: string }
): void {
  safeGtag("event", "conversion", {
    send_to: sendTo,
    ...(params?.value != null && { value: params.value }),
    ...(params?.currency && { currency: params.currency }),
    ...(params?.transactionId && { transaction_id: params.transactionId }),
  });
}

/**
 * Dispara um evento customizado (não-conversão), para medir engajamento.
 */
export function trackEvent(
  name: string,
  params?: Record<string, unknown>
): void {
  safeGtag("event", name, params ?? {});
}
