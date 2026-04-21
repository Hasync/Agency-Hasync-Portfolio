import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Ready to build your next technical breakthrough? Get in touch with Hasync for your software development and AI engineering needs.",
  openGraph: {
    title: "Work With Hasync | Start Your Project",
    description: "Connect with our engineering team to architect and build high-performance digital products.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
