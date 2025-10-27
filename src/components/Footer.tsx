import { SmetaiLogo } from "@/components/icons/SmetaiLogo";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div>
        <a href="#hero" className="flex items-center gap-2 text-slate-900 transition hover:text-indigo-600">
          <SmetaiLogo className="h-9 w-auto" aria-label="Smetai" />
        </a>
          <p className="mt-2 text-sm text-slate-500">
            AI-конвейер для автоматизации календарных планов строительства.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-slate-500 md:text-right">
          <a href="mailto:hello@smetai.online" className="transition hover:text-indigo-600">
            hello@smetai.online
          </a>
          <a
            href="https://t.me/aianback"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-indigo-600"
          >
            Telegram: @aianback
          </a>
          <a
            href="https://github.com/AyanbekDos/smet-ai-blueprint"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-indigo-600"
          >
            GitHub проекта
          </a>
        </div>
      </div>
      <div className="container mx-auto w-full max-w-6xl px-4 pt-6 text-sm text-slate-400">
        © Smetai, {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
