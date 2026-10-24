import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import FloatingSocial from "@/components/FloatingSocial";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

import { Playfair_Display, Inter } from "next/font/google";
import { SITE, BASE_KEYWORDS, buildOpenGraph } from "./seo-config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const homeTitle =
  "Best Dermatologist in Nashik | Dr. Aditi Patil | Derma Suite Clinic";
const homeDescription =
  "Derma Suite is the best skin clinic in Nashik led by Dr. Aditi Patil. Expert dermatologist & skin specialist in Nashik offering acne, hair, laser & cosmetic treatments. Book appointment: +91 8799505624";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: homeTitle,
    template: `%s | Derma Suite Clinic Nashik`,
  },
  description: homeDescription,
  keywords: BASE_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: buildOpenGraph({
    title: homeTitle,
    description: homeDescription,
    path: "/",
  }),
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [SITE.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: SITE.logo,
  image: `${SITE.url}/images/gallery/gallery6.webp`,
  description:
    "Best dermatology and cosmetology clinic in Nashik. Dr. Aditi Patil offers skin, hair and aesthetic treatments including laser, botox, fillers, hair transplant and acne scar treatment.",
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 4, Dharmaraj Plaza, Old Gangapur Naka, Beside Adgonkar Gold",
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHours: "Mo-Sa 10:00-19:00",
  priceRange: "₹₹",
  medicalSpecialty: "Dermatology",
  hasMap: `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}`,
  sameAs: ["https://www.instagram.com/dr_aditipatil/"],
};

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: SITE.doctorName,
  url: SITE.url,
  image: `${SITE.url}/images/gallery/gallery6.webp`,
  description:
    "Best dermatologist in Nashik. Dr. Aditi Patil is a skin specialist, hair transplant expert and cosmetic dermatologist at Derma Suite, Nashik.",
  telephone: SITE.phone,
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 4, Dharmaraj Plaza, Old Gangapur Naka, Beside Adgonkar Gold",
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.pincode,
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "MedicalClinic",
    name: SITE.name,
    url: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <ThemeProvider>
          <Navbar />

          <div style={{ marginTop: "90px" }}>
            {children}
          </div>

          <Footer />
          <FloatingSocial />
        </ThemeProvider>
      </body>
    </html>
  );
}