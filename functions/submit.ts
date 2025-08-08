export const onRequestOptions: PagesFunction = async () => {
  // CORS preflight support
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
};

export const onRequestPost: PagesFunction = async ({ request, env }) => {
  try {
    const { name, contact } = await request.json();

    if (!name || !contact) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    const token = env.TELEGRAM_BOT_TOKEN as string | undefined;
    const chatId = env.TELEGRAM_CHAT_ID as string | undefined;

    if (!token || !chatId) {
      return new Response(JSON.stringify({ error: 'Server not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
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
      let details: any = null;
      try {
        details = await tgRes.json();
      } catch {
        details = { text: await tgRes.text() };
      }
      const hint =
        tgRes.status === 400 && /chat not found/i.test(JSON.stringify(details))
          ? 'Check TELEGRAM_CHAT_ID: use numeric user ID for direct messages, @channel_username for channels (bot must be admin), or negative numeric ID for groups.'
          : tgRes.status === 403
          ? 'Bot may be blocked or not started by the user, or lacks rights in the chat.'
          : undefined;

      return new Response(
        JSON.stringify({ error: 'Telegram error', status: tgRes.status, details, hint }),
        {
          status: 502,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  } catch (e: any) {
    return new Response(
      JSON.stringify({ error: 'Invalid request', details: String(e?.message || e) }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      }
    );
  }
};
