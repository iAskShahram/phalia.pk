import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://phalia.pk";
const defaultTitle = "Phalia.pk | Coming Soon";
const defaultDescription =
  "Phalia.pk spotlights the culture, stories, and community of Phalia with curated guides, events, and news.";
const ogImage = "/og-logo.svg";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Phalia.pk",
  url: siteUrl,
  description: defaultDescription,
  image: `${siteUrl}${ogImage}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Phalia.pk",
  },
  description: defaultDescription,
  applicationName: "Phalia.pk",
  authors: [{ name: "Phalia.pk" }],
  creator: "Phalia.pk",
  publisher: "Phalia.pk",
  keywords: [
    "Phalia",
    "Punjab",
    "Pakistan",
    "Culture",
    "Community",
    "Events",
    "Guides",
    "MBDin",
    "MBDin.cc",
    "MBDin Pakistan",
    "Mandi Bahauddin",
    "Mandi Bahauddin District",
    "Phalia.pk",
    "Phalia Website",
    "website",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: "Phalia.pk",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Phalia.pk preview",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@phalia_pk",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "community",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
