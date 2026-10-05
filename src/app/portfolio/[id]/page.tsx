"use client";

import content from "@/data/content.json";
import { ArrowLeft, ArrowRight, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

const detailContent = {
  "website-ban-hang": {
    fit: "Shop nhỏ, dịch vụ cá nhân hoặc doanh nghiệp cần một trang bán hàng rõ ràng, dễ liên hệ.",
    scope: ["Trang giới thiệu sản phẩm/dịch vụ", "Form liên hệ hoặc CTA Zalo", "Tối ưu hiển thị mobile"],
    demo: "Có thể demo luồng khách xem sản phẩm, đọc thông tin chính và liên hệ qua Zalo/form.",
    feedback: "Website rõ hơn, khách dễ xem dịch vụ và nhắn tư vấn nhanh hơn.",
    author: "Chủ shop online",
  },
  "ai-chatbot-tu-van": {
    fit: "Đội ngũ cần bot trả lời FAQ, tư vấn bước đầu và thu thông tin khách hàng.",
    scope: ["Kịch bản hỏi đáp", "Thu lead cơ bản", "Chuyển tiếp cho nhân sự"],
    demo: "Có thể demo luồng khách hỏi thông tin, bot trả lời và đề xuất để lại liên hệ.",
    feedback: "Bot giúp giảm các câu hỏi lặp lại và gom thông tin khách trước khi tư vấn.",
    author: "Đội ngũ tư vấn dịch vụ",
  },
  "tool-ai-noi-bo": {
    fit: "Cá nhân hoặc đội ngũ cần công cụ AI hỗ trợ xử lý nội dung, dữ liệu hoặc báo cáo.",
    scope: ["Form nhập liệu", "Luồng xử lý AI", "Kết quả dễ kiểm tra"],
    demo: "Có thể demo một luồng nhập dữ liệu, AI xử lý và trả về kết quả có cấu trúc.",
    feedback: "Demo rõ ràng, dễ trình bày và phù hợp với quy trình thật.",
    author: "Người dùng nội bộ",
  },
  "automation-van-hanh": {
    fit: "Shop hoặc đội ngũ vận hành muốn giảm thao tác lặp lại giữa form, sheet, email và thông báo.",
    scope: ["Kết nối biểu mẫu", "Đồng bộ dữ liệu", "Thông báo tự động"],
    demo: "Có thể demo luồng khách gửi form, dữ liệu vào sheet và thông báo được gửi tự động.",
    feedback: "Quy trình gọn hơn, ít phải nhập tay và dễ theo dõi trạng thái.",
    author: "Đội ngũ vận hành",
  },
} satisfies Record<string, { fit: string; scope: string[]; demo: string; feedback: string; author: string }>;

export default function PortfolioDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const { portfolio, company } = content;
  const project = portfolio.projects.find((item) => item.id === id);

  if (!project) {
    return notFound();
  }

  const detail = detailContent[project.id as keyof typeof detailContent] ?? detailContent["website-ban-hang"];
  const relatedProjects = portfolio.projects.filter((item) => item.id !== project.id).slice(0, 3);

  return (
    <main className="overflow-x-hidden bg-white">
      <section className="px-6 pt-32 pb-10 md:px-8 md:pt-36 md:pb-12">
        <div className="mx-auto max-w-7xl">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-on-surface-variant transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Quay lại sản phẩm
          </Link>

          <div className="mt-10 grid gap-8 border-b border-outline-variant/25 pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.22em] text-primary">{project.category}</span>
              <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-on-surface md:text-6xl">{project.title}</h1>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg lg:justify-self-end">{project.description}</p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 md:px-8 md:pb-16">
        <div className="relative mx-auto aspect-[1.55] max-w-7xl overflow-hidden bg-surface-container-low md:aspect-[2.25]">
          <Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover" />
        </div>
      </section>

      <section className="px-6 pb-14 md:px-8 md:pb-16">
        <div className="mx-auto grid max-w-7xl gap-8 border-y border-outline-variant/25 py-10 md:grid-cols-3">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Phù hợp</span>
            <p className="mt-4 text-lg font-semibold leading-relaxed text-on-surface">{detail.fit}</p>
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Phạm vi mẫu</span>
            <ul className="mt-4 space-y-3">
              {detail.scope.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-on-surface-variant">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Demo</span>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">{detail.demo}</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3">
              Yêu cầu xem demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 md:px-8 md:pb-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Feedback</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-on-surface">Phản hồi sau demo</h2>
          </div>
          <figure className="border-l-2 border-primary pl-6">
            <Quote className="mb-4 h-7 w-7 text-primary/30" />
            <blockquote className="text-xl font-semibold leading-relaxed text-on-surface">“{detail.feedback}”</blockquote>
            <figcaption className="mt-5 text-sm font-bold text-primary">{detail.author}</figcaption>
          </figure>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl border-t border-outline-variant/25 pt-10">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Sản phẩm liên quan</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-on-surface">Xem thêm mẫu khác</h2>
            </div>
            <a href={`https://zalo.me/${company.phone}`} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-none bg-on-surface px-7 text-sm font-bold text-white transition-all hover:bg-primary active:scale-95">
              Nhắn Zalo
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {relatedProjects.map((item) => (
              <Link key={item.id} href={`/portfolio/${item.id}`} className="group block">
                <div className="relative aspect-[1.35] overflow-hidden bg-surface-container-low">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-4 border-t border-outline-variant/20 pt-4">
                  <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-primary/70">{item.category}</span>
                  <h3 className="mt-2 text-lg font-manrope font-extrabold text-on-surface transition-colors group-hover:text-primary">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
