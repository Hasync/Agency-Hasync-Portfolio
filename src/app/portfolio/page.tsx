"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";

const filters = ["Tất cả", "Website", "AI Tool", "Chatbot", "Automation"];

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
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

export default function PortfolioPage() {
  const { portfolio, company } = content;

  return (
    <main className="overflow-x-hidden bg-white">
      <section className="px-6 pt-32 pb-10 md:px-8 md:pt-36 md:pb-12">
        <motion.div initial="hidden" animate="visible" variants={revealContainer} className="mx-auto max-w-7xl border-b border-outline-variant/25 pb-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <motion.span variants={revealItem} className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                Sản phẩm & demo
              </motion.span>
              <motion.h1 variants={revealItem} className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
                Gallery sản phẩm website, AI và automation.
              </motion.h1>
            </div>
            <motion.div variants={revealItem} className="max-w-2xl lg:justify-self-end">
              <p className="text-base leading-relaxed text-on-surface-variant md:text-lg">
                Tập trung vào hình ảnh, demo và hướng triển khai thực tế. Chọn một mẫu để xem chi tiết và yêu cầu demo phù hợp.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#projects" className="btn-primary px-7 py-3">
                  Xem sản phẩm
                </Link>
                <a href={`https://zalo.me/${company.phone}`} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-none bg-on-surface px-7 text-sm font-bold text-white transition-all hover:bg-primary active:scale-95">
                  Nhắn Zalo
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div variants={revealItem} className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
            {filters.map((filter, idx) => (
              <button key={filter} type="button" className={`text-sm font-bold transition-colors ${idx === 0 ? "text-primary" : "text-on-surface-variant hover:text-primary"}`}>
                {filter}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="projects" className="scroll-mt-28 px-6 pb-16 md:px-8 md:pb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={revealContainer} className="mx-auto grid max-w-7xl gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {portfolio.projects.map((project) => (
            <motion.article key={project.id} variants={revealItem}>
              <Link href={`/portfolio/${project.id}`} className="group block">
                <div className="relative aspect-[1.08] overflow-hidden bg-surface-container-low">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 50vw, 240px" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4 border-t border-outline-variant/20 pt-4">
                  <div>
                    <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-primary/70">{project.category}</span>
                    <h2 className="mt-2 text-lg font-manrope font-extrabold leading-snug text-on-surface transition-colors group-hover:text-primary md:text-xl">{project.title}</h2>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="px-6 pb-20 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 border-t border-outline-variant/25 pt-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-primary">Bắt đầu dự án</span>
            <h2 className="mt-3 text-3xl font-manrope font-extrabold tracking-tight text-on-surface">Muốn xem demo gần với nhu cầu của bạn?</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary justify-center px-7 py-3">
              Nhận tư vấn
            </Link>
            <a href={`https://zalo.me/${company.phone}`} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-none bg-on-surface px-7 text-sm font-bold text-white transition-all hover:bg-primary active:scale-95">
              Nhắn Zalo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
