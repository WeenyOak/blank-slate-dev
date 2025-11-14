// next-seo.config.ts

// We keep this as a plain config object (no typed import from "next-seo")
// so TypeScript doesn't complain about missing DefaultSeoProps.
const config = {
  titleTemplate: "%s | Blank Slate Dev",
  defaultTitle: "Blank Slate Dev — We build ideas into products",
  description:
    "We design, build, and launch high-polish web apps for founders and teams. From idea to production.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blankslatedev.com",
    siteName: "Blank Slate Dev",
    images: [
      {
        url: "https://blankslatedev.com/og.png",
        width: 1200,
        height: 630,
        alt: "Blank Slate Dev",
      },
    ],
  },
  twitter: {
    handle: "@blankslatedev",
    site: "@blankslatedev",
    cardType: "summary_large_image",
  },
} as const;

export default config;
