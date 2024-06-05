import type { MetadataRoute } from "next";
import { NAV_ITEMS } from "~/utils";

import { siteURL } from "~/utils/seoConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteURL,
      lastModified: new Date(),
      priority: 0.7,
    },
    ...NAV_ITEMS.map((item) => ({
      url: siteURL + item.href,
      lastModified: new Date(),
      priority: 0.7,
    })),
  ];
}
