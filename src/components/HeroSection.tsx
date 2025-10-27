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
      className="relative isolate overflow-hidden bg-slate-50"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-20%] h-[400px] bg-gradient-to-b from-indigo-100 via-transparent to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-10 hidden h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-indigo-400 via-violet-400 to-fuchsia-400 opacity-30 blur-[160px] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-10 h-[260px] w-[260px] rounded-full bg-gradient-to-br from-indigo-200 via-sky-100 to-transparent opacity-70 blur-[120px]"
      />
      <div className="relative z-10">
        <div className="container mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col justify-center px-4 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-700 shadow-sm shadow-indigo-100 backdrop-blur">
                AI-конвейер для строителей
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Экономьте{" "}
                  <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 bg-clip-text">
                    время
                  </span>{" "}
                  и деньги на графиках работ
                </h1>
                <p className="max-w-2xl text-lg text-slate-600">
                  Smetai превращает любую смету в понятный календарный план и отчёты за считанные минуты — без
                  ночных переработок и ручного форматирования.
                </p>
              </div>

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
                  className="rounded-full border-indigo-200 bg-white/80 px-8 py-6 text-base font-semibold text-indigo-700 shadow-sm shadow-indigo-100 transition hover:bg-indigo-50"
                  onClick={handleSecondaryClick}
                >
                  <a href="#pipeline">Узнать как</a>
                </Button>
              </div>

              <ul className="grid gap-4 text-base text-slate-700 sm:grid-cols-2">
                {HERO_BULLETS.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 rounded-2xl border border-indigo-100/70 bg-white/70 p-4 shadow-sm shadow-indigo-100 backdrop-blur">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-indigo-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="lead-form"
              className="rounded-3xl border border-indigo-100 bg-white/90 p-8 shadow-2xl shadow-indigo-200/40 backdrop-blur"
            >
              <div className="space-y-1 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
                  пилот за 2 минуты
                </p>
                <h2 className="text-3xl font-semibold text-slate-900">Оставьте заявку</h2>
                <p className="text-sm text-slate-600">
                  Покажем, как Smetai превращает вашу смету в календарный план и отчёты быстрее любых ручных сценариев.
                </p>
              </div>

              <div className="mt-6">
                <LeadForm formName="hero" />
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-indigo-100/70 bg-white/80 p-6 text-center shadow-md shadow-indigo-100/70 backdrop-blur"
              >
                <p className="text-3xl font-semibold text-indigo-600">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
