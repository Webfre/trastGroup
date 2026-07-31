import { ContactForm } from "../components/sections/ContactForm";
import { FeatureGrid } from "../components/sections/FeatureGrid";
import { PageHero } from "../components/sections/PageHero";
import { Timeline } from "../components/sections/Timeline";
import { Seo } from "../components/ui/Seo";
import { Section } from "../components/ui/Section";
import { media } from "../data/media";
import { briefProcess, briefServices } from "../data/site";

export function BriefPage() {
  return (
    <>
      <Seo
        title="БРИФ / Росатом - сопровождение закупок"
        description="Аккредитация, каталог продукции, поиск отборов, опыт поставок и заявка на отбор в ЦР БРИФ ГК Росатом."
      />

      <PageHero
        actions={[{ label: "Проверить готовность к БРИФ", to: "/contacts" }]}
        eyebrow="ЦР БРИФ / ГК Росатом"
        imageAlt="Команда за рабочим столом"
        imageSrc={media.heroTeam}
        tags={["Аккредитация", "Каталог продукции", "Отборы", "Закупочная сессия"]}
        text="Помогаем подготовить компанию к работе в БРИФ: пройти аккредитацию, заполнить данные, найти отборы и подать заявку."
        title='Сопровождение закупок в ЦР "БРИФ" ГК "Росатом"'
      />

      <Section
        eyebrow="Что делаем"
        title="Закрываем ключевые этапы работы в БРИФ"
        description="Блок выделен в отдельную страницу, потому что направление описано в документации как важная специализированная компетенция."
      >
        <FeatureGrid columns={3} items={briefServices} variant="cards" />
      </Section>

      <Section
        eyebrow="Процесс"
        title="От проверки готовности до заявки на отбор"
        tone="soft"
      >
        <Timeline steps={briefProcess} />
      </Section>

      <Section
        eyebrow="Заявка"
        title="Разберем статус и следующий шаг по БРИФ"
        description="Можно прикрепить документы, выгрузку с портала, список продукции или описание текущей проблемы."
      >
        <ContactForm
          fileLabel="Прикрепить документы по БРИФ"
          title="БРИФ / Росатом"
        />
      </Section>
    </>
  );
}
