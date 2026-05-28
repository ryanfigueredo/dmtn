"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "dmtn_cookie_consent";

type Consent = "accepted" | "rejected";

function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(COOKIE_CONSENT_KEY) as Consent | null;
}

function setConsent(value: Consent) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  // Dispatch custom event so TrackingScripts picks it up in the same tab
  window.dispatchEvent(new Event("cookie-consent-change"));
}

/** Disable GA / Ads / Meta Pixel by removing their cookies and blocking future loads */
function revokeTrackingConsent() {
  // Clear GA cookies
  document.cookie.split(";").forEach((c) => {
    const name = c.trim().split("=")[0];
    if (name.startsWith("_ga") || name.startsWith("_gid") || name.startsWith("_fbp") || name.startsWith("_fbc")) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  });

  // Tell GA to stop
  if (typeof window !== "undefined") {
    (window as unknown as Record<string, unknown>)["ga-disable-AW-17323130920"] = true;
  }
}

function grantTrackingConsent() {
  if (typeof window !== "undefined") {
    (window as unknown as Record<string, unknown>)["ga-disable-AW-17323130920"] = false;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      // No consent yet — block tracking by default (opt-in model)
      revokeTrackingConsent();
      setVisible(true);
    } else if (consent === "rejected") {
      revokeTrackingConsent();
    } else {
      grantTrackingConsent();
    }
  }, []);

  function handleAccept() {
    setConsent("accepted");
    grantTrackingConsent();
    setVisible(false);
  }

  function handleReject() {
    setConsent("rejected");
    revokeTrackingConsent();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[9999] p-4 sm:p-6 pointer-events-none">
      <div className="pointer-events-auto max-w-lg mx-auto bg-[#0F1629] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl">
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Usamos cookies essenciais para o funcionamento do site e cookies de
          marketing (Google Analytics, Google Ads, Meta Pixel) para melhorar sua
          experiência. Os cookies de marketing só serão ativados com o seu
          consentimento.{" "}
          <Link
            href="/privacidade#cookies"
            className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
          >
            Política de Privacidade
          </Link>
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
          >
            Aceitar todos
          </button>
          <button
            onClick={handleReject}
            className="flex-1 border border-white/20 hover:border-white/40 text-slate-300 hover:text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
          >
            Apenas essenciais
          </button>
        </div>
      </div>
    </div>
  );
}
