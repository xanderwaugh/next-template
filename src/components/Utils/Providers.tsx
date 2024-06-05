"use client";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { CTXProvider } from "./Context";

import { LazyMotion, domAnimation } from "framer-motion";

// import { CTXProvider } from "./Context";

interface ProvidersProps {
  children?: React.ReactNode;
  session?: Session | null;
}

const Providers: React.FC<ProvidersProps> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <CTXProvider>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </CTXProvider>
    </SessionProvider>
  );
};

export default Providers;
