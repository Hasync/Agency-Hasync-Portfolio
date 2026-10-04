import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description: "Dịch vụ thiết kế website, AI tool, chatbot và automation theo yêu cầu của Elysium.",
  openGraph: {
    title: "Dịch vụ Website & AI | Elysium",
    description: "Thiết kế website, chatbot, AI tool và tự động hóa cho cá nhân, shop và doanh nghiệp.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
