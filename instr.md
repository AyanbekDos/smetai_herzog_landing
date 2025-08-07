# Инструкции по развертыванию и настройке

## Развертывание на Cloudflare Pages

### Шаг 1: Подготовка проекта
```bash
# Установка зависимостей
npm install

# Сборка проекта
npm run build
```

### Шаг 2: Настройка Cloudflare Pages
1. Войдите в панель управления Cloudflare
2. Перейдите в раздел "Pages"
3. Нажмите "Create a project"
4. Выберите "Connect to Git" и подключите ваш репозиторий
5. Настройте параметры сборки:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: оставьте пустым (корень проекта)

### Шаг 3: Переменные окружения
В настройках Cloudflare Pages добавьте следующие переменные:
- `NODE_VERSION`: `18` или выше
- Другие необходимые переменные окружения

### Шаг 4: Настройка домена (опционально)
1. В разделе "Custom domains" добавьте ваш домен
2. Настройте DNS записи согласно инструкциям Cloudflare

## Настройка отправки формы

### Текущая реализация
Форма использует обработчик отправки, который:
1. Валидирует введенные данные
2. Отправляет данные на сервер (необходимо настроить endpoint)
3. Показывает уведомление об успешной отправке

### Настройка backend для формы

#### Вариант 1: Cloudflare Workers
```javascript
// worker.js
export default {
  async fetch(request, env, ctx) {
    if (request.method === 'POST') {
      const formData = await request.json();
      
      // Обработка данных формы
      console.log('Form data:', formData);
      
      // Отправка email (используйте Cloudflare Email Routing или внешний сервис)
      // await sendEmail(formData);
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response('Method not allowed', { status: 405 });
  }
};
```

#### Вариант 2: Внешний API
Настройте endpoint в файле с компонентом формы:
```typescript
const API_ENDPOINT = 'https://your-api-endpoint.com/submit';
```

#### Вариант 3: Cloudflare Forms (простой вариант)
1. В Cloudflare Pages включите "Forms"
2. Добавьте атрибут `data-netlify="true"` к форме
3. Cloudflare автоматически обработает отправку

### Безопасность
- Добавьте CSRF защиту
- Валидируйте данные на сервере
- Используйте rate limiting для предотвращения спама
- Настройте CORS для API endpoints

### Мониторинг
- Настройте логирование ошибок
- Используйте Cloudflare Analytics для мониторинга трафика
- Настройте уведомления об ошибках

## Полезные команды

```bash
# Локальная разработка
npm run dev

# Сборка проекта
npm run build

# Предварительный просмотр сборки
npm run preview

# Линтинг кода
npm run lint

# Проверка типов
npm run type-check
```

## Структура проекта
```
src/
  components/          # React компоненты
  lib/                # Утилиты и библиотеки
  contexts/           # React контексты
  index.css          # Глобальные стили
  App.tsx            # Главный компонент
public/              # Статические файлы
dist/                # Собранный проект (генерируется)
```

## Отладка
- Используйте инструменты разработчика браузера
- Проверьте логи Cloudflare Pages в панели управления
- Для API ошибок проверьте Network tab в DevTools