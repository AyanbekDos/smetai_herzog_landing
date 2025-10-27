# Repository Guidelines

## Project Structure & Module Organization
App code живёт в `src/`: `main.tsx` поднимает провайдеры, `src/pages/` держит route shells, `src/components/` — UI-атомы, а общий код в `src/hooks/`, `src/contexts/`, `src/lib/` (UTM, аналитика). Ассеты и кейсы — в `public/` (`public/samples/`), Tailwind-токены — в `src/index.css`. Production-сервер теперь в `server/index.js`: Express раздаёт `dist/` и обрабатывает `/api/lead`. Исторический `functions/` можно хранить как reference, но не деплоим. `dist/` — артефакт, его не коммитим.

## Build, Test, and Development Commands
- `npm run dev`: Vite + HMR on `http://localhost:5173`; requires a local `.env`.
- `npm run build`: optimized production bundle in `dist/` (CI/CD consumes this output).
- `npm run build:dev`: faster, unminified build for diagnostics.
- `npm run preview`: serve the latest build on `4173` to check parity with production.
- `npm run lint`: ESLint with React, hooks, and TypeScript plugins; run before pushing.

## Coding Style & Naming Conventions
TypeScript обязателен: давайте явные типы экспортируемым API и контекстам, компоненты называем PascalCase (`LeadForm`), хуки — camelCase (`useLeadForm`), файлы группируем по фичам. Tailwind-утилиты оставляем в JSX, но повторяющийся UI переносим в `src/components/ui`. Используем двухпробельное форматирование, ESLint + автофикс и редкие комментарии только для нетривиальной логики (например, аналитики).

## Testing Guidelines
Авто-тестов пока нет. Добавляйте Vitest + Testing Library colocated `*.test.tsx` для новых хуков, либ и сложных форм; Telegram-запросы изолируйте через dependency injection. Пока зависим от ручных чек-листов в PR: лида в Telegram, GA DebugView, responsive hero, редиректы Cloudflare/DO.

## Commit & Pull Request Guidelines
История держится на Conventional Commits (`feat:`, `fix(functions):`, `refactor:`). Соблюдайте `type(scope?): subject` ≤72 символов и краткие body. В PR давайте мотивацию, тесты (`npm run lint`, скриншоты, превью), ссылки на задачи и любые env/infra изменения. Работа с `functions/` или `docs/` требует явных rollout-шагов.

## Design Language & UI Mandate
Комбинируем строгий неоминимализм и тёплый градиент AI-инструментов. Основная типографика — Inter (Regular/Bold), трекинг увеличиваем на акцентах; второстепенный шрифт может быть IBM Plex Sans. Цветовая пара: холодные нейтральные (`#0F172A`, `#475569`) + градиент `indigo-500 → violet-600`, акценты — ровные тени и стеклянные бордеры. Компоненты должны быть скруглёнными (24–32px), с воздушными контейнерами, иконками-эмодзи в текстах и явными CTA с мягкими тенями. Не допускаем визуального шума: максимум три цвета на блок, списки с пиктограммами, адаптивные сетки до 6XL. Вёрстка обязана проходить светлую/тёмную проверку: контраст ≥ 4.5:1 для текста, интерактивы — не менее 44px по высоте.

## Environment & Deployment Notes
Скопируйте `.env.example` в `.env`, задайте `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` (используются `server/index.js`), а также клиентские `VITE_YOUTUBE_VIDEO_ID`, `VITE_GA_MEASUREMENT_ID`. Секреты храните на сервере/в CI. Прод-сборка: `npm run build`, потом `npm run start` (Express раздаёт `dist/` и `/api/lead`). На дроплете обновление = `git pull && npm install && npm run build && pm2 restart npm -- start` (или любой ваш supervisor). Если переключаете backend, не забудьте, что фронт стучится на `/api/lead`.
