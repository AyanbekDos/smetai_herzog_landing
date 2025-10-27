import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SmetaiLogo } from "@/components/icons/SmetaiLogo";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#lead-form", label: "Заявка" },
  { href: "#features", label: "Возможности" },
  { href: "#pipeline", label: "Как работает" },
  { href: "#video", label: "Видео" },
  { href: "#samples", label: "Примеры" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (href: string, label: string) => {
    trackEvent("nav_click", { label, href });
    setIsMenuOpen(false);
  };

  const handleCtaClick = () => {
    trackEvent("header_cta_click", { location: "header" });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <a href="#hero" className="flex items-center gap-2 text-slate-900 transition hover:text-indigo-600">
          <SmetaiLogo className="h-9 w-auto" aria-label="Smetai" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavigate(item.href, item.label)}
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6"
            onClick={handleCtaClick}
          >
            <a href="#lead-form">Попробовать бесплатно</a>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600 md:hidden"
          aria-label="Открыть меню"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden",
          "border-b border-slate-200 bg-white transition-all duration-200 ease-in-out",
          isMenuOpen ? "max-h-screen opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavigate(item.href, item.label)}
              className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
            >
              {item.label}
            </a>
          ))}
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"
            onClick={handleCtaClick}
          >
            <a href="#lead-form">Попробовать бесплатно</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
