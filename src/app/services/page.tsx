"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Cloud, Cpu, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import content from "@/data/content.json";

export default function ServicesPage() {
  const { services } = content;

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-tertiary-container/10 text-tertiary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 uppercase">Technical Excellence</span>
            <h1 className="text-5xl md:text-7xl font-manrope font-extrabold text-on-surface tracking-tighter leading-[1.1] mb-8">
              Our <span className="text-primary italic">Expertise</span>.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light max-w-2xl">
              {services.description}
            </p>
          </motion.div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-surface-container-low rounded-bl-[10rem] opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </header>

      {/* Bento Grid Services Layout */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Custom Web Development - Large Feature */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-white rounded-3xl p-10 md:p-16 shadow-sm group hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-12 border border-outline-variant/20"
          >
            <div className="flex-1">
              <div className="w-16 h-16 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary mb-8">
                <Code2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-manrope font-bold text-on-surface mb-6">Custom Web Development</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 text-lg">
                We build robust, scalable web architectures that power high-growth businesses. From headless CMS solutions to complex enterprise portals.
              </p>
              <ul className="space-y-4">
                {["React & Next.js Performance Optimization", "High-Availability Backend Infrastructures", "SEO-First Technical Architecture"].map(item => (
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
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Web Dev"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile App Design - Vertical Bento */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-4 signature-gradient rounded-3xl p-10 shadow-lg text-white flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-8">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-manrope font-bold mb-4">Mobile App Design</h3>
              <p className="opacity-90 leading-relaxed mb-8">
                Native and cross-platform experiences that feel fluid, intentional, and human-centric.
              </p>
              <ul className="space-y-4 text-sm">
                {["iOS & Android Native Development", "Flutter & React Native Solutions", "Gesture-Driven UX Design"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 opacity-70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <button className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
                View Apps <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Cloud Solutions - Horizontal Bento */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-6 bg-surface-container-low rounded-3xl p-10 flex flex-col gap-8 border border-outline-variant/10"
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <Cloud className="w-8 h-8" />
              </div>
              <span className="text-outline text-xs font-bold uppercase tracking-widest">Enterprise</span>
            </div>
            <div>
              <h3 className="text-2xl font-manrope font-bold text-on-surface mb-4">Cloud Solutions</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Modernize your legacy systems with serverless architectures and distributed cloud networks optimized for global scale.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-primary font-bold mb-1">AWS/Azure</div>
                  <div className="text-xs text-on-surface-variant">Infrastructure management</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-primary font-bold mb-1">DevOps</div>
                  <div className="text-xs text-on-surface-variant">CI/CD automation pipelines</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI / Machine Learning - Horizontal Bento */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-6 bg-surface-container-high rounded-3xl p-10 flex flex-col justify-between border border-outline-variant/10"
          >
            <div className="flex items-start gap-10">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-6">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-manrope font-bold text-on-surface mb-4">AI & Machine Learning</h3>
                <ul className="space-y-3">
                  {["Predictive Data Modeling", "LLM Integration & Fine-tuning", "Computer Vision Systems"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden sm:block w-40 h-40 bg-white rounded-full overflow-hidden shadow-inner p-2 border-4 border-surface-container relative">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="AI"
                  fill
                  sizes="160px"
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <div className="mt-8">
              <button className="text-tertiary font-bold flex items-center gap-2 group">
                Explore Intelligent Systems
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="bg-on-surface rounded-[3rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Grid"
              fill
              sizes="100vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-manrope font-extrabold text-white tracking-tight mb-8">Ready to blueprint your next innovation?</h2>
            <p className="text-slate-300 text-lg md:text-xl mb-12 font-light">
              Our technical architects are standing by to transform your vision into a luminescent reality. Let's discuss your project requirements today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary px-10 py-5 text-lg">
                Request a Custom Quote
              </button>
              <button className="btn-ghost px-10 py-5 text-lg bg-transparent! text-white! border-white/20">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

