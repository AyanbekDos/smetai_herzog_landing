import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const PRICING = [
  {
    title: "Пилот",
    price: "0 ₽",
    perks: ["1 проект", "Формирование Excel и PDF", "Онбординг от команды"],
    cta: "Попробовать бесплатно",
    event: "pricing_pilot_cta_click",
  },
  {
    title: "Профессиональный",
    price: "По запросу",
    perks: [
      "Неограниченное число проектов",
      "Доступ к API и интеграциям",
      "Приоритетная поддержка",
    ],
    cta: "Связаться",
    event: "pricing_pro_cta_click",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="container mx-auto w-full max-w-6xl px-4">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Тарифы
          </span>
          <h2 className="text-4xl font-bold text-slate-900">
            Начните с бесплатного пилота и масштабируйте под команду
          </h2>
          <p className="text-base text-slate-600">
            В пилоте мы вместе прорабатываем проект и настраиваем агенты под специфику вашей сметы.
            После запуска вы можете подключать команду и масштабировать Smetai.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {PRICING.map((plan) => (
            <article
              key={plan.title}
              className="flex h-full flex-col rounded-3xl border border-indigo-100 bg-indigo-50/40 p-8 shadow-lg shadow-indigo-100/40"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900">{plan.title}</h3>
                <p className="text-3xl font-bold text-indigo-600">{plan.price}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                asChild
                className="mt-8 w-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 py-6 text-base font-semibold shadow-lg shadow-indigo-500/30 transition hover:from-indigo-500 hover:to-violet-500"
                onClick={() => trackEvent(plan.event, { plan: plan.title })}
              >
                <a href="#lead-form">{plan.cta}</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
