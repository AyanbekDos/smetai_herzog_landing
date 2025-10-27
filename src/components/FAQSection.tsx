import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Какие форматы файлов поддерживает Smetai?",
    answer:
      "Пока работаем только с выгрузками из ГрандСметы в Excel (.xlsx). Бот проверит файл и подскажет, если нужно поправить структуру.",
  },
  {
    question: "Сколько занимает обработка сметы?",
    answer:
      "Полный конвейер формирует календарный план в течение 15–30 минут. Скорость зависит от объема исходной сметы и числа позиций.",
  },
  {
    question: "Можно ли адаптировать шаблоны отчетов?",
    answer:
      "Да. В рамках пилота мы настраиваем Excel и PDF под ваши стандарты. После пилота вы можете управлять шаблонами самостоятельно.",
  },
  {
    question: "Как обеспечивается безопасность данных?",
    answer:
      "Каждый проект хранится в отдельной директории, доступ к данным есть только у вашей команды. Мы ведем логирование всех операций и можем предоставить аудит.",
  },
  {
    question: "Что нужно, чтобы подключиться к пилоту?",
    answer:
      "Оставьте заявку или напишите в Telegram. Мы согласуем формат пилота, подготовим смету и покажем результат на вашей задаче.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-slate-50 py-24">
      <div className="container mx-auto w-full max-w-5xl px-4">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            FAQ
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Ответы на популярные вопросы</h2>
          <p className="text-base text-slate-600">
            Если не нашли нужную информацию — оставьте контакты, мы пришлем презентацию и ответим на
            любые уточнения.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-indigo-100 bg-white p-6 shadow-lg shadow-indigo-100/50">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-slate-900">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
