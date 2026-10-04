import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cộng tác",
  description: "Cùng Elysium xây dựng website, AI tool, chatbot và automation hữu ích cho khách hàng.",
  openGraph: {
    title: "Cộng tác cùng Elysium",
    description: "Tìm kiếm cộng sự yêu thích thiết kế, lập trình và AI ứng dụng.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
