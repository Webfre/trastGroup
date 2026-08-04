# TrastGroup Contract

React + Vite SPA с клиентским роутингом и сборкой в `dist`.

## Локальный запуск

```bash
npm ci
npm run dev
```

Проверить production-сборку локально:

```bash
npm run build
npm run preview
```

Проверить локально сборку именно под GitHub Pages-путь репозитория:

```powershell
$env:VITE_BASE_PATH = "/trastGroup/"
npm run build
npm run preview
```

## Демо на GitHub Pages

1. Залейте проект в GitHub-репозиторий.
2. В GitHub откройте `Settings` -> `Pages`.
3. В `Build and deployment` выберите `Source: GitHub Actions`.
4. Запушьте изменения в ветку `main` или запустите workflow вручную во вкладке `Actions`.
5. После успешного выполнения workflow демо будет доступно по адресу вида `https://<user>.github.io/<repo>/`.

Workflow лежит в `.github/workflows/deploy.yml`. Он ставит зависимости через `npm ci`, запускает `npm run build`, загружает папку `dist` и публикует ее через GitHub Pages.

Для обычного project Pages Vite автоматически соберет сайт с базовым путем `/<repo>/`. Для пользовательского домена или репозитория вида `<user>.github.io` базовый путь будет `/`.

## Переменные окружения

Публичные настройки можно добавить в GitHub: `Settings` -> `Secrets and variables` -> `Actions` -> `Variables`.

Основные переменные:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_COMPANY_NAME
NEXT_PUBLIC_COMPANY_TAGLINE
NEXT_PUBLIC_PHONE_DISPLAY
NEXT_PUBLIC_PHONE_HREF
NEXT_PUBLIC_EMAIL
NEXT_PUBLIC_CITY
NEXT_PUBLIC_ADDRESS
NEXT_PUBLIC_WORKING_HOURS
NEXT_PUBLIC_TELEGRAM_URL
NEXT_PUBLIC_WHATSAPP_URL
NEXT_PUBLIC_VK_URL
NEXT_PUBLIC_INSTAGRAM_URL
NEXT_PUBLIC_SUPPORT_URL
```

Если нужен кастомный базовый путь, задайте `VITE_BASE_PATH`, например `/trastGroup/` или `/` для кастомного домена.

## Роутинг на GitHub Pages

В сборке создается `dist/404.html`, копия `index.html`. Это нужно, чтобы прямые ссылки вроде `/about` и обновление страницы работали у SPA на GitHub Pages.
