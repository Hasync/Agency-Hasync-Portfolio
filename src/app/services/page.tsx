"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, Code2, Cpu, GraduationCap, MessageSquare, Settings, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";

const serviceHighlights = [
  ["Giao diện responsive", "Tối ưu tốc độ tải", "SEO cơ bản và dễ cập nhật"],
  ["Chatbot tư vấn", "Công cụ xử lý dữ liệu", "Prompt và workflow theo nghiệp vụ"],
  ["Form, Sheet, Email", "Thông báo tự động", "Báo cáo vận hành"],
];

export default function ServicesPage() {
  const { services, company } = content;

  return (
    <main className="overflow-x-hidden">
      <header className="relative overflow-hidden py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-tertiary-container/10 text-tertiary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 uppercase">Website & AI Solution</span>
            <h1 className="text-5xl md:text-7xl font-manrope font-extrabold text-on-surface tracking-tighter leading-[1.1] mb-8">
              Dịch vụ <span className="text-primary italic">thiết kế & tự động hóa</span>.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light max-w-2xl">
              {services.description}
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-surface-container-low rounded-bl-[10rem] opacity-70"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </header>

      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-white rounded-3xl p-10 md:p-16 shadow-sm group hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-12 border border-outline-variant/20"
          >
            <div className="flex-1">
              <div className="w-16 h-16 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary mb-8">
                <Code2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-manrope font-bold text-on-surface mb-6">{services.list[0].title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 text-lg">
                {services.list[0].description}
              </p>
              <ul className="space-y-4">
                {serviceHighlights[0].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-on-surface-variant">
                    <CheckCircle2 className="w-5 h-5 text-tertiary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative min-h-[300px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/bannerHero.png"
                  alt="Đội ngũ Elysium thiết kế website và AI"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-4 signature-gradient rounded-3xl p-10 shadow-lg text-white flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-8">
                <Bot className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-manrope font-bold mb-4">{services.list[2].title}</h3>
              <p className="opacity-90 leading-relaxed mb-8">
                {services.list[2].description}
              </p>
              <ul className="space-y-4 text-sm">
                {serviceHighlights[1].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 opacity-70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <a href={`tel:${company.phone}`} className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
                Tư vấn ngay: {company.phone}
              </a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-6 bg-surface-container-low rounded-3xl p-10 flex flex-col gap-8 border border-outline-variant/10"
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <Settings className="w-8 h-8" />
              </div>
              <span className="text-outline text-xs font-bold uppercase tracking-widest">Automation</span>
            </div>
            <div>
              <h3 className="text-2xl font-manrope font-bold text-on-surface mb-4">{services.list[3].title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                {services.list[3].description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {serviceHighlights[2].slice(0, 2).map((item) => (
                  <div key={item} className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-primary font-bold mb-1">{item}</div>
                    <div className="text-xs text-on-surface-variant">Giảm thao tác thủ công</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-6 bg-surface-container-high rounded-3xl p-10 flex flex-col justify-between border border-outline-variant/10"
          >
            <div className="flex items-start gap-10">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-6">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-manrope font-bold text-on-surface mb-4">{services.list[1].title}</h3>
                <ul className="space-y-3">
                  {[services.list[1].description, services.list[4].description, services.list[5].description].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden sm:flex w-40 h-40 bg-white rounded-full overflow-hidden shadow-inner p-2 border-4 border-surface-container items-center justify-center text-primary">
                <GraduationCap className="w-20 h-20" />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 text-tertiary font-bold">
                <MessageSquare className="w-5 h-5" /> Chatbot
              </span>
              <span className="inline-flex items-center gap-2 text-primary font-bold">
                <Users className="w-5 h-5" /> Shop & doanh nghiệp
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="bg-on-surface rounded-[3rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/bannerHero.png"
              alt="Elysium team"
              fill
              sizes="100vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-manrope font-extrabold text-white tracking-tight mb-8">Bạn cần website, AI tool hay chatbot?</h2>
            <p className="text-slate-300 text-lg md:text-xl mb-12 font-light">
              Gửi yêu cầu cho Elysium, chúng tôi sẽ tư vấn hướng triển khai gọn nhất theo mục tiêu và ngân sách của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary px-10 py-5 text-lg">
                Nhận tư vấn
              </Link>
              <a href={`tel:${company.phone}`} className="btn-ghost px-10 py-5 text-lg bg-transparent! text-white! border-white/20">
                Gọi {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
