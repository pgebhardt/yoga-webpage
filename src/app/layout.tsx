import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://yoga-webpage-v58z.vercel.app'),
  title: "Bay Area Yoga | Cupertino's Premier Yoga Studio",
  description: "Join our welcoming yoga community in Cupertino. Expert instruction in Vinyasa, Hatha, Power, and Yin yoga with Elena Gebhardt. Beautiful studio with natural light and bamboo floors. First class free!",
  keywords: "yoga, cupertino yoga, bay area yoga, yoga classes, vinyasa, hatha, power yoga, yin yoga, yoga studio, elena gebhardt, mindfulness, wellness, meditation",
  openGraph: {
    title: "Bay Area Yoga | Cupertino's Premier Yoga Studio",
    description: "Join our welcoming yoga community in Cupertino. Expert instruction in Vinyasa, Hatha, Power, and Yin yoga with Elena Gebhardt. Beautiful studio with natural light and bamboo floors. First class free!",
    url: "https://yoga-webpage-v58z.vercel.app",
    siteName: "Bay Area Yoga",
    images: [
      {
        url: "/hero-yoga.jpg",
        width: 1200,
        height: 630,
        alt: "Bay Area Yoga Studio - Peaceful yoga practice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bay Area Yoga | Cupertino's Premier Yoga Studio",
    description: "Join our welcoming yoga community in Cupertino. Expert instruction in Vinyasa, Hatha, Power, and Yin yoga with Elena Gebhardt. Beautiful studio with natural light and bamboo floors. First class free!",
    images: ["/hero-yoga.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "verification_token",
  },
  alternates: {
    canonical: "https://yoga-webpage-v58z.vercel.app",
  },
  authors: [{ name: "Elena Gebhardt" }],
  category: "Fitness & Wellness",
  creator: "Elena Gebhardt",
  publisher: "Bay Area Yoga",
  formatDetection: {
    telephone: true,
    email: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
