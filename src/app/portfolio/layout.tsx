import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View Hasync's latest projects in FinTech, Data Science, Enterprise solutions, and Blockchain infrastructure.",
  openGraph: {
    title: "Our Work & Case Studies | Hasync",
    description: "Discover how we deliver competitive advantages through precision engineering and modular software architecture.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
