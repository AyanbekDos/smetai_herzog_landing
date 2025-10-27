const FEATURES = [
  {
    title: "AI-агенты в конвейере",
    description:
      "Каждый этап обрабатывается специализированным агентом: от классификации до синхронизации ресурсов.",
  },
  {
    title: "Готовые отчеты",
    description:
      "Excel и PDF автоматически формируются в фирменном стиле и готовы к отправке подрядчикам и инвесторам.",
  },
  {
    title: "Снижение рисков",
    description:
      "Стандартизированная структура данных уменьшает ошибки планирования и повышает прозрачность проекта.",
  },
  {
    title: "Интеграция с Telegram",
    description: "Весь процесс проходит в привычном интерфейсе бота — не нужно обучать команду.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="benefits" className="bg-slate-900 py-24 text-white">
      <div className="container mx-auto w-full max-w-6xl px-4">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Почему выбирают нас
          </span>
          <h2 className="text-4xl font-bold text-white">Smetai ускоряет работу ПТО и сметчиков</h2>
          <p className="text-base text-slate-300">
            Мы не заменяем людей — мы убираем рутину. Команда быстрее выходит на единую версию
            календарного плана и тратит время на управление, а не на копирование строк.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30 transition hover:border-indigo-400/50 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-200">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
