"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import Script from "next/script";

import { getBaseUrl } from "~/utils";
import { GA_TRACKING_ID, pageview } from "~/utils/gtag";

// import { Analytics } from "@vercel/analytics/react";

export const Analytics: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // let url = "";
    // if (pathname) url += pathname;
    // if (searchParams) url += searchParams.toString();
    const baseURL = getBaseUrl();
    const url = new URL(baseURL);
    url.pathname = pathname;

    for (const [key, value] of searchParams.entries()) {
      url.searchParams.append(key, value);
    }

    pageview(url);
    console.info("[Analytics] Pageview\n", url);
  }, [pathname, searchParams]);

  return (
    <>
      {/* <VercelAnalytics /> */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('consent', 'default', {
    'analytics_storage': 'denied'
});
gtag('config', '${GA_TRACKING_ID}', {
    page_path: window.location.pathname,
});
`,
        }}
      />
    </>
  );
};

export default Analytics;
