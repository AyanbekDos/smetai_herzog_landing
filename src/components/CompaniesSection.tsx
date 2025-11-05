type CompanyVariant = "default" | "dark";

type Company = {
  name: string;
  href: string;
  logo: string;
  variant?: CompanyVariant;
};

const COMPANIES: Company[] = [
  {
    name: "Альянс",
    href: "https://alyans82.ru/",
    logo: "/logos/alyans82.svg",
    variant: "dark",
  },
  {
    name: "Aragon Garden",
    href: "https://aragon-garden.ru/",
    logo: "/logos/aragon-garden.svg",
  },
  {
    name: "PROMM82",
    href: "https://promm82.ru/",
    logo: "/logos/promm82.png",
  },
  {
    name: "Прима Питер",
    href: "https://прима-питер.рф/",
    logo: "/logos/prima-piter.svg",
  },
];

const CompaniesSection = () => {
  return (
    <section
      aria-labelledby="companies-heading"
      className="relative isolate overflow-hidden bg-white py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-indigo-200/30 via-transparent to-violet-200/30 blur-3xl"
      />
      <div className="container relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/80 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-600 shadow-sm shadow-indigo-200">
            🚀 Пилот SMETAI
          </span>
          <h2
            id="companies-heading"
            className="text-2xl font-semibold text-slate-900 sm:text-3xl"
          >
            Компании тестируют SMETAI на живых объектах
          </h2>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-6">
          {COMPANIES.map((company) => {
            const cardPalette =
              company.variant === "dark"
                ? "border-slate-800/70 bg-slate-900 text-slate-100 shadow-slate-900/25 hover:border-slate-700"
                : "border-white/70 bg-white/80 shadow-indigo-100/50 hover:border-indigo-200/70";
            const imagePalette =
              company.variant === "dark"
                ? "brightness-110 contrast-125"
                : "";

            return (
              <a
                key={company.name}
                href={company.href}
                target="_blank"
                rel="noreferrer noopener"
                className={`group flex h-24 w-full max-w-[196px] items-center justify-center rounded-3xl border px-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${cardPalette}`}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className={`max-h-12 w-auto opacity-80 transition group-hover:opacity-100 ${imagePalette}`}
                  loading="lazy"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
