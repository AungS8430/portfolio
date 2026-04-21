import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Image from "next/image";
import background from "@/public/background.png";

const sreda = localFont({
  src: "./fonts/Sreda.ttf",
  variable: "--font-sreda"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export const metadata: Metadata = {
  title: "AungS8430",
  description: "AungS8430's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sreda.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sreda">
        <Image src={background} alt="Background" fill priority unoptimized sizes="100vw" style={{ objectFit: "cover", objectPosition: "center", inset: 0, zIndex: -1 }} />
        {children}
      </body>
    </html>
  );
}
