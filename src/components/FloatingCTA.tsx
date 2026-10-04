import { Mail, MessageCircle, Phone } from "lucide-react";
import content from "@/data/content.json";

const quickActions = [
  {
    label: "Gọi điện",
    href: `tel:${content.company.phone}`,
    icon: Phone,
  },
  {
    label: "Zalo",
    href: `https://zalo.me/${content.company.phone}`,
    text: "Z",
    brand: "zalo",
  },
  {
    label: "Messenger",
    href: "https://www.facebook.com/profile.php?id=61594988256008",
    icon: MessageCircle,
    brand: "messenger",
  },
  {
    label: "Fanpage",
    href: "https://www.facebook.com/profile.php?id=61594988256008",
    text: "f",
    brand: "facebook",
  },
  {
    label: "Gmail",
    href: `mailto:${content.company.email}`,
    icon: Mail,
    brand: "gmail",
  },
];

export function FloatingCTA() {
  return (
    <aside className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex" aria-label="Liên hệ nhanh">
      {quickActions.map((action) => {
        const Icon = action.icon;

        return (
          <a
            key={action.label}
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            className={`group relative flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant/30 bg-white/90 shadow-xl shadow-primary/10 backdrop-blur-xl transition-all hover:scale-105 hover:text-white ${
              action.brand === "zalo"
                ? "bg-[#0068ff]! text-white hover:bg-[#0054d6]!"
                : action.brand === "facebook"
                  ? "text-[#1877f2] hover:bg-[#1877f2]"
                  : action.brand === "messenger"
                  ? "text-[#0084ff] hover:bg-[#0084ff]"
                  : action.brand === "gmail"
                    ? "text-[#ea4335] hover:bg-[#ea4335]"
                    : "text-primary hover:bg-primary"
            }`}
            aria-label={action.label}
          >
            <span className="pointer-events-none absolute right-14 rounded-full bg-on-surface px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition-all group-hover:translate-x-[-4px] group-hover:opacity-100 whitespace-nowrap">
              {action.label}
            </span>
            {Icon ? <Icon className="h-5 w-5" /> : <span className="font-sans text-2xl font-black leading-none">{action.text}</span>}
          </a>
        );
      })}
    </aside>
  );
}
