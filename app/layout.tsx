import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://paulcarey.im'),
  title: "Paul Carey & Sons Ltd | Civil Engineering & Groundwork Specialists | Isle of Man",
  description: "Family-run civil engineering and groundwork contractors serving the Isle of Man since 1999. Expert services in civil engineering, plant hire, haulage, landscaping, recycling, and demolition.",
  keywords: "civil engineering, groundwork, Isle of Man, plant hire, haulage, demolition, recycling, landscaping, construction, Manx contractors",
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Paul Carey & Sons Ltd | Civil Engineering Specialists",
    description: "Leading civil engineering and groundwork contractors on the Isle of Man since 1999.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: '/meta-twitter-facebook.png',
        width: 1200,
        height: 630,
        alt: 'Paul Carey & Sons Ltd — Civil Engineering & Groundwork Specialists, Isle of Man',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Paul Carey & Sons Ltd | Civil Engineering Specialists",
    description: "Leading civil engineering and groundwork contractors on the Isle of Man since 1999.",
    images: ['/meta-twitter-facebook.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
