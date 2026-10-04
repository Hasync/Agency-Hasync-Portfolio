"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import content from "@/data/content.json";

export default function ContactPage() {
  const { company } = content;

  return (
    <main className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-16"
          >
            <header className="max-w-xl space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">Liên hệ Elysium</span>
              <h1 className="text-5xl md:text-7xl font-manrope font-extrabold leading-[1.1] tracking-tighter">
                Cùng xây giải pháp <br /><span className="text-gradient">Website & AI</span> cho bạn.
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed font-light">
                Bạn cần website, chatbot, AI tool hay automation? Gửi yêu cầu hoặc gọi trực tiếp để Elysium tư vấn hướng triển khai phù hợp.
              </p>
            </header>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-1">Email</h4>
                  <a href={`mailto:${company.email}`} className="text-2xl font-manrope font-bold hover:text-primary transition-colors">{company.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-1">Điện thoại / Zalo</h4>
                  <a href={`tel:${company.phone}`} className="text-2xl font-manrope font-bold hover:text-primary transition-colors">{company.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-1">Khu vực hỗ trợ</h4>
                  <p className="text-xl font-manrope font-bold max-w-sm">{company.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-outline-variant/20 shadow-2xl h-fit relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary/5 rounded-full blur-3xl"></div>
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Tên của bạn</label>
                  <input type="text" className="w-full border-b-2 border-outline-variant/30 px-0 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Jane" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Nhu cầu</label>
                  <input type="text" className="w-full border-b-2 border-outline-variant/30 px-0 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email liên hệ</label>
                <input type="email" className="w-full border-b-2 border-outline-variant/30 px-0 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="jane@company.com" />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Mô tả yêu cầu</label>
                <textarea rows={4} className="w-full border-b-2 border-outline-variant/30 px-0 py-3 focus:outline-none focus:border-primary transition-colors resize-none bg-transparent" placeholder="Tell us about your goals..." />
              </div>

              <button type="submit" className="w-full signature-gradient text-white rounded-2xl! py-5 text-xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all active:scale-[0.98]">
                Gửi yêu cầu <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}

