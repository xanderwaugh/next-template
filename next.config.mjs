/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

// const isProd = process.env.NODE_ENV === "production";

/** @type {import("next").NextConfig} */
const config = {
  // * NextJS Images
  images: {
    remotePatterns: [
      { hostname: "cdn.discordapp.com" },
      { hostname: "source.unsplash.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "picsum.photos" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // * Config
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
  // swcMinify: true,
  trailingSlash: true,
  cleanDistDir: true,

  // * Environment Variables
  experimental: { reactCompiler: true },

  /** Use Minified Packages
  webpack: (config) => {
    isProd && (config.resolve.alias["hls.js"] = "hls.js/dist/hls.min");
    return config;
  },
  **/

  /**
   * If you have the "appDir" setting enabled, then you
   * must comment the below `i18n` config out.
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: { locales: ["en"], defaultLocale: "en" },
};

export default config;
