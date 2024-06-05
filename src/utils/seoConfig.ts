import type { Metadata, ResolvingMetadata } from "next";

export const companyTitle = "Company Title";
export const seoDescription = "Company Description";
// ! Example URL
export const siteURL = "https://xanderwaugh.com/";
// * var(--comp-bg)
export const themeColor = "#262626";
export const companyPhone = "123-456-7890";

export const SEOConfig: Metadata = {
  title: companyTitle,
  description: seoDescription,
  robots: "index, follow",
  // * MetadataBase
  metadataBase: new URL(siteURL),
  // * OpenGraph
  openGraph: {
    url: siteURL,
    title: companyTitle,
    siteName: companyTitle,
    locale: "en_US",
    type: "website",
    description: seoDescription,
    phoneNumbers: [companyPhone],
    images: [
      {
        url: siteURL + "SquareLogo.png",
        alt: "Logo",
        width: 512,
        height: 512,
        type: "image/png",
      },
      {
        url: siteURL + "preview.mp4",
        alt: "Preview",
        width: 1280,
        height: 720,
        type: "video/mp4",
      },
    ],
  },
  twitter: { card: "summary_large_image", site: siteURL },
  icons: [
    {
      rel: "icon",
      type: "image/png", // "image/x-icon",
      sizes: "512x512",
      href: "/android-chrome-512x512.png",
      url: "/android-chrome-512x512.png",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      sizes: "512x512",
      href: "/android-chrome-512x512.png",
      url: "/android-chrome-512x512.png",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
      url: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: themeColor,
      url: "/safari-pinned-tab.svg",
    },
  ],
} as const satisfies Metadata;

interface GenerateMetadataProps {
  title?: string;
  url: string;
  description?: string;
  alternates: { canonical: string };
  params?: { [key: string]: string | undefined };
  searchParams?: { [key: string]: string | undefined };
}

type GenerateMetadata = (
  props: GenerateMetadataProps,
  parent?: ResolvingMetadata,
) => Metadata;

// type GenerateMetadataAsync = (
//   props: GenerateMetadataProps,
//   parent: ResolvingMetadata,
// ) => Promise<Metadata>;

export const genSEOHelper: GenerateMetadata = (props) => {
  const { alternates, description, title, url } = props;
  return {
    ...SEOConfig,
    title: title ?? companyTitle,
    description: description ?? seoDescription,
    openGraph: { ...SEOConfig.openGraph, url },
    alternates: alternates,
  } satisfies Metadata;
};
