# TrastGroup Contract: требования к переменным окружения

Дата подготовки: 31.07.2026

## Назначение

Контакты, социальные сети и интеграционные настройки должны храниться в `.env`, чтобы их можно было менять без правки кода. Публичные ссылки можно использовать на клиенте, секреты должны оставаться только на сервере.

## Публичные переменные

Эти значения можно использовать в интерфейсе сайта.

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_COMPANY_NAME=ТрастГрупп Контракт
NEXT_PUBLIC_COMPANY_TAGLINE=От доверия - к результату

NEXT_PUBLIC_PHONE_DISPLAY=
NEXT_PUBLIC_PHONE_HREF=
NEXT_PUBLIC_EMAIL=tgcontract@yandex.ru
NEXT_PUBLIC_CITY=Москва
NEXT_PUBLIC_ADDRESS=
NEXT_PUBLIC_WORKING_HOURS=

NEXT_PUBLIC_TELEGRAM_URL=https://t.me/trustgroupcontract
NEXT_PUBLIC_WHATSAPP_URL=
NEXT_PUBLIC_VK_URL=
NEXT_PUBLIC_AVITO_URL=https://www.avito.ru/brands/d3e159cd44c0c9f2899dc623875dbae0/all/predlozheniya_uslug?sellerId=f392ef6ecb44786bd869d4e1bbaa4e37
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_SUPPORT_URL=

NEXT_PUBLIC_YANDEX_METRIKA_ID=
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
```

## Серверные переменные

Эти значения нельзя отдавать в браузер.

```env
LEADS_TO_EMAIL=
LEADS_FROM_EMAIL=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=

TELEGRAM_BOT_TOKEN=
TELEGRAM_LEADS_CHAT_ID=

CRM_WEBHOOK_URL=
CRM_API_KEY=
```

## Правила использования

- Все ссылки на соцсети в header, footer, контактах и CTA должны подтягиваться из `.env`.
- Если переменная пустая, соответствующую кнопку/иконку не показывать.
- Телефон хранить в двух форматах:
  - `NEXT_PUBLIC_PHONE_DISPLAY` для отображения;
  - `NEXT_PUBLIC_PHONE_HREF` для ссылки `tel:`.
- Email хранить один раз и использовать во всех местах.
- Avito-ссылку сохранить даже если страница временно недоступна для автоматического сбора.
- Секреты для Telegram-бота, SMTP и CRM не должны иметь префикс `NEXT_PUBLIC_`.
- Перед релизом отдельно проверить, какие переменные нужны выбранному фреймворку и хостингу.

## Что нужно уточнить

- Актуальный номер телефона.
- Нужен ли отдельный канал "техподдержка" или это Telegram/WhatsApp/email.
- Точная ссылка VK.
- Точная ссылка WhatsApp.
- Точная ссылка Instagram.
- Подтверждение Avito-ссылки.
- Нужно ли подключать CRM.
- Куда отправлять заявки на старте: email, Telegram, CRM или несколько каналов сразу.

