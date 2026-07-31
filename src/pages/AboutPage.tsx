import { FeatureGrid } from "../components/sections/FeatureGrid";
import { PageHero } from "../components/sections/PageHero";
import { TeamGrid } from "../components/sections/TeamGrid";
import { WhyUsSection } from "../components/sections/WhyUsSection";
import { Seo } from "../components/ui/Seo";
import { Section } from "../components/ui/Section";
import { media } from "../data/media";
import { teamMembers } from "../data/site";

const approach = [
  {
    title: "Начинаем с анализа",
    text: "Перед стартом смотрим нишу, требования, сроки, перспективы и риски.",
  },
  {
    title: "Согласуем решения",
    text: "Не уводим клиента в тендерную рутину, но показываем важные развилки и последствия.",
  },
  {
    title: "Держим исполнение в фокусе",
    text: "Победа в закупке не финал: дальше договор, документы, поставка и обязательства.",
  },
];

export function AboutPage() {
  return (
    <>
      <Seo
        title="О компании - ООО ТрастГрупп Контракт"
        description="Команда практиков в тендерах и поставках, которая знает закупки со стороны участника и сопровождающей стороны."
      />

      <PageHero
        actions={[{ label: "Почему выбирают нас", href: "#why-us" }]}
        align="center"
        className="page-hero--about page-hero--about-centered"
        eyebrow="О компании"
        imageAlt="Логотип ООО ТрастГрупп Контракт"
        imageSrc={media.logoWorkspace}
        text="ООО «ТрастГрупп Контракт» сопровождает закупки и поставки по России: помогает с заявками, площадками, документами и исполнением контрактов."
        title="Знаем закупки со стороны участника"
      />

      <Section
        eyebrow="История"
        title="От поставок оборудования к сопровождению клиентов"
      >
        <div className="split">
          <FeatureGrid columns={3} items={approach} variant="cards" />
          <div className="image-band">
            <img src={media.aboutTeam} alt="Рабочая встреча команды" />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Команда"
        title="Рабочий контур"
        tone="soft"
      >
        <TeamGrid members={teamMembers} />
      </Section>

      <WhyUsSection />
    </>
  );
}
