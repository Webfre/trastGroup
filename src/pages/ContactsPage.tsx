import { ContactCards } from "../components/sections/ContactCards";
import { ContactForm } from "../components/sections/ContactForm";
import { PageHero } from "../components/sections/PageHero";
import { Seo } from "../components/ui/Seo";
import { Section } from "../components/ui/Section";
import { contacts } from "../data/env";
import { media } from "../data/media";
import { uncertainData } from "../data/site";

export function ContactsPage() {
  return (
    <>
      <Seo
        title="Контакты - ТрастГрупп Контракт"
        description="Контакты, социальные сети, форма заявки и список данных, которые нужно подтвердить перед релизом."
      />

      <PageHero
        actions={[
          contacts.telegram
            ? { label: "Написать в Telegram", href: contacts.telegram }
            : { label: "Заполнить форму", to: "/contacts" },
        ]}
        eyebrow="Контакты"
        imageAlt="Команда ТрастГрупп Контракт"
        imageSrc={media.heroTeam}
        tags={["Заявка", "Документация", "Спецификация", "Связь"]}
        text="Обсудим закупку, сопровождение, БРИФ или поставку. Контакты и социальные ссылки берутся из переменных окружения."
        title="Обсудим закупку, сопровождение или поставку"
      />

      <Section
        eyebrow="Связь"
        title="Контакты из .env"
        description="Если переменная окружения пустая, кнопка не показывается или отображается статус уточнения."
      >
        <ContactCards />
      </Section>

      <Section
        eyebrow="Форма"
        title="Отправьте задачу или документацию"
        tone="soft"
      >
        <ContactForm title="Контактная форма" />
      </Section>

      <Section eyebrow="Реквизиты" title="Реквизиты требуют подтверждения">
        <div className="grid grid--2">
          <div className="empty-state">
            <strong>Юридические данные не заполнены</strong>
            <span>Нужны актуальное название, ИНН, ОГРН и адрес.</span>
          </div>
          <div className="empty-state">
            <strong>Карта не подключена</strong>
            <span>
              Добавим карту после подтверждения публичного адреса офиса.
            </span>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Что уточнить"
        title="Открытые данные перед релизом"
        tone="soft"
      >
        <div className="feature-list">
          {uncertainData.map((item) => (
            <article className="feature-list__item" key={item}>
              <h3>{item}</h3>
              <p>Требуется подтверждение заказчика.</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
