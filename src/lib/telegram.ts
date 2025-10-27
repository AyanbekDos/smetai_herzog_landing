import { UtmPayload } from "./utm";

export interface LeadSubmission {
  formName: string;
  company: string;
  email: string;
  phone?: string;
  demo?: boolean;
  utm: UtmPayload;
}

export const sendLeadToTelegram = async (payload: LeadSubmission) => {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = data?.error || "LEAD_SEND_FAILED";
    throw new Error(error);
  }

  return data;
};
