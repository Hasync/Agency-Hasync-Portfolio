import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Hasync's mission, story, and the expert team behind our high-performance software engineering solutions.",
  openGraph: {
    title: "About Hasync | The Agency Architecting Digital Futures",
    description: "Discover our journey, our values of technical excellence, and the leadership driving digital transformation.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
