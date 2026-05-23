import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GOOGLE_ADS_TAG_ID, GOOGLE_ANALYTICS_TAG_ID } from "../lib/google-ads";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hidradenitis Suppurativa | Bekir Atik",
  description:
    "Hidradenitis Suppurativa hakkında bilgilendirici, dönüşüm odaklı ve tek sayfalık açılış sayfası.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_TAG_ID}`}
          strategy="beforeInteractive"
        />
        <Script id="google-tag-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_TAG_ID}');
            gtag('config', '${GOOGLE_ANALYTICS_TAG_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
