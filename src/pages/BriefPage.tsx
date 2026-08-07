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
        title="ЦР БРИФ - сопровождение закупок"
        description="Аккредитация, верификация, каталог продукции, опыт поставок и сопровождение отборов в ЦР БРИФ."
      />

      <PageHero
        actions={[{ label: "Проверить готовность к БРИФ", to: "/contacts" }]}
        className="page-hero--brief"
        eyebrow="ЦР «БРИФ»"
        imageAlt="Команда за рабочим столом"
        imageSrc={media.heroTeam}
        tags={[
          "Аккредитация/Верификация",
          "Каталог продукции",
          "Занесение опыта",
          "Отборы",
        ]}
        text='Помогаем поставщикам подготовить профиль в ЦР "БРИФ": пройти аккредитацию, верификацию, заполнить каталог продукции, занести договора для опыта, принять участие в отборе.'
        title='Сопровождение закупок в ЦР "БРИФ"'
      />

      <Section
        className="brief-services-section"
        eyebrow="Что делаем"
        title="Закрываем ключевые этапы работы в БРИФ"
      >
        <FeatureGrid columns={3} items={briefServices} variant="cards" />
      </Section>

      <Section
        className="brief-process-section"
        eyebrow="Процесс"
        title={
          <>
            От проверки готовности
            <br />
            до заключения договора
          </>
        }
        tone="soft"
      >
        <Timeline steps={briefProcess} />
      </Section>

      <ApplicationFormSection
        description="Оставьте заявку — проведем первичный аудит вашей компании и подскажем, с каких процедур лучше начать в ЦР «БРИФ»."
        formTitle="ЦР «БРИФ»"
        title="Готовы выйти на закупки Росатома?"
      />
    </>
  );
}
