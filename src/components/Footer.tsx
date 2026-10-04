import Link from "next/link";
import { Share2, Rss, Send } from "lucide-react";
import data from "@/data/content.json";

export function Footer() {
  return (
    <footer className="w-full rounded-t-4xl mt-20 bg-surface-container-low border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto font-inter text-sm leading-relaxed">
        <div className="space-y-6">
          <div className="text-xl font-black text-on-surface">{data.company.name}</div>
          <p className="text-on-surface-variant">{data.company.shortDescription}</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:signature-gradient hover:text-white transition-all" href="#">
              <Share2 className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:signature-gradient hover:text-white transition-all" href="#">
              <Rss className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-bold text-on-surface uppercase tracking-widest text-xs">Dịch vụ</p>
          <ul className="space-y-2">
            {data.services.list.map(service => (
              <li key={service.title}>
                <Link className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block" href="/services">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-bold text-on-surface uppercase tracking-widest text-xs">Liên kết</p>
          <ul className="space-y-2">
            <li><Link className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block" href="/portfolio">Dự án mẫu</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block" href="/services#pricing">Gói dịch vụ</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block" href="/insights">Góc chia sẻ</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block" href="/contact">Liên hệ</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <p className="font-bold text-on-surface uppercase tracking-widest text-xs">Tư vấn nhanh</p>
          <div className="flex gap-2">
            <a href={`tel:${data.company.phone}`} className="bg-white rounded-full px-4 py-2 w-full text-primary font-bold shadow-sm hover:opacity-80 transition-all">
              {data.company.phone}
            </a>
            <Link href="/contact" className="signature-gradient text-white p-2.5 rounded-full hover:opacity-90 transition-all active:scale-95">
              <Send className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-xs text-on-surface-variant/60">{data.company.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

