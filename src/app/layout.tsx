import "~/styles/globals.css";
import type { Metadata, Viewport } from "next";

import { auth } from "~/server/auth";

import { Suspense } from "react";

import { Providers, TWIndicator, Toaster } from "~/components/Utils";

import { cn } from "~/utils/tw";
import { SEOConfig } from "~/utils/seoConfig";
import { Poppins, Noto_Sans } from "next/font/google";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

const mono = Poppins({
  display: "swap",
  variable: "--font-mono",
  weight: ["200", "300", "500", "600", "700"],
  subsets: ["latin"],
});

const sans = Noto_Sans({
  display: "swap",
  variable: "--font-sans",
  weight: ["200", "300", "500", "600", "700"],
  subsets: ["latin"],
});

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await auth();

  return (
    <html
      //
      lang="en"
      data-theme="luxury"
      suppressHydrationWarning
    >
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
      </head>

      <Providers session={session}>
        <body
          className={cn(
            "bg-base-100 font-sans font-normal !antialiased scrollbar",
            sans.variable,
            mono.variable,
          )}
        >
          <Header session={session} />

          <main className="page">{children}</main>

          <Suspense fallback={null}>
            <Footer />
            {/* <ContactContainer /> */}
            {/* {env.NODE_ENV === "production" && <CookieConsent />} */}
            {/* {env.NODE_ENV === "production" && <Analytics />} */}
            <TWIndicator />
            <Toaster font={"sans-serif"} />
          </Suspense>
        </body>
      </Providers>
    </html>
  );
}

export const metadata: Metadata = {
  ...SEOConfig,
  // image: "/assets/og-image.png",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  colorScheme: "dark light",
};

// export reportWebVitals; // ~/utils/gtag.ts
