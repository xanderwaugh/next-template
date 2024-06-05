import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

export const NAV_ITEMS: Array<NavItemProps> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const FOOTER_ITEMS: Array<NavItemProps> = [
  { label: "About us", href: "/about/" },
  { label: "Contact", href: "/contact/" },
  { label: "Jobs", href: "/jobs/" },
  { label: "Press kit", href: "/press/" },
];

export const SOCIAL_MEDIAS: Array<SocialLinkProps> = [
  { href: "https://twitter.com/", Icon: FaTwitter, label: "Twitter" },
  { href: "https://github.com/xanderwang", Icon: FaGithub, label: "Github" },
  { href: "https://www.youtube.com/", Icon: FaYoutube, label: "YouTube" },
  { href: "https://www.facebook.com/", Icon: FaFacebook, label: "Facebook" },
];

// * Util Functions
interface Omit {
  <T extends object, K extends [...(keyof T)[]]>(
    obj: T,
    ...keys: K
  ): {
    [K2 in Exclude<keyof T, K[number]>]: T[K2];
  };
}

export const omit: Omit = (obj, ...keys) => {
  const ret = {} as {
    [K in keyof typeof obj]: (typeof obj)[K];
  };
  let key: keyof typeof obj;
  for (key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
};

export const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};
