import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Hasync's team of engineers, designers, and visionaries. Help us architect the future of digital engineering.",
  openGraph: {
    title: "Careers at Hasync | Join Our Engineering Team",
    description: "Discover open roles and a culture where technical excellence and curiosity are celebrated.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
