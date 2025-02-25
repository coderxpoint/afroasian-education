import type { Metadata } from "next";
import { Teachers } from "next/font/google";
import React from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TopBar from "@/components/TopBar";
import Script from "next/script";

const font = Teachers({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Afroasian Education - Quality Learning for Everyone",
  description:
    "Afroasian Education provides top-quality learning resources, courses, and guidance for students and professionals worldwide.",
  keywords: "education, online learning, Afroasian, courses, e-learning",
  icons: [
    {
      url: "/logo.svg",
      rel: "icon",
      type: "image/svg",
      sizes: "32x32",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="hs-script-loader"
          strategy="lazyOnload"
          src="//js-na2.hs-scripts.com/242091874.js"
        />
        {/* Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8PE67M9G4T"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8PE67M9G4T');
          `}
        </Script>
      </head>
      <body className={`${font.className} antialiased`}>
        <TopBar />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
