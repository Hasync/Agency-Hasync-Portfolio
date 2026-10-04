import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chia sẻ",
  description: "Góc chia sẻ về thiết kế website, AI ứng dụng, chatbot và automation từ Elysium.",
  openGraph: {
    title: "Góc chia sẻ Website & AI | Elysium",
    description: "Kinh nghiệm triển khai website, chatbot và tự động hóa cho cá nhân, shop và doanh nghiệp.",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
