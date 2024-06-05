"use client";
import { useState, useEffect } from "react";

import Link from "next/link";

import { getLocalStorage, setLocalStorage } from "~/utils/storage";

export const CookieConsent: React.FC = () => {
  const [cookieConsent, setCookieConsent] = useState<boolean>();

  useEffect(() => {
    const stored = getLocalStorage<boolean>("cookie_consent", false);

    setCookieConsent(!!stored);
  }, []);

  useEffect(() => {
    if (typeof cookieConsent === "undefined") return;
    window.gtag("consent", "update", {
      analytics_storage: cookieConsent ? "granted" : "denied",
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      style={{ display: cookieConsent ? "none" : "flex" }}
      className="fixed inset-x-0 bottom-0 mx-auto my-10 max-w-max flex-col items-center justify-between gap-4 rounded-lg bg-gray-300 p-3 shadow sm:flex-row md:max-w-screen-sm md:px-4"
    >
      <div className="text-center">
        <Link href="/info/cookies">
          <p>
            We use <span className="font-bold text-sky-500">cookies</span> on
            our site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setCookieConsent(false)}
          className="rounded-md border-gray-900 px-5 py-2 text-gray-600"
        >
          Decline
        </button>
        <button
          onClick={() => setCookieConsent(true)}
          className="rounded-lg bg-gray-900 px-5 py-2 text-white"
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
