import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: "Technical perspectives on AI infrastructure, Rust for microservices, and modern software engineering cultures by Hasync.",
  openGraph: {
    title: "Technical Engineering Blog & Insights | Hasync",
    description: "Deep dives into architecture, code culture, and the frontier of digital engineering.",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
