import { ApplicationFormSection } from "../components/sections/ApplicationFormSection";
import { ContactCards } from "../components/sections/ContactCards";
import { PageHero } from "../components/sections/PageHero";
import { Seo } from "../components/ui/Seo";
import { Section } from "../components/ui/Section";
import { media } from "../data/media";

export function ContactsPage() {
  return (
    <>
      <Seo
        title="Контакты - ООО ТрастГрупп Контракт"
        description="Контакты, социальные сети, форма заявки и список данных, которые нужно подтвердить перед релизом."
      />

      <PageHero
        actions={[{ label: "Получить консультацию", href: "#contact-form" }]}
        eyebrow="Контакты"
        imageAlt="Команда ООО ТрастГрупп Контракт"
        imageSrc={media.contactsHero}
        title="Обсудим закупку, сопровождение или поставку"
      />

      <Section
        eyebrow="Связь"
        title="Контакты"
      >
        <ContactCards />
      </Section>

      <ApplicationFormSection id="contact-form" formTitle="Контактная форма" />

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
    </>
  );
}
