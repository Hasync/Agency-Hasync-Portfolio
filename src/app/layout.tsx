import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "Elysium | Thiết kế Website & AI",
    template: "%s | Elysium"
  },
  description: "Elysium thiết kế website, chatbot, AI tool và automation theo yêu cầu cho cá nhân, shop và doanh nghiệp.",
  keywords: ["Thiết kế Website", "AI Tool", "Chatbot", "Automation", "Next.js", "React", "Elysium", "Đồ án AI", "Data"],
  authors: [{ name: "Elysium Team" }],
  creator: "Elysium",
  publisher: "Elysium",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Elysium | Thiết kế Website & AI",
    description: "Thiết kế website, chatbot, AI tool và automation theo yêu cầu cho cá nhân, shop và doanh nghiệp.",
    siteName: "Elysium",
    images: [
      {
        url: "/bannerHero.png",
        width: 1200,
        height: 630,
        alt: "Elysium - Thiết kế Website & AI",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elysium | Thiết kế Website & AI",
    description: "Website, chatbot, AI tool và automation theo yêu cầu.",
    images: ["/bannerHero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${manrope.variable} font-inter bg-background text-on-surface antialiased selection:bg-primary-container selection:text-white`}>
        <Navigation />
        <FloatingCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Elysium",
              "logo": "/bannerHero.png",
              "description": "Thiết kế website, chatbot, AI tool và automation theo yêu cầu cho cá nhân, shop và doanh nghiệp.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "VN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "0338994373",
                "contactType": "customer service",
                "email": "elysium.techvn@gmail.com"
              }
            }),
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
