import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadataBase = new URL("https://pegrio.com");

export const metadata: Metadata = {
  metadataBase: metadataBase,
  title: {
    default: "Pegrio | Strategic Business Solutions",
    template: "%s | Pegrio"
  },
  description: "Pegrio provides top-tier strategic consulting, digital transformation, and brand development services to elevate your business potential.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pegrio.com",
    title: "Pegrio | Strategic Business Solutions",
    description: "Elevating businesses through innovation and strategic excellence.",
    siteName: "Pegrio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pegrio | Strategic Business Solutions",
    description: "Elevating businesses through innovation and strategic excellence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Pegrio",
              "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
              "telephone": "(713) 555-0198",
              "email": "info@pegrio.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4521 Westheimer Rd, Suite 200",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77027",
                "addressCountry": "US"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "$$"
            }),
          }}
        />
      </body>
    </html>
  );
}