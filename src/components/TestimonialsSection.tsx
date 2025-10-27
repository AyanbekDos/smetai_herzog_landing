const TESTIMONIALS = [
  {
    quote:
      "Smetai помог нам за два дня подготовить календарный план для тендера. Экономия времени — колоссальная.",
    author: "Антон, руководитель ПТО",
  },
  {
    quote:
      "Готовые Excel и PDF отчеты выглядят лучше, чем наши ручные. Команда быстро приняла инструмент в работу.",
    author: "Елена, директор по проектам",
  },
  {
    quote:
      "AI-классификация смет сократила ошибки и ускорила согласования. Теперь мы закрываем проекты точнее.",
    author: "Дмитрий, главный инженер",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-slate-50 py-24">
      <div className="container mx-auto w-full max-w-6xl px-4">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Кейсы пилотов
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Что говорят команды пилотных проектов</h2>
          <p className="text-base text-slate-600">
            Мы запускаем пилоты вместе со сметчиками и ПТО. Вот как они описывают результат после
            первых итераций.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.author}
              className="flex h-full flex-col justify-between rounded-3xl border border-indigo-100 bg-white p-8 shadow-lg shadow-indigo-100/40"
            >
              <p className="text-base leading-relaxed text-slate-700">«{item.quote}»</p>
              <span className="mt-6 text-sm font-semibold text-slate-500">{item.author}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
