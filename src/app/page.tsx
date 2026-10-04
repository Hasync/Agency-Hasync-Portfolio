"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Lightbulb, DraftingCompass, Code2, Rocket, Quote, ArrowUpRight, Cpu, MessageSquare, Settings, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import content from "@/data/content.json";

const kpis = [
  { value: "300+", label: "lượt tư vấn website & AI" },
  { value: "120+", label: "mẫu giao diện và demo giải pháp" },
  { value: "50+", label: "ý tưởng chatbot, tool và automation" },
  { value: "24h", label: "phản hồi tư vấn ban đầu" },
];

export default function Home() {
  const { home, portfolio, services, company, about } = content;

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-tertiary font-semibold text-sm">
              {home.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-on-surface">
              {home.hero.titlePart1} <span className="text-primary">{home.hero.titleHighlight}</span> {home.hero.titlePart2}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              {home.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/portfolio" className="btn-primary px-10 py-4 text-lg">
                Xem dự án
              </Link>
              <a href="tel:0338994373" className="btn-ghost px-10 py-4 text-lg">
                Gọi 0338994373
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-tertiary/10 rounded-full blur-[100px]"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-12 border-white/50 aspect-square">
              <Image
                src="/bannerHero.png"
                alt="Elysium - Thiết kế Website & AI theo yêu cầu"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPI Strip */}
      <section className="bg-surface-container-low py-14">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="bg-white rounded-3xl p-6 text-center border border-outline-variant/20 shadow-sm">
                <div className="text-3xl md:text-4xl font-manrope font-extrabold text-primary tracking-tight mb-2">{kpi.value}</div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{kpi.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{services.title}</h2>
            <p className="text-lg text-on-surface-variant">{services.description}</p>
          </div>
          <Link href="/services" className="group flex items-center gap-2 text-primary font-bold text-lg">
            Xem chi tiết dịch vụ
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.list.map((service, idx) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-white p-8 border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary mb-6">
                {idx === 0 && <Code2 className="w-7 h-7" />}
                {idx === 1 && <Cpu className="w-7 h-7" />}
                {idx === 2 && <Bot className="w-7 h-7" />}
                {idx === 3 && <Settings className="w-7 h-7" />}
                {idx === 4 && <MessageSquare className="w-7 h-7" />}
                {idx === 5 && <Users className="w-7 h-7" />}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Summary */}
      <section className="px-8 pb-32 max-w-7xl mx-auto">
        <div className="bg-on-surface rounded-[3rem] p-10 md:p-16 relative overflow-hidden grid md:grid-cols-2 gap-12 items-center">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <span className="inline-block text-tertiary font-bold text-xs uppercase tracking-widest mb-4">Đội ngũ Elysium</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">{about.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{about.description}</p>
            <a href={`tel:${company.phone}`} className="btn-primary inline-flex px-10 py-4 text-lg">
              Gọi đội ngũ: {company.phone}
            </a>
          </div>
          <div className="relative z-10 rounded-3xl overflow-hidden aspect-video md:aspect-square shadow-2xl border border-white/10">
            <Image
              src="/bannerHero.png"
              alt="Đội ngũ Elysium"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Bento Grid Projects */}
      <section className="pb-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{home.portfolioTitle}</h2>
            <p className="text-lg text-on-surface-variant">{home.portfolioSubtitle}</p>
          </div>
          <Link href="/portfolio" className="group flex items-center gap-2 text-primary font-bold text-lg">
Xem tất cả dự án
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Large Project */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-8 rounded-3xl bg-surface-container overflow-hidden group cursor-pointer border border-outline-variant/10 shadow-sm"
          >
            <div className="h-[400px] relative overflow-hidden">
              <Image
                src={portfolio.projects[0].image}
                alt={portfolio.projects[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <span className="bg-tertiary px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">{portfolio.projects[0].category}</span>
                <h3 className="text-3xl font-bold">{portfolio.projects[0].title}</h3>
              </div>
            </div>
          </motion.div>

          {/* Secondary Colored Project */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-4 rounded-3xl bg-primary-container overflow-hidden group cursor-pointer border border-outline-variant/10 flex flex-col justify-between p-8 text-on-primary-container shadow-sm"
          >
            <div>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">{portfolio.projects[1].category}</span>
              <h3 className="text-2xl font-bold">{portfolio.projects[1].title}</h3>
            </div>
            <div className="flex justify-end">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-all">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Third Project - Small */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-4 rounded-3xl bg-surface-container-high overflow-hidden group cursor-pointer border border-outline-variant/10 shadow-sm"
          >
            <div className="h-[300px] relative overflow-hidden">
              <Image
                src={portfolio.projects[2].image}
                alt={portfolio.projects[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{portfolio.projects[2].title}</h3>
              <p className="text-sm text-on-surface-variant">{portfolio.projects[2].description}</p>
            </div>
          </motion.div>

          {/* Fourth Project - Hybrid */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-8 rounded-3xl bg-surface-container-low overflow-hidden group cursor-pointer border border-outline-variant/10 flex flex-col md:flex-row shadow-sm"
          >
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <span className="text-tertiary font-bold text-xs uppercase tracking-widest mb-2">{portfolio.projects[3].category}</span>
              <h3 className="text-2xl font-bold mb-4">{portfolio.projects[3].title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{portfolio.projects[3].description}</p>
            </div>
            <div className="md:w-1/2 h-[300px] md:h-auto relative overflow-hidden">
              <Image
                src={portfolio.projects[3].image}
                alt={portfolio.projects[3].title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{home.process.title}</h2>
            <p className="text-lg text-on-surface-variant">{home.process.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {home.process.steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {idx === 0 && <Lightbulb className="w-8 h-8" />}
                  {idx === 1 && <DraftingCompass className="w-8 h-8" />}
                  {idx === 2 && <Code2 className="w-8 h-8" />}
                  {idx === 3 && <Rocket className="w-8 h-8" />}
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-on-surface-variant leading-relaxed text-sm">{step.description}</p>
                <span className="absolute -top-6 -left-4 text-6xl font-black text-surface-container opacity-50 z-[-1]">
                  0{idx + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-on-surface rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 text-surface-variant opacity-10">
              <Quote size={200} />
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8">Khách hàng nói gì về Elysium.</h2>
                <Link href="/contact" className="bg-tertiary text-white px-8 py-3 rounded-full font-bold hover:bg-tertiary-container transition-colors inline-flex">
                  Tư vấn dự án
                </Link>
              </div>
              <div className="space-y-8">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl">
                  <p className="text-lg text-white/80 leading-relaxed mb-6 italic">
                    "{home.testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800 relative">
                      <Image
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt={home.testimonial.author}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white">{home.testimonial.author}</p>
                      <p className="text-sm text-white/50">{home.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-10 leading-tight">
Sẵn sàng xây website hoặc <span className="text-primary italic">AI tool</span> cho bạn?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact" className="btn-primary px-12 py-5 text-xl">
Nhận tư vấn
            </Link>
            <Link href="/portfolio" className="btn-ghost px-12 py-5 text-xl">
Xem dự án mẫu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

