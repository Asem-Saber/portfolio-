import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Asem Saber — AI Engineer",
  description:
    "AI Engineer specializing in NLP, Agentic AI, and LLM-powered applications. Building intelligent systems that understand language, extract knowledge, and act autonomously.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${inter.className} antialiased`}
      >
        <LenisProvider>
          <Navbar />
          <SocialSidebar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
