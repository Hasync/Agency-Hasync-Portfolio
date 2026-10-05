"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import content from "@/data/content.json";

const contactFields = [
  {
    label: "Email",
    value: content.company.email,
    href: `mailto:${content.company.email}`,
    icon: Mail,
  },
  {
    label: "Điện thoại / Zalo",
    value: content.company.phone,
    href: `tel:${content.company.phone}`,
    icon: Phone,
  },
  {
    label: "Hỗ trợ",
    value: content.company.address,
    href: null,
    icon: MapPin,
  },
];

export default function ContactPage() {
  const { company } = content;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = encodeURIComponent(
      [
        `Tên: ${name}`,
        `Số điện thoại/Zalo: ${phone || "Chưa nhập"}`,
        `Email liên hệ: ${email || "Chưa nhập"}`,
        `Nhu cầu: ${need}`,
        `Ngân sách dự kiến: ${budget || "Chưa xác định"}`,
        "",
        "Mô tả yêu cầu:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Yêu cầu tư vấn từ website Elysium")}&body=${body}`;
  };

  return (
    <main className="overflow-x-hidden bg-white">
      <section className="px-6 pt-28 pb-12 md:px-8 md:pt-32 md:pb-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
            <header>
              <span className="text-xs font-black uppercase tracking-[0.22em] text-primary">Liên hệ Elysium</span>
              <h1 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
                Kể nhanh nhu cầu, Elysium phản hồi phương án.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-on-surface-variant">
                Form sẽ mở email soạn sẵn gửi về {company.email}. Bạn cũng có thể nhắn Zalo nếu cần trao đổi nhanh.
              </p>
            </header>

            <div className="mt-7 grid gap-3">
              {contactFields.map((field) => {
                const Icon = field.icon;
                const contentNode = (
                  <div className="flex items-center gap-3 border-t border-outline-variant/20 py-4 transition-colors hover:text-primary">
                    <Icon className="h-5 w-5 shrink-0 text-primary" />
                    <div className="min-w-0">
                      <div className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-on-surface-variant">{field.label}</div>
                      <div className="mt-1 truncate text-base font-manrope font-extrabold text-on-surface">{field.value}</div>
                    </div>
                  </div>
                );

                return field.href ? (
                  <a key={field.label} href={field.href} className="block">
                    {contentNode}
                  </a>
                ) : (
                  <div key={field.label}>{contentNode}</div>
                );
              })}
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, delay: 0.06 }} className="border-t-2 border-primary pt-5" onSubmit={handleSubmit}>
            <div className="grid gap-x-7 gap-y-5 sm:grid-cols-2">
              <label className="space-y-1.5">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-on-surface-variant">Tên *</span>
                <input value={name} onChange={(event) => setName(event.target.value)} required type="text" className="w-full border-b border-outline-variant/40 bg-transparent py-2.5 text-base font-semibold text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-primary" placeholder="Nguyễn Văn A" />
              </label>

              <label className="space-y-1.5">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-on-surface-variant">Số điện thoại / Zalo *</span>
                <input value={phone} onChange={(event) => setPhone(event.target.value)} required type="tel" className="w-full border-b border-outline-variant/40 bg-transparent py-2.5 text-base font-semibold text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-primary" placeholder="0338 994 373" />
              </label>

              <label className="space-y-1.5">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-on-surface-variant">Email</span>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="w-full border-b border-outline-variant/40 bg-transparent py-2.5 text-base font-semibold text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-primary" placeholder="ban@example.com" />
              </label>

              <label className="space-y-1.5">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-on-surface-variant">Nhu cầu *</span>
                <input value={need} onChange={(event) => setNeed(event.target.value)} required type="text" className="w-full border-b border-outline-variant/40 bg-transparent py-2.5 text-base font-semibold text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-primary" placeholder="Website, chatbot, AI tool..." />
              </label>
            </div>

            <label className="mt-5 block space-y-1.5">
              <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-on-surface-variant">Ngân sách dự kiến</span>
              <input value={budget} onChange={(event) => setBudget(event.target.value)} type="text" className="w-full border-b border-outline-variant/40 bg-transparent py-2.5 text-base font-semibold text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-primary" placeholder="Ví dụ: 3-5 triệu hoặc chưa xác định" />
            </label>

            <label className="mt-5 block space-y-1.5">
              <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-on-surface-variant">Mô tả yêu cầu *</span>
              <textarea value={message} onChange={(event) => setMessage(event.target.value)} required rows={3} className="w-full resize-none border-b border-outline-variant/40 bg-transparent py-2.5 text-base font-semibold leading-relaxed text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-primary" placeholder="Mục tiêu, số trang, tính năng cần có hoặc mẫu bạn thích..." />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="inline-flex h-12 flex-1 items-center justify-center gap-3 rounded-none bg-primary px-7 text-sm font-bold text-white transition-all hover:bg-primary-container active:scale-[0.98]">
                Gửi yêu cầu qua Email
                <Send className="h-4 w-4" />
              </button>
              <a href={`https://zalo.me/${company.phone}`} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-none bg-on-surface px-7 text-sm font-bold text-white transition-all hover:bg-primary active:scale-[0.98]">
                Nhắn Zalo
              </a>
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
