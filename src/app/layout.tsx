import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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
    default: "Hasync | Technical Excellence in Software Engineering",
    template: "%s | Hasync"
  },
  description: "Hasync is a premium software engineering agency. We build high-performance Web, Mobile, and AI solutions for global innovators and ambitious companies.",
  keywords: ["Software Engineering", "Web Development", "Mobile Apps", "AI Solutions", "Next.js", "React", "Digital Transformation", "Technical Consulting"],
  authors: [{ name: "Hasync Team", url: "https://hasync.vn" }],
  creator: "Hasync",
  publisher: "Hasync",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Hasync | Technical Excellence in Software Engineering",
    description: "Architecting high-performance digital solutions. We specialize in Next.js, AI integration, and scalable cloud architectures.",
    url: "https://hasync.vn",
    siteName: "Hasync Agency",
    images: [
      {
        url: "/og-image.png", // User should add this image
        width: 1200,
        height: 630,
        alt: "Hasync Agency - Technical Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasync | Technical Excellence",
    description: "Building the future of digital products with precision and scale.",
    images: ["/og-image.png"],
    creator: "@hasync",
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
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${manrope.variable} font-inter bg-background text-on-surface antialiased selection:bg-primary-container selection:text-white`}>
        <Navigation />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hasync",
              "url": "https://hasync.vn",
              "logo": "https://hasync.vn/hasync.png",
              "description": "Premium software engineering agency specializing in Web, Mobile, and AI solutions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1200 Tech Boulevard, Suite 400",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94107",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1 (555) 123-4567",
                "contactType": "customer service",
                "email": "hello@hasync.vn"
              },
              "sameAs": [
                "https://twitter.com/hasync",
                "https://github.com/hasync"
              ]
            }),
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
