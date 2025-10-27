const STEPS = [
  {
    title: "Загрузка сметы",
    description: "Файл Excel загружается прямо в Telegram-бота.",
    number: "01",
  },
  {
    title: "Извлечение данных",
    description: "Система унифицирует позиции и готовит данные для анализа.",
    number: "02",
  },
  {
    title: "AI-классификация",
    description: "AI-агенты группируют работы в пакеты и считают объемы.",
    number: "03",
  },
  {
    title: "Планирование",
    description: "Генерируются календарный план и ресурсная модель.",
    number: "04",
  },
  {
    title: "Готовые отчеты",
    description: "Excel и PDF отправляются пользователю и готовы к согласованию.",
    number: "05",
  },
];

const PipelineSection = () => {
  return (
    <section id="pipeline" className="bg-slate-950 py-24 text-white">
      <div className="container mx-auto w-full max-w-6xl px-4">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Как это работает
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Полный конвейер Smetai от сметы до календарного плана
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Каждый шаг автоматизирован и обрабатывается профильным AI-агентом. Вы получаете
            единый поток данных без ручных переключений между инструментами.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 transition hover:border-indigo-400/40 hover:bg-white/10"
            >
              <span className="absolute right-6 top-6 text-sm font-semibold text-indigo-300">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
