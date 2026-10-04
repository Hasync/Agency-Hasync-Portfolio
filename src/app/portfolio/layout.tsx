import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dự án",
  description: "Các hướng triển khai website, chatbot, AI tool và automation tiêu biểu của Elysium.",
  openGraph: {
    title: "Dự án Website & AI | Elysium",
    description: "Khám phá các giải pháp số Elysium triển khai cho shop, cá nhân và doanh nghiệp.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
