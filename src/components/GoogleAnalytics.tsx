 "use client";

import * as React from "react";
import Script from "next/script";

const measurementId = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const consent = window.localStorage.getItem("inspmaq-cookie-consent");
    const frame = window.requestAnimationFrame(() => setEnabled(consent === "accepted"));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  React.useEffect(() => {
    const handleConsent = () => setEnabled(true);
    window.addEventListener("inspmaq-analytics-accepted", handleConsent);
    return () =>
      window.removeEventListener("inspmaq-analytics-accepted", handleConsent);
  }, []);

  if (!measurementId || enabled !== true) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
