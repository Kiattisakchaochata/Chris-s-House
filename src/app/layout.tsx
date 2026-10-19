import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: {
    canonical: "/",
    languages: {
      th: `${SITE.url}/`,
      "x-default": `${SITE.url}/`,
    },
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Chris's House บ้านคริส อยุธยา",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  inLanguage: "th-TH",
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "พระนครศรีอยุธยา",
    addressRegion: "พระนครศรีอยุธยา",
    addressCountry: "TH",
  },
  servesCuisine: ["Thai"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
  lang="th"
  prefix="og: https://ogp.me/ns#"
  suppressHydrationWarning
  data-scroll-behavior="smooth"
>
      <head>
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
      </head>

      {/* 🔥 ตรงนี้คือจุดสำคัญ */}
      <body className="flex min-h-screen flex-col bg-black text-white antialiased">
        
        {/* JSON-LD */}
        <script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd, null, 2),
          }}
        />
        <script
          id="ld-restaurant"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd, null, 2),
          }}
        />

        {/* Navbar */}
        <Navbar />

        {/* 🔥 ตัวนี้สำคัญมาก */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}