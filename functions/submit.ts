export const onRequestPost: PagesFunction = async ({ request, env }) => {
  try {
    const { name, contact } = await request.json();

    if (!name || !contact) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const token = env.TELEGRAM_BOT_TOKEN as string | undefined;
    const chatId = env.TELEGRAM_CHAT_ID as string | undefined;

    if (!token || !chatId) {
      return new Response(JSON.stringify({ error: 'Server not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const message = [
      '🔔 Новая заявка на бета‑тест SMET.ai',
      '',
      `👤 Имя: ${name}`,
      `📞 Контакт: ${contact}`,
      '',
      `📅 Дата: ${new Date().toLocaleString('ru-RU')}`,
    ].join('\n');

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    });

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      return new Response(JSON.stringify({ error: 'Telegram error', details: errText }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: 'Invalid request', details: String(e?.message || e) }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

