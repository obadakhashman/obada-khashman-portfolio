import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta"
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel"
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal"
});

export const metadata: Metadata = {
  title: "Obada Khashman | Strategist · Investor · Creator",
  description:
    "Obada Khashman — serial entrepreneur, investment advisor and filmmaker shaping destinies and investing in tomorrow.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${cinzel.variable} ${tajawal.variable}`}>
      <body className="bg-graphite bg-radial-fade">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
