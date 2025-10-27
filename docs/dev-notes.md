# Developer Notes — Smetai Landing

## Архитектура

- **Фреймворк**: Vite + React 18 + TypeScript.
- **UI**: Tailwind CSS, shadcn/ui компоненты, кастомные секции в `src/components`.
- **Маршрутизация**: React Router (`src/pages/Index.tsx` — основная страница).
- **Состояния/утилиты**: лёгкая обвязка над Telegram API и GA в `src/lib`.

## Поток отправки заявки

1. `LeadForm` собирает данные, валидирует обязательные поля и enrich с UTM (`captureUtmPayload`).
2. При сабмите вызывается `sendLeadToTelegram`, который отправляет JSON в Bot API (токен и chat id берутся из `import.meta.env`).
3. События успеха/ошибки репортятся в GA (`trackEvent`).
4. После успеха форма сбрасывается, скрытые поля снова заполняются UTM.

> ❗ Для production рекомендуем заменить прямой вызов Bot API на промежуточный endpoint (Cloudflare Worker / DO Functions) и держать токен в серверном окружении.

## Аналитика

- GA4 подгружается условно из `index.html`: если `VITE_GA_MEASUREMENT_ID` отсутствует, аналитика не инициализируется.
- Основные события: `nav_click`, `hero_primary_cta_click`, `lead_submit_*`, клики по скачиваниям (`download_*`).
- При необходимости добавляйте события через `trackEvent`.

## Структура стилей

- Глобальные токены и шрифты — `src/index.css`.
- Каждая секция оформляется Tailwind-классами в компонентах. Следуйте текущим токенам цветов (индиго/фиолет/сланец) для консистентности.
- При добавлении новых секций сохраняйте сетку `container mx-auto px-4 ...` для выравнивания.

## Как добавлять секцию

1. Создайте файл в `src/components` и экспортируйте React-компонент.
2. Подключите его в `src/pages/Index.tsx` в нужном порядке.
3. При необходимости вынесите повторяющиеся элементы в вспомогательные компоненты.

## Asset pipeline

- Статические файлы (`public/`) доступны без fingerprinting. Для изображений используйте сабфолдер `public/images` и обращайтесь к ним как `/images/...`.
- Excel-файлы лежат в `public/samples`. При обновлении имён не забудьте поправить ссылки в `SamplesSection`.

## Скрипты

```bash
npm run dev       # dev-сервер
npm run build     # production-сборка
npm run preview   # просмотр сборки
npm run lint      # ESLint (TS + React Hooks)
```

## TODO/ideas

- Подключить serverless endpoint для безопасной отправки лидов.
- Добавить e2e-снимок формы (Playwright/Cypress) при разрастании функционала.
- Расширить секцию отзывов/кейсов с CMS или markdown-источником.

