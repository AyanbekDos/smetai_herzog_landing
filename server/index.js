import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const app = express();

app.use(express.json());

const buildMessage = (payload) => {
  const lines = [
    "Новая заявка с лендинга Smetai",
    `Форма: ${payload.formName || "—"}`,
    "",
    `Компания: ${payload.company || "—"}`,
    `Email: ${payload.email || "—"}`,
    `Телефон/Telegram: ${payload.phone || "—"}`,
    `Запросил демо: ${payload.demo ? "да" : "нет"}`,
    "",
    `UTM Source: ${payload.utm?.utm_source || "—"}`,
    `UTM Medium: ${payload.utm?.utm_medium || "—"}`,
    `UTM Campaign: ${payload.utm?.utm_campaign || "—"}`,
    `UTM Content: ${payload.utm?.utm_content || "—"}`,
    `UTM Term: ${payload.utm?.utm_term || "—"}`,
    `Referrer: ${payload.utm?.referrer || "—"}`,
    `Страница: ${payload.utm?.landing_path || "—"}`,
  ];

  return lines.join("\n");
};

app.post("/api/lead", async (req, res) => {
  const { formName, company, email, phone, demo, utm } = req.body ?? {};

  if (!company || !email) {
    return res.status(400).json({ error: "MISSING_FIELDS" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({ error: "TELEGRAM_NOT_CONFIGURED" });
  }

  const message = buildMessage({
    formName,
    company,
    email,
    phone,
    demo,
    utm,
  });

  try {
    const tgResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    });

    if (!tgResponse.ok) {
      const details = await tgResponse.text();
      return res
        .status(502)
        .json({ error: "TELEGRAM_DELIVERY_FAILED", details });
    }

    return res.json({ ok: true });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "LEAD_SEND_FAILED", details: error.message });
  }
});

app.use(express.static(distDir));

app.get("*", (req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

const port = process.env.PORT || 4173;
app.listen(port, () => {
  console.log(`Smetai app running on http://localhost:${port}`);
});
