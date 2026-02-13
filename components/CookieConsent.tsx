"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white p-4 shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-muted">
          We use cookies to improve your experience on our website
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="rounded-full bg-accent px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="rounded-full border border-border px-6 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface-alt"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
