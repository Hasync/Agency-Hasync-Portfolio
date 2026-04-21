import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore Hasync's technical capabilities: Modern Web Development, Mobile Engineering, AI & Machine Learning, and Cloud Architecture.",
  openGraph: {
    title: "Technical Services & Capabilities | Hasync",
    description: "We build end-to-end platforms using React, Next.js, AI integrations, and automated cloud infrastructure.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
