import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { captureUtmPayload } from "@/lib/utm";
import { sendLeadToTelegram } from "@/lib/telegram";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "pending" | "success" | "error";

interface LeadFormProps {
  formName: string;
  variant?: "card" | "inline";
  showDemoCheckbox?: boolean;
  className?: string;
}

export const LeadForm = ({
  formName,
  variant = "card",
  showDemoCheckbox = true,
  className,
}: LeadFormProps) => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const utmPayload = useMemo(() => captureUtmPayload(), []);

  const isSubmitting = status === "pending";
  const isSuccess = status === "success";
  const isError = status === "error";

  const submitButtonLabel =
    isSubmitting ? "Отправляем..." : "Получить доступ";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const company = formData.get("company")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const demo =
      showDemoCheckbox && formData.get("demo")?.toString().toLowerCase() === "yes";

    if (!company || !email) {
      setStatus("error");
      setErrorMessage("Укажите компанию и email, чтобы мы могли связаться.");
      return;
    }

    setStatus("pending");
    setErrorMessage(null);
    trackEvent("lead_submit_attempt", { form_name: formName });

    try {
      await sendLeadToTelegram({
        formName,
        company,
        email,
        phone,
        demo,
        utm: utmPayload,
      });

      setStatus("success");
      formElement.reset();
      trackEvent("lead_submit_success", { form_name: formName });
    } catch (error) {
      console.error("Failed to send lead", error);
      setStatus("error");
      if (error instanceof Error && error.message === "TELEGRAM_NOT_CONFIGURED") {
        setErrorMessage(
          "Форма временно недоступна: серверу не переданы TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID."
        );
      } else {
        setErrorMessage(
          "Не удалось отправить заявку. Попробуйте еще раз или напишите в Telegram."
        );
      }
      trackEvent("lead_submit_error", {
        form_name: formName,
        error: error instanceof Error ? error.message : "unknown_error",
      });
    }
  };

  const renderCardVariant = () => (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
      data-form-name={formName}
    >
      <div className="space-y-1.5">
        <label htmlFor={`${formName}-company`} className="text-sm font-medium">
          Название компании
        </label>
        <input
          id={`${formName}-company`}
          name="company"
          type="text"
          placeholder='ООО «СтройПроект»'
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor={`${formName}-email`} className="text-sm font-medium">
          Email
        </label>
        <input
          id={`${formName}-email`}
          name="email"
          type="email"
          placeholder="you@company.ru"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor={`${formName}-phone`} className="text-sm font-medium">
          Телефон или Telegram
        </label>
        <input
          id={`${formName}-phone`}
          name="phone"
          type="text"
          placeholder="+7 900 000-00-00"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {showDemoCheckbox && (
        <label className="flex items-center gap-2 text-sm font-medium text-slate-600">
          <input
            type="checkbox"
            name="demo"
            value="yes"
            defaultChecked
            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          Хочу демо-звонок с показом функционала
        </label>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-6 text-base font-semibold shadow-lg shadow-indigo-500/30 transition hover:from-indigo-500 hover:to-violet-500"
      >
        {submitButtonLabel}
      </Button>

      <p className="text-xs text-slate-500">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
      </p>

      {isSuccess && (
        <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </p>
      )}

      {isError && errorMessage && (
        <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-600">
          {errorMessage}
        </p>
      )}
    </form>
  );

  const renderInlineVariant = () => (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "grid gap-3 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] md:items-center",
        className
      )}
      data-form-name={formName}
    >
      <input
        name="company"
        type="text"
        placeholder="Название компании"
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        required
      />

      <input
        name="phone"
        type="text"
        placeholder="Телефон или Telegram"
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-6 text-base font-semibold shadow-lg shadow-indigo-500/30 transition hover:from-indigo-500 hover:to-violet-500 md:col-span-1"
      >
        {submitButtonLabel}
      </Button>

      {isSuccess && (
        <p className="md:col-span-full rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </p>
      )}

      {isError && errorMessage && (
        <p className="md:col-span-full rounded-lg bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-600">
          {errorMessage}
        </p>
      )}
    </form>
  );

  return variant === "inline" ? renderInlineVariant() : renderCardVariant();
};
