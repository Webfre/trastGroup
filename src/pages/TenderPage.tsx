import { ApplicationFormSection } from "../components/sections/ApplicationFormSection";
import { DirectionGrid } from "../components/sections/DirectionGrid";
import { FeatureGrid } from "../components/sections/FeatureGrid";
import { LogoCloud } from "../components/sections/LogoCloud";
import { PageHero } from "../components/sections/PageHero";
import { Timeline } from "../components/sections/Timeline";
import { Seo } from "../components/ui/Seo";
import { Section } from "../components/ui/Section";
import { media } from "../data/media";
import {
  platformGroups,
  serviceMatrix,
  tenderFormats,
  tenderRisks,
} from "../data/site";

const tenderProcess = [
  {
    title: "Получаем задачу",
    text: "Смотрим ссылку на закупку, документацию, сроки и текущий статус компании.",
  },
  {
    title: "Проверяем требования",
    text: "Разбираем допуск, обеспечение, опыт, документы, спецификацию и риски.",
  },
  {
    title: "Готовим заявку",
    text: "Собираем пакет, сверяем формальные требования и согласуем подачу.",
  },
  {
    title: "Сопровождаем торги",
    text: "Контролируем площадку, коммуникации, протоколы, гарантии и договорной этап.",
  },
  {
    title: "Ведем до исполнения",
    text: "После победы помогаем не потерять сроки, документы и обязательства по контракту.",
  },
];

export function TenderPage() {
  return (
    <>
      <Seo
        title="Тендерное сопровождение - ООО ТрастГрупп Контракт"
        description="Разовое участие, долгосрочное сопровождение, заявки, ЭТП, БРИФ, банковские гарантии и контроль исполнения контракта."
      />

      <PageHero
        actions={[
          { label: "Обсудить закупку", to: "/contacts" },
          { label: "БРИФ / Росатом", to: "/brief", variant: "ghost" },
        ]}
        eyebrow="Тендерное сопровождение"
        imageAlt="Рабочая встреча команды по тендерному сопровождению"
        imageSrc={media.aboutTeam}
        tags={["44-ФЗ", "223-ФЗ", "ЭТП", "Коммерческие закупки"]}
        text="Разбираем закупочную документацию, проверяем требования, готовим заявку и сопровождаем участие до договора и исполнения."
        title="Тендерное сопровождение по 44-ФЗ, 223-ФЗ и коммерческим закупкам"
      />

      <Section
        eyebrow="Форматы работы"
        title="Разовое участие, сопровождение или задача под ключ"
      >
        <DirectionGrid items={tenderFormats} />
      </Section>

      <Section
        eyebrow="Состав услуги"
        title="Что входит в сопровождение"
        tone="soft"
      >
        <FeatureGrid items={serviceMatrix} />
      </Section>

      <Section
        eyebrow="Площадки"
        title="Типы закупок и специализированные контуры"
      >
        <LogoCloud items={platformGroups} />
      </Section>

      <Section
        eyebrow="Процесс"
        title="Как двигаемся по закупке"
        tone="soft"
      >
        <Timeline steps={tenderProcess} />
      </Section>

      <Section
        eyebrow="Риски"
        title="Где чаще всего ошибаются"
      >
        <FeatureGrid columns={3} items={tenderRisks} variant="cards" />
      </Section>

      <ApplicationFormSection formTitle="CTA" />
    </>
  );
}
