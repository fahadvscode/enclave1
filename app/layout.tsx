import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Providers } from "@/components/Providers";
import { SITE_URL } from "@/lib/floor-plans";
import { IMAGES } from "@/lib/images";
import { GOOGLE_ADS_ID } from "@/lib/google-ads";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Enclave Milton | Freehold Townhomes by Sundial Homes",
    template: "%s | The Enclave Milton",
  },
  description:
    "The Enclave Milton by Sundial Homes — freehold townhomes in southeast Milton, Ontario with no monthly maintenance fees. Register for floor plans and pricing. 15 models from 953 to 2,843 sq ft. From $599,990.",
  keywords: [
    "The Enclave Milton",
    "The Enclave",
    "new townhomes Milton",
    "freehold townhomes Ontario",
    "Sundial Homes",
  ],
  openGraph: {
    siteName: "The Enclave Milton",
    locale: "en_CA",
    type: "website",
    images: [{ url: IMAGES.hero, width: 1200, height: 630, alt: "The Enclave Milton townhomes" }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
