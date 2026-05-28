"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const COOKIE_CONSENT_KEY = "dmtn_cookie_consent";

export default function TrackingScripts() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    function check() {
      setConsented(localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted");
    }

    check();

    // Re-check when localStorage changes (cross-tab or same-tab via custom event)
    window.addEventListener("storage", check);
    window.addEventListener("cookie-consent-change", check);

    return () => {
      window.removeEventListener("storage", check);
      window.removeEventListener("cookie-consent-change", check);
    };
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17323130920"
        strategy="lazyOnload"
      />
      <Script id="google-ads-tag" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17323130920');
          gtag('event', 'conversion', {
            'send_to': 'AW-17323130920/1KCDCO7xgJ4cEKiAqMRA',
            'value': 1.0,
            'currency': 'BRL'
          });
        `}
      </Script>
    </>
  );
}
