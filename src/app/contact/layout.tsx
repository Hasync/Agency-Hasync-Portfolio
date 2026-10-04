import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ Elysium để tư vấn thiết kế website, AI tool, chatbot và automation theo yêu cầu.",
  openGraph: {
    title: "Liên hệ Elysium | Tư vấn Website & AI",
    description: "Gọi 0338994373 hoặc gửi yêu cầu để được tư vấn giải pháp Website & AI phù hợp.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
