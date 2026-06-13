import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glennrodrigues.com"),
  title: "Glenn Rodrigues - Frontend Engineer",
  description: "Frontend engineer specializing in React, Next.js, and TypeScript. I build SaaS platforms, AI interfaces, and web products that actually perform. Based in Mumbai, working remotely with clients worldwide.",
  keywords: ["frontend", "react", "nextjs", "typescript", "ai", "saas", "web development"],
  authors: [{ name: "Glenn Rodrigues" }],
  creator: "Glenn Rodrigues",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://glennrodrigues.com",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Glenn Rodrigues - Frontend Engineer",
    description: "Frontend engineer specializing in React, Next.js, and TypeScript. I build products that actually perform.",
    type: "website",
    locale: "en_US",
    siteName: "Glenn Rodrigues Portfolio",
    url: "https://glennrodrigues.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glenn Rodrigues - Frontend Engineer",
    description: "Frontend engineer specializing in React, Next.js, and TypeScript. I build products that actually perform.",
    images: ["/twitter-image.png"],
  },
};

export const viewport = {
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Glenn Rodrigues",
    jobTitle: "Frontend Engineer",
    url: "https://glennrodrigues.com",
    sameAs: [
      "https://github.com/Glennrod10",
      "https://www.linkedin.com/in/glennrodrigues17/",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
