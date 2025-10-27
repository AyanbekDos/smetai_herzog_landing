import { LeadForm } from "@/components/LeadForm";

const FinalCTASection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white">
      <div className="container mx-auto w-full max-w-6xl space-y-10 px-4">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Попробуйте Smetai
          </span>
          <h2 className="text-4xl font-bold text-white">
            Готовы ускорить подготовку календарных планов?
          </h2>
          <p className="text-base text-slate-200">
            Напишите нам в{" "}
            <a
              href="https://t.me/aianback"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-200 underline-offset-4 transition hover:text-indigo-100 hover:underline"
              onClick={() => trackEvent("footer_telegram_click")}
            >
              Telegram
            </a>{" "}
            или оставьте контакты — покажем Smetai на вашем проекте и подготовим пилот.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40">
          <LeadForm formName="footer" variant="inline" showDemoCheckbox={false} />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
