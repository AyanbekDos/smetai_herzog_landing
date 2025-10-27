const PainSolutionSection = () => {
  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="container mx-auto grid w-full max-w-6xl gap-8 px-4 lg:grid-cols-2">
        <div className="rounded-3xl bg-slate-50 p-10 shadow-lg shadow-slate-200/40">
          <h2 className="text-2xl font-semibold text-slate-900">Ручные планы тормозят стройку</h2>
          <ul className="mt-6 space-y-3 text-base text-slate-600">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-rose-400" />
              Сметы приходят из подрядчиков в разных кодах ФЕР/ГЭСН — сметчики неделями выравнивают позиции.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-rose-400" />
              По 5–10 тысяч строк нужно вручную группировать в пакеты и смены, чтобы график сошелся.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-rose-400" />
              Согласования превращаются в марафон: объемы, ресурсы и коэффициенты пересчитываются по кругу.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-rose-400" />
              Одна неверная единица измерения — и бюджет, и график поставок рассыпаются.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-indigo-100 via-violet-100 to-rose-100 p-10 shadow-xl shadow-indigo-200/50">
          <h2 className="text-2xl font-semibold text-slate-900">Smetai делает это за вас</h2>
          <ul className="mt-6 space-y-3 text-base text-slate-700">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500" />
              AI-агенты прогоняют любые сметы (ФЕР, ТЕР, локальные) и приводят единицы измерения.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500" />
              Получаете календарный план по неделям с нагрузкой бригад и ресурсным балансом.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500" />
              Excel и PDF c расшифровкой логики расчетов отправляются сразу в Telegram.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PainSolutionSection;
