import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đội ngũ",
  description: "Tìm hiểu đội ngũ Elysium và cách chúng tôi xây dựng website, AI tool, chatbot và automation thực dụng.",
  openGraph: {
    title: "Đội ngũ Elysium | Website & AI",
    description: "Đội ngũ trẻ tập trung vào thiết kế website, AI ứng dụng và tự động hóa dễ vận hành.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
