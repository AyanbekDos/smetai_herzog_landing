# Smetai Landing (Vite + React)

Одностраничный лендинг для гипотезы Smetai: AI-конвейер, который превращает сметы в календарные планы и готовые Excel/PDF отчеты. Проект собран на Vite + React + Tailwind + shadcn/ui.

## Локальный запуск

```bash
npm install
npm run dev
```

По умолчанию Vite стартует на `http://localhost:5173`. Перед запуском скопируйте переменные окружения из `.env.example` в `.env`.

## Переменные окружения

| Ключ                     | Описание                                                        |
| ------------------------ | ---------------------------------------------------------------- |
| `TELEGRAM_BOT_TOKEN`     | Секретный токен Telegram-бота для серверной отправки заявок.          |
| `TELEGRAM_CHAT_ID`       | ID канала/группы/чата, куда складывать лиды (например, `-1002957...`). |
| `VITE_YOUTUBE_VIDEO_ID`  | ID ролика для раздела с видео (по умолчанию `dQw4w9WgXcQ`).        |
| `VITE_GA_MEASUREMENT_ID` | GA4 Measurement ID (`G-B71PL9G02D`). При пустом значении GA не подключается. |

> ⚠️ `TELEGRAM_*` переменные используются только сервером (`server/index.js`) и не попадают в браузер.

## Формы и аналитика

- Компонент `LeadForm` (`src/components/LeadForm.tsx`) используется в герое и в финальном CTA.
- `src/lib/telegram.ts` отправляет payload на `/api/lead`, а сервер (`server/index.js`) шлет сообщение в Telegram через Bot API.
- `src/lib/utm.ts` сохраняет UTM-метки и referrer в `sessionStorage` и подставляет их в каждую заявку.
- `src/lib/analytics.ts` оборачивает вызовы `gtag`. События для кликов и сабмитов объявлены внутри компонентов.

## Медиа и ассеты

- Готовые примеры отчетов лежат в `public/samples/` (три Excel-файла с префиксом `Smetai_...`). Меняйте содержимое и названия под свои кейсы.
- Видео-обзор берется с YouTube. Чтобы заменить ссылку, задайте `VITE_YOUTUBE_VIDEO_ID`.
- Брендинг и цвета задаются Tailwind-классами (см. `src/index.css`). Шрифт — Inter.

## Сборка и предпросмотр

```bash
npm run build    # production-сборка в dist/
npm run preview  # проверка production-версии на http://localhost:4173
```

## Деплой на Droplet / любой VM

1. **Первичная настройка сервера**
   ```bash
   sudo apt update && sudo apt install -y git nginx
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   sudo mkdir -p /var/www/smetai && sudo chown $USER:$USER /var/www/smetai
   ```

2. **Сборка и запуск**
   ```bash
   cd /var/www/smetai
   git clone https://github.com/<your-org>/<repo>.git .
   cp .env.example .env   # заполните TELEGRAM_* и VITE_* переменные
   npm install
   npm run build
   npm run start          # Express поднимет /api/lead и раздаст dist/
   ```
   Для постоянной работы используйте `pm2 start npm --name smetai -- start`.

3. **Nginx reverse proxy**
   ```
   server {
     listen 80;
     server_name smetai.online;
     location / {
       proxy_pass http://127.0.0.1:4173;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
     }
   }
   ```
   Перезапустите Nginx и настройте DNS (`A` → IP Droplet-а).

4. **CI/CD через GitHub Actions**
   Добавьте `.github/workflows/deploy.yml`, который при пуше в `main` выполняет SSH на сервер и запускает скрипт:
   ```bash
   # /var/www/smetai/deploy.sh
   set -e
   cd /var/www/smetai
   git fetch origin main
   git reset --hard origin/main
   npm install
   npm run build
   pm2 restart smetai || pm2 start npm --name smetai -- start
   ```
   В GitHub Secrets положите `DROPLET_HOST`, `DROPLET_USER`, `DROPLET_SSH_KEY`.

## Полезные команды

```bash
npm run lint     # ESLint
npm run dev      # локальная разработка
npm run build    # production-сборка
npm run preview  # предпросмотр production-сборки
npm run start    # Express-сервер (используется на проде)
```

## Лицензия

MIT — можете свободно использовать и адаптировать лендинг.
