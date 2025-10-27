import { trackEvent } from "@/lib/analytics";

const CASES = [
  {
    slug: "uks-kherson",
    title: "УКС Херсон · капитальный ремонт",
    scope: "173 дня · 17 пакетов · 4 блока работ",
    description:
      "AI разложил демонтаж, общестрой, инженерку и отделку по неделям 08.01–28.06, показывая нагрузку 3–6 человек на каждый пакет.",
    highlights: [
      "В «📊 Графике» видно, как бригады закрывают проценты готовности и переносят объемы без ночных смен.",
      "Вкладка «🧮 Логика расчетов» объясняет суммирование скрытой проводки 500 м + коробов 461 м и труб разных диаметров в единую единицу.",
    ],
    report: "/samples/smetai-uks-kherson-report.xlsx",
    sources: "/samples/smetai-uks-kherson-sources.zip",
  },
  {
    slug: "school-crimea",
    title: "Школа в Крыму · реконструкция",
    scope: "145 дней · 15 пакетов · 4 блока работ",
    description:
      "Смета с кровлей, фасадами, инженеркой и благоустройством превращена в календарь до 31.05 с контрольными точками и нагрузкой до 10 человек.",
    highlights: [
      "AI подсвечивает доминирующие работы (например, разборка стен 83,38 м²) и объясняет, почему кровля сведена к 1 284 м².",
      "Каждый пакет раскрывает входящие ФЕР/ГЭСН позиции, единицы измерения и объемы для согласования с технадзором.",
    ],
    report: "/samples/smetai-school-crimea-report.xlsx",
    sources: "/samples/smetai-school-crimea-sources.zip",
  },
  {
    slug: "school-novoivanovsk",
    title: "Школа Новоивановск · модернизация",
    scope: "173 дня · 14 пакетов · 3 блока работ",
    description:
      "График покрывает демонтаж, общестрой и инженерные системы до 28.06, включая график движения рабочей силы и ресурсный баланс.",
    highlights: [
      "Вкладка «📋 Пакеты работ» показывает каждому участнику: ID пакета, правило расчета, входящие работы и единицы (м, м², т, шт).",
      "AI приводит трубопроводы и кабельные линии к метрам, отмечает доминирующие работы и фиксирует итоговые объемы (например, 1 627 м демонтированных сетей).",
    ],
    report: "/samples/smetai-school-novoivanovsk-report.xlsx",
    sources: "/samples/smetai-school-novoivanovsk-sources.zip",
  },
];

const SamplesSection = () => {
  return (
    <section id="samples" className="bg-white py-24">
      <div className="container mx-auto w-full max-w-6xl px-4">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Готовые документы
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Живые кейсы Smetai</h2>
          <p className="text-base text-slate-600">
            В каждом архиве — исходные локальные сметы и итоговый Excel от AI-конвейера. Покажите эти
            файлы подрядчикам и заказчикам, чтобы подтвердить качество календарей и расшифровок.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {CASES.map((sample) => (
            <article
              key={sample.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-indigo-100 bg-indigo-50/40 p-8 shadow-lg shadow-indigo-100/50 transition hover:-translate-y-1 hover:border-indigo-200"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500">
                    {sample.scope}
                  </p>
                  <h3 className="text-xl font-semibold text-slate-900">{sample.title}</h3>
                </div>
                <p className="text-sm text-slate-600">{sample.description}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {sample.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={sample.report}
                  download
                  onClick={() => trackEvent("download_sample_report", { sample: sample.slug })}
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-indigo-200 bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-800"
                >
                  Отчет Smetai (Excel)
                </a>
                <a
                  href={sample.sources}
                  download
                  onClick={() => trackEvent("download_sample_sources", { sample: sample.slug })}
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-indigo-100/80 bg-indigo-100/40 px-5 py-3 text-sm font-semibold text-indigo-800 transition hover:border-indigo-200 hover:bg-indigo-100"
                >
                  Исходные сметы (ZIP)
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SamplesSection;
