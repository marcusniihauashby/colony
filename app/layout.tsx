import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather, Neuton, Slabo_13px, Questrial } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/final-logo.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const questrial = Questrial({
  weight: ['400'],
  variable: "--font-questrial",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colony AI",
  description: "Colony AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className={`flex items-center p-4 text-white ${questrial.className}`} style={{backgroundColor: '#0F1F1D'}}>
          <Image src={Logo} alt="Logo" width={64} height={64} />
          <Link href="/" className="ml-10 text-3xl font-bold">
            Colony AI
          </Link>
          <Link href="/about" className="ml-auto ml-4 text-lg">
            
          </Link>
          <Link href="/contact" className="ml-4 text-lg">
            
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
