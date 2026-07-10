import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from 'react-hot-toast';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Maxino AC Services",
  description: "Reliable AC installation, repair, and maintenance services.",
  metadataBase: new URL("https://maxino.local"),
  keywords: ["AC", "air conditioning", "repair", "installation", "maintenance", "HVAC", "Maxino"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${outfit.variable} antialiased bg-zinc-50 text-zinc-900 `}
      >
       <Navbar/>
        <main className=" min-h-screen ">{children}</main>
       <Footer/>
       <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
