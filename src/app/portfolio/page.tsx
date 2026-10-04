"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";

export default function PortfolioPage() {
  const { portfolio } = content;

  return (
    <main className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 pt-40 pb-20">
        {/* Hero Section: Editorial Headline */}
        <header className="mb-24 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[2px] bg-tertiary"></span>
              <span className="font-manrope text-tertiary uppercase tracking-widest text-sm font-extrabold">Selected Works</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-manrope text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-[1.1] mb-8"
            >
              Crafting digital <br />
              <span className="text-primary italic font-medium">monuments</span> in code.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-on-surface-variant leading-relaxed max-w-xl"
            >
              We bridge the gap between technical complexity and human intuition. Explore our portfolio of high-impact solutions across specialized industries.
            </motion.p>
          </div>
          {/* Filters: Chip Navigation */}
          <div className="flex flex-wrap gap-3 justify-end">
            {["All Projects", "E-commerce", "Fintech", "HealthTech", "AI & Data"].map((filter, idx) => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${idx === 0 ? 'bg-tertiary-container/10 text-tertiary' : 'text-on-surface-variant hover:bg-surface-container'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        {/* Project Grid: Bento/Asymmetrical Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Project Card 1: Large Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container-low aspect-video md:aspect-auto md:h-[600px] shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <Image
              src={portfolio.projects[0].image}
              alt={portfolio.projects[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <span className="font-bold text-sm text-white/70 tracking-widest uppercase mb-4 block">{portfolio.projects[0].category}</span>
              <h3 className="font-manrope text-4xl font-extrabold text-white mb-4 tracking-tight">{portfolio.projects[0].title}</h3>
              <p className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 text-white/80 max-w-md leading-relaxed">
                {portfolio.projects[0].description}
              </p>
            </div>
          </motion.div>

          {/* Project Card 2: Vertical Small */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container-low aspect-4/5 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <Image
              src={portfolio.projects[1].image}
              alt={portfolio.projects[1].title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="font-bold text-sm text-white/70 tracking-widest uppercase mb-2 block">{portfolio.projects[1].category}</span>
              <h3 className="font-manrope text-2xl font-extrabold text-white mb-3">{portfolio.projects[1].title}</h3>
              <p className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 text-white/80 text-sm leading-relaxed">
                {portfolio.projects[1].description}
              </p>
            </div>
          </motion.div>

          {/* Project Card 3: Standard Size */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container-low aspect-square shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <Image
              src={portfolio.projects[2].image}
              alt={portfolio.projects[2].title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="font-bold text-sm text-white/70 tracking-widest uppercase mb-2 block">{portfolio.projects[2].category}</span>
              <h3 className="font-manrope text-2xl font-extrabold text-white mb-3">{portfolio.projects[2].title}</h3>
              <p className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 text-white/80 text-sm leading-relaxed">
                {portfolio.projects[2].description}
              </p>
            </div>
          </motion.div>

          {/* Project Card 4: Horizontal Medium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container-low aspect-video shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <Image
              src={portfolio.projects[3].image}
              alt={portfolio.projects[3].title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <span className="font-bold text-sm text-white/70 tracking-widest uppercase mb-4 block">{portfolio.projects[3].category}</span>
              <h3 className="font-manrope text-3xl font-extrabold text-white mb-4 tracking-tight">{portfolio.projects[3].title}</h3>
              <p className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 text-white/80 max-w-md leading-relaxed">
                {portfolio.projects[3].description}
              </p>
            </div>
          </motion.div>

          {/* Asymmetrical Gap Filler / Call to Action Bento Item */}
          <div className="md:col-span-12 flex flex-col md:flex-row items-center gap-8 bg-surface-container-high rounded-3xl p-12 overflow-hidden relative border border-outline-variant/10 shadow-sm">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-tertiary-container/20 rounded-full blur-3xl"></div>
            <div className="flex-1 z-10">
              <h2 className="font-manrope text-3xl font-extrabold tracking-tight mb-4">Dự án của bạn có thể là <span className="text-tertiary">mẫu triển khai tiếp theo</span>.</h2>
              <p className="text-on-surface-variant max-w-xl">Elysium nhận tư vấn website, chatbot, AI tool và automation theo nhu cầu thực tế của bạn.</p>
            </div>
            <div className="z-10">
              <Link href="/contact" className="btn-primary px-10 py-5 text-lg">Nhận tư vấn</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

