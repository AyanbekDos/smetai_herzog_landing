import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LeadForm } from "@/components/LeadForm";
import { trackEvent } from "@/lib/analytics";

const HERO_BULLETS = [
  "Опыт сотен тысяч сметчиков в одном боте — в ваших руках",
  "Excel + PDF для подрядчиков и инвесторов",
  "99,9% точность распределения работ и ресурсов",
];

const METRICS = [
  { label: "от загрузки сметы до календарного плана", value: "15 минут" },
  { label: "типовых операций классифицируется автоматически", value: "300+" },
  { label: "готовые отчеты без ручного форматирования", value: "Excel & PDF" },
];

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogChange = useCallback(
    (open: boolean) => {
      setDialogOpen(open);
      if (open) {
        trackEvent("hero_primary_cta_click", { location: "hero" });
      }
    },
    []
  );

  const handleSecondaryClick = useCallback(() => {
    trackEvent("hero_secondary_cta_click", { location: "hero" });
  }, []);

  return (
    <section
      id="hero"
      className="bg-[radial-gradient(circle_at_top,_#eef2ff,_#f8fafc_60%,#ffffff)] pb-20 pt-28"
    >
      <div className="container mx-auto grid w-full max-w-6xl gap-12 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
            AI-конвейер для строителей
          </span>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Экономь с нами
            <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 bg-clip-text">
              {" "}Время
            </span>
            {" и "}
            <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 bg-clip-text">
              Деньги
            </span>
          </h1>

          <p className="max-w-2xl text-lg text-slate-600">
            Smetai точно и быстро превращает тысячи смет в график работ по вашей инструкции — за минуты - вместо дней.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-6 text-base font-semibold shadow-lg shadow-indigo-500/30 transition hover:from-indigo-500 hover:to-violet-500"
                >
                  Попробовать бесплатно
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-xl">
                <DialogHeader className="space-y-2 text-left">
                  <DialogTitle className="text-2xl font-semibold text-slate-900">
                    Начните пилот Smetai
                  </DialogTitle>
                  <p className="text-sm text-slate-600">
                    Заполните контактные данные, и мы свяжемся, чтобы запустить конвейер на вашей смете.
                  </p>
                </DialogHeader>
                <LeadForm formName="hero-modal" />
              </DialogContent>
            </Dialog>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="rounded-full border-indigo-200 bg-indigo-50 px-8 py-6 text-base font-semibold text-indigo-700 transition hover:bg-indigo-100"
              onClick={handleSecondaryClick}
            >
              <a href="#pipeline">Узнать как</a>
            </Button>
          </div>

          <ul className="space-y-3 text-base text-slate-700">
            {HERO_BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-indigo-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          id="lead-form"
          className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-2xl shadow-indigo-200/30"
        >
          <div className="space-y-1 text-left">
            <h2 className="text-2xl font-semibold text-slate-900">Оставьте заявку на пилот</h2>
            <p className="text-sm text-slate-600">
              Покажем, как Smetai превращает вашу смету в календарный план и отчеты быстрее любых ручных сценариев.
            </p>
          </div>

          <div className="mt-6">
            <LeadForm formName="hero" />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16 grid w-full max-w-6xl gap-6 px-4 sm:grid-cols-3">
        {METRICS.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-indigo-100 bg-white/70 p-6 text-center shadow-md shadow-indigo-100"
          >
            <p className="text-3xl font-semibold text-indigo-600">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
