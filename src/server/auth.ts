import NextAuth, { type NextAuthConfig } from "next-auth";

import { env } from "~/env.mjs";
import { prisma } from "~/server/db";

import { PrismaAdapter } from "@auth/prisma-adapter";
// import DiscordProvider from "next-auth/providers/discord";

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://authjs.dev/getting-started/migrating-to-v5
 * @see https://next-auth.js.org/configuration/nextjs
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  secret: env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, user }) => {
      session.user = { ...session.user, ...user };
      return session;
    },
  },
  providers: [
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT,
    //   clientSecret: env.DISCORD_SECRET,
    // }),
  ],
  logger: {
    error: console.error,
    warn: console.warn,
  },
  pages: { error: "/" },
  theme: {
    brandColor: "", // var(--comp-accent)
    buttonText: "", // var(--comp-text)
    colorScheme: "dark",
    logo: "/android-chrome-192x192.png",
  },
  // trustHost: true,
};

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);
