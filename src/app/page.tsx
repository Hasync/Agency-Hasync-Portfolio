"use client";

import { motion, useInView, useSpring, useTransform, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, DraftingCompass, Lightbulb, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import content from "@/data/content.json";

const kpis = [
  { value: 24, suffix: "h", label: "phản hồi tư vấn & định hướng giải pháp" },
  { value: 1, suffix: "tr+", label: "ngân sách khởi điểm minh bạch" },
  { value: 258, suffix: "+", label: "khách hàng và dự án đã đồng hành" },
  { value: 40, suffix: "+", label: "quy trình được số hóa, tự động hóa" },
];

const fitItems = [
  "Cá nhân cần portfolio hoặc website giới thiệu",
  "Shop nhỏ cần landing page bán hàng, gắn Zalo/Messenger",
  "Doanh nghiệp cần CRM, dashboard, automation hoặc hệ thống nội bộ",
  "Sinh viên cần hỗ trợ demo đồ án CNTT / AI / Data",
];

const pricingPlans = [
  {
    name: "Website Cơ Bản",
    price: "Từ 1tr",
    description: "Dành cho cá nhân, sinh viên, shop nhỏ hoặc người cần một landing page gọn đẹp để bắt đầu online.",
    features: ["1 landing page hoặc web giới thiệu cơ bản", "3-5 section theo nội dung khách cung cấp", "Responsive tốt trên điện thoại", "Form liên hệ đơn giản", "Gắn nút gọi, Zalo, Messenger"],
    cta: "Tư vấn gói cơ bản",
  },
  {
    name: "Website Chuyên Nghiệp",
    price: "Từ 3tr",
    description: "Dành cho dịch vụ, cửa hàng hoặc doanh nghiệp cần hình ảnh chỉn chu và cấu trúc nội dung đáng tin hơn.",
    features: ["3-5 trang: trang chủ, dịch vụ, giới thiệu, liên hệ", "Giao diện theo thương hiệu", "Tối ưu responsive và trải nghiệm người dùng", "SEO cơ bản, tốc độ tải tốt", "Hiệu ứng chuyển động nhẹ"],
    cta: "Tư vấn gói chuyên nghiệp",
    featured: true,
  },
  {
    name: "Web App, CRM & AI",
    price: "Báo giá riêng",
    description: "Dành cho doanh nghiệp cần tool riêng, CRM, dashboard, chatbot hoặc automation theo quy trình nội bộ.",
    features: ["Khảo sát nghiệp vụ và luồng vận hành", "Báo giá theo module và phạm vi rõ ràng", "Thiết kế web/app theo yêu cầu", "Chatbot, AI tool và automation", "Tích hợp API, dữ liệu, email, Google Sheet"],
    cta: "Nhận báo giá riêng",
  },
];

const serviceImages = [
  {
    src: "/service-website.svg",
    alt: "Minh họa dịch vụ thiết kế website Elysium",
    accent: "from-primary/10 to-primary-container/10",
    deliverable: "Bàn giao web responsive, form liên hệ và nút Zalo/Messenger.",
  },
  {
    src: "/service-ai-tool.svg",
    alt: "Minh họa dịch vụ AI tool theo yêu cầu Elysium",
    accent: "from-primary/10 to-tertiary/10",
    deliverable: "Tool theo quy trình thật, có hướng dẫn sử dụng sau bàn giao.",
  },
  {
    src: "/service-chatbot.svg",
    alt: "Minh họa dịch vụ chatbot tư vấn Elysium",
    accent: "from-primary/10 to-surface-container/80",
    deliverable: "FAQ, kịch bản tư vấn và luồng chuyển tiếp cho nhân sự.",
  },
  {
    src: "/service-automation.svg",
    alt: "Minh họa dịch vụ automation vận hành Elysium",
    accent: "from-tertiary/10 to-primary/10",
    deliverable: "Workflow kết nối form, sheet, email, Zalo hoặc công cụ nội bộ.",
  },
];

const revealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.03,
    },
  },
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

function AnimatedKpi({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const springValue = useSpring(0, { stiffness: 80, damping: 22 });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.35 }}
      className="group relative rounded-[1.75rem] bg-white/80 px-5 py-6 text-left shadow-[0_16px_50px_rgba(0,82,204,0.07)] transition-all duration-300 hover:-translate-y-1 hover:bg-white md:px-6"
    >
      <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-linear-to-r from-primary/70 to-tertiary/60 opacity-70" />
      <div className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.22em] text-primary/50">Impact</div>
      <div className="text-3xl md:text-4xl font-manrope font-extrabold text-primary tracking-[-0.04em] mb-2">
        <motion.span>{displayValue}</motion.span>{suffix}
      </div>
      <p className="text-sm font-semibold text-on-surface-variant leading-relaxed">{label}</p>
    </motion.div>
  );
}

function HeroProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[28rem]">
      <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-primary/15 blur-[80px]" />
      <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-tertiary/15 blur-[80px]" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 p-3 shadow-2xl shadow-primary/15 backdrop-blur-xl">
        <div className="relative aspect-[0.9] overflow-hidden rounded-[1.35rem] border border-outline-variant/20 bg-surface-container-low sm:aspect-[1.12]">
          <Image
            src="/Collaborative AI Workspace✨.png"
            alt="Không gian làm việc AI cộng tác của Elysium"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 544px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { home, services, company } = content;

  return (
    <main className="overflow-x-hidden">
      <section className="relative flex items-center pt-28 pb-12 md:min-h-[76vh] md:pt-24 md:pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid md:grid-cols-2 gap-8 md:gap-10 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 md:space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.06 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-on-surface"
            >
              {home.hero.titlePart1} <span className="text-primary">{home.hero.titleHighlight}</span> {home.hero.titlePart2}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.12 }}
              className="text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed"
            >
              {home.hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.18 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href="#consult" className="btn-primary btn-attention px-7 md:px-10 py-4 text-base md:text-lg cursor-pointer">
                Nhận tư vấn miễn phí
              </Link>
              <Link href="#pricing" className="btn-ghost px-7 md:px-10 py-4 text-base md:text-lg cursor-pointer">
                Xem bảng giá
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="relative"
          >
            <HeroProductMockup />
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-b from-white via-surface-container-low to-white py-16 md:py-18">
        <div className="absolute left-1/2 top-8 h-32 w-[42rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[90px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
          >
            {kpis.map((kpi) => (
              <AnimatedKpi key={kpi.label} value={kpi.value} suffix={kpi.suffix} label={kpi.label} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-18 px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={revealContainer}
          className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-5 md:gap-8"
        >
          <motion.div variants={revealItem} className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{services.title}</h2>
            <p className="text-base md:text-lg text-on-surface-variant">{services.description}</p>
          </motion.div>
          <motion.div variants={revealItem}>
            <Link href="/services" className="group flex items-center gap-2 text-primary font-bold text-lg">
              Xem chi tiết dịch vụ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={revealContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {services.list.slice(0, 4).map((service, idx) => {
            const image = serviceImages[idx];

            return (
              <motion.div
                key={service.title}
                variants={revealItem}
                whileHover={{ y: -5 }}
                className="group rounded-[1.75rem] bg-white/90 p-3 shadow-[0_16px_50px_rgba(0,82,204,0.07)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-primary/10"
              >
                <div className={`relative mb-4 aspect-[1.65] overflow-hidden rounded-[1.35rem] bg-linear-to-br ${image.accent}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-manrope font-extrabold tracking-widest text-primary shadow-sm backdrop-blur">
                    0{idx + 1}
                  </div>
                </div>
                <div className="px-2 pb-3">
                  <h3 className="font-manrope text-[1.05rem] font-extrabold leading-snug text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[0.9rem] text-on-surface-variant leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-all duration-300 group-hover:gap-3"
                    aria-label={`Xem chi tiết ${service.title}`}
                  >
                    Xem thêm
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="px-6 md:px-8 pb-16 md:pb-20 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={revealContainer}
          className="rounded-[2rem] bg-white p-6 md:p-8 border border-outline-variant/20 shadow-sm"
        >
          <motion.div variants={revealItem} className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <span className="text-tertiary font-bold text-xs uppercase tracking-widest">Phù hợp với ai?</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3">Elysium làm giải pháp vừa đủ cho nhu cầu thật</h2>
            </div>
            <p className="text-on-surface-variant max-w-xl leading-relaxed">Từ website đơn giản đến CRM, hệ thống nội bộ và AI tool, đội ngũ sẽ tư vấn theo mục tiêu, ngân sách và khả năng vận hành của bạn.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fitItems.map((item, idx) => (
              <motion.div key={item} variants={revealItem} className="rounded-3xl bg-surface-container-low p-5 border border-outline-variant/20">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-black text-primary">0{idx + 1}</div>
                <p className="text-sm font-semibold leading-relaxed text-on-surface-variant">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-6 md:px-8 pb-20 md:pb-24 max-w-7xl mx-auto" id="pricing">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={revealContainer}
          className="text-center max-w-3xl mx-auto mb-5"
        >
          <motion.span variants={revealItem} className="block text-tertiary font-bold text-xs uppercase tracking-widest">Bảng giá tham khảo</motion.span>
          <motion.h2 variants={revealItem} className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-6">Gói dịch vụ linh hoạt theo nhu cầu</motion.h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={revealContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={revealItem}
              whileHover={{ y: -6 }}
              className={`flex flex-col rounded-3xl p-6 md:p-8 border shadow-sm relative overflow-hidden transition-shadow duration-300 hover:shadow-xl ${plan.featured ? "bg-on-surface text-white border-on-surface" : "bg-white border-outline-variant/20"}`}
            >
              {plan.featured && <div className="absolute top-0 right-0 signature-gradient text-white text-xs font-bold px-5 py-2 rounded-bl-2xl">Phổ biến</div>}
              <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
              <div className={`text-4xl font-manrope font-extrabold mb-4 ${plan.featured ? "text-white" : "text-primary"}`}>{plan.price}</div>
              <p className={`leading-relaxed mb-8 ${plan.featured ? "text-white/70" : "text-on-surface-variant"}`}>{plan.description}</p>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-3 text-sm ${plan.featured ? "text-white/80" : "text-on-surface-variant"}`}>
                    <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="#consult" className={plan.featured ? "btn-primary w-full justify-center" : "btn-ghost w-full justify-center"}>
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          id="consult"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.3 }}
          className="mt-8 scroll-mt-28 rounded-[2rem] bg-on-surface px-6 py-6 text-white shadow-2xl shadow-primary/10 md:px-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Tư vấn nhanh</span>
              <h3 className="mt-2 text-2xl font-manrope font-extrabold tracking-tight text-white">Chưa chắc nên chọn gói nào?</h3>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary justify-center px-7 py-3">
                Nhận tư vấn
              </Link>
              <a
                href={`https://zalo.me/${company.phone}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-primary transition-all hover:bg-primary-container hover:text-white active:scale-95"
              >
                Nhắn Zalo
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-b from-white via-primary/4 to-white py-14 md:py-18">
        <div className="absolute left-1/2 top-24 h-48 w-[48rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[110px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={revealContainer}
            className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
          >
            <motion.h2 variants={revealItem} className="text-3xl md:text-4xl font-extrabold tracking-tight">{home.process.title}</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={revealContainer}
            className="relative grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5"
          >
            <div className="absolute left-[12%] right-[12%] top-9 hidden h-px bg-linear-to-r from-primary/10 via-primary/45 to-tertiary/20 md:block" />
            {home.process.steps.map((step, idx) => (
              <motion.div key={step.title} variants={revealItem} className="relative">
                <div className="absolute left-7 top-16 bottom-0 w-px bg-linear-to-b from-primary/35 to-transparent md:hidden" />
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative h-full rounded-[1.75rem] bg-white/90 p-5 shadow-[0_18px_55px_rgba(0,82,204,0.08)] transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-primary/10 md:p-6"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                      {idx === 0 && <Lightbulb className="h-7 w-7" />}
                      {idx === 1 && <DraftingCompass className="h-7 w-7" />}
                      {idx === 2 && <Code2 className="h-7 w-7" />}
                      {idx === 3 && <Rocket className="h-7 w-7" />}
                    </div>
                    <span className="rounded-full bg-primary/7 px-3 py-1 text-xs font-black tracking-widest text-primary">0{idx + 1}</span>
                  </div>
                  <h4 className="mb-3 text-xl font-manrope font-extrabold text-on-surface transition-colors group-hover:text-primary">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
