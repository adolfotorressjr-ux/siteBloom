import type { Metadata } from "next";
import Navigation from "@/components/studio/navigation";
import { Footer } from "@/components/studio/shared";
import { site } from "@/data/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "siteBloom — Web Design & Development",
    template: "%s | siteBloom",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Good businesses deserve better websites. — siteBloom",
    description: site.description,
    url: site.url,
    siteName: "siteBloom",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "siteBloom — Good businesses deserve better websites.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "siteBloom — Web Design & Development",
    description: site.description,
  },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/manrope-regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/manrope-bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "siteBloom",
              url: site.url,
              description: site.description,
              address: {
                "@type": "PostalAddress",
                addressLocality: "El Paso",
                addressRegion: "TX",
                addressCountry: "US",
              },
              areaServed: "United States",
            }),
          }}
        />
      </body>
    </html>
  );
}
