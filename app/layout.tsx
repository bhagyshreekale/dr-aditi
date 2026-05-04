import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import FloatingSocial from "@/components/FloatingSocial";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

import { Playfair_Display, Inter } from "next/font/google";

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

export const metadata = {
  title: "Dr. Aditi Patil",
  description:
    "Derma Suite Clinic - Dr. Aditi Patil, a renowned dermatologist in Pune, offers expert skincare solutions. With a commitment to excellence, Dr. Patil provides personalized treatments for various skin conditions, ensuring radiant and healthy skin for her patients.",

icons: {
  icon: "/logo.png",
  shortcut: "/logo.png",
  apple: "/logo.png",
},
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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