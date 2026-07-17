# Демо-проект — Telegram Mini App

React + Vite + Express. Заказы приходят вам в Telegram.

## Render (сайт + API вместе)

1. Запушьте код на GitHub.
2. На [render.com](https://render.com) → **New** → **Web Service** → этот репозиторий.
3. Настройки:

| Поле | Значение |
|------|----------|
| **Runtime** | Node |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |

4. Environment Variables:

| Key | Value |
|-----|-------|
| `BOT_TOKEN` | токен от BotFather |
| `ADMIN_CHAT_ID` | ваш chat id |

5. **Save** → дождитесь Deploy. Откройте `https://ваш-сервис.onrender.com`

Не ставьте Start Command = `npm run dev` — из‑за этого была ошибка *Blocked request*.

В BotFather укажите URL Render как Mini App.

## Локально

```bash
npm install
npm run build
npm start
```

Или отдельно:

```bash
npm run dev:api   # терминал 1
npm run dev       # терминал 2 → http://localhost:5173/
```

## GitHub Pages

Только фронт (без заказов), сборка с `VITE_BASE=/mini-app/`.
Для заказов используйте Render.
