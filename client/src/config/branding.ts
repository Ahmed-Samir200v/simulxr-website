export const BRAND = {
  name: "SIMULXR",
  /** Official supplied wordmark. Its artwork is preserved unchanged. */
  logo: "/images/logo.svg",
  /** Official light-background variant. Its artwork is preserved unchanged. */
  logoDark: "/images/logo-dark.svg",
  tagline: "Train for the Unthinkable",
  favicon: "/favicon.svg",
  ogImage: "/images/logo-dark.svg",
  parentBrand: "AFAQO",
  parentSiteUrl: (import.meta.env.VITE_AFAQO_URL || "").replace(/\/$/, ""),
} as const;
