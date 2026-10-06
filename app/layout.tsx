import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Elite Karate Events | Karate Championships & Competitions",
  description: "Discover karate competitions, championships, events, results and athlete highlights with Elite Karate Events. Where Champions Compete.",
  keywords: "karate, competitions, championships, events, martial arts",
  openGraph: {
    type: "website",
    url: "https://elitekarateevents.com",
    title: "Elite Karate Events | Karate Championships & Competitions",
    description: "Discover karate competitions, championships, events, results and athlete highlights with Elite Karate Events.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584735175097-24340077477d?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Elite Karate Events",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#050505" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>{children}</body>
    </html>
  );
}
