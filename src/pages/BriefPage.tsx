import { ApplicationFormSection } from "../components/sections/ApplicationFormSection";
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

      <ApplicationFormSection formTitle="БРИФ / Росатом" />
    </>
  );
}
