import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Ahnaf Rafid | Portfolio",
  description:
    "I am Ahnaf Rafid, a Web Developer focused on creating modern and responsive websites with the latest technologies.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://ahnaf-rafid.vercel.app/",
    title: "Ahnaf Rafid | Portfolio",
    description:
      "I am Ahnaf Rafid, a Web Developer focused on creating modern and responsive websites with the latest technologies.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Ahnafrafid7",
    title: "Ahnaf Rafid | Portfolio",
    description:
      "I am Ahnaf Rafid, a Web Developer focused on creating modern and responsive websites with the latest technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
