import type { Metadata, Viewport } from "next";
import { fontDisplay, fontBody, fontMono } from "@/lib/fonts";
import { SITE } from "@/lib/data/site";
import { CERTIFICATES } from "@/lib/data/certificates";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import CustomCursor from "@/components/layout/CustomCursor";
import LoadingScreen from "@/components/layout/LoadingScreen";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.company,
  keywords: [
    "Syed Ali Hasan Moosavi",
    "Ali Hasan",
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM Engineer",
    "Full Stack Developer",
    "Blockchain Developer",
    "Web3 Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Python Developer",
    "FastAPI Developer",
    "Automation Engineer",
    "OSINT Developer",
    "Open Source Developer",
    "SAYANJALI NEXUS",
    "SYJ",
    "Software Engineer India",
    "AI Startup Founder",
    "Developer Portfolio Hyderabad",
  ],
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${SITE.url}/rss.xml` },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og-image.png"],
    creator: "@SHAliMoosavi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#08080B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.name,
        url: SITE.url,
        jobTitle: [
          "AI Engineer",
          "Full Stack Developer",
          "Blockchain Developer",
          SITE.role,
        ],
        worksFor: { "@id": `${SITE.url}/#organization` },
        hasCredential: CERTIFICATES.filter((c) => c.category === "Certification").map(
          (c) => ({
            "@type": "EducationalOccupationalCredential",
            name: c.title,
            credentialCategory: "certificate",
            recognizedBy: { "@type": "Organization", name: c.issuer },
            ...(c.date ? { dateCreated: c.date } : {}),
            ...(c.verifyUrl ? { url: c.verifyUrl } : {}),
          })
        ),
        sameAs: [
          SITE.social.github,
          SITE.social.linkedin,
          SITE.social.twitter,
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.location.city,
          addressRegion: SITE.location.region,
          addressCountry: SITE.location.country,
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.company,
        url: "https://shalimoosavi.github.io/SAYANJALI_NEXUS/",
        founder: { "@id": `${SITE.url}/#person` },
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.location.city,
          addressRegion: SITE.location.region,
          addressCountry: SITE.location.country,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": `${SITE.url}/#person` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE.url}/#profilepage`,
        url: SITE.url,
        mainEntity: { "@id": `${SITE.url}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body className="bg-obsidian bg-ledger-field cursor-none-desktop">
        <StructuredData />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LoadingScreen />
        <CustomCursor />
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScrollProvider>
          <div id="main-content">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
