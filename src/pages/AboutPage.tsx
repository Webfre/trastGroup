import { FeatureGrid } from "../components/sections/FeatureGrid";
import { PageHero } from "../components/sections/PageHero";
import { TeamGrid } from "../components/sections/TeamGrid";
import { Seo } from "../components/ui/Seo";
import { Section } from "../components/ui/Section";
import { media } from "../data/media";
import { companyPrinciples, teamMembers } from "../data/site";

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
        title="О компании - ТрастГрупп Контракт"
        description="Команда практиков в тендерах и поставках, которая знает закупки со стороны участника и сопровождающей стороны."
      />

      <PageHero
        actions={[{ label: "Связаться с командой", to: "/contacts" }]}
        eyebrow="О компании"
        imageAlt="Команда ТрастГрупп Контракт"
        imageSrc={media.heroTeam}
        tags={["Тендеры", "Поставки", "Документы", "Логистика"]}
        text="Команда выросла из практики поставок оборудования, поэтому видит не только заявку, но и исполнение контракта: документы, сроки, логистику и реальные обязательства."
        title="Практики в тендерах, которые знают закупки со стороны участника"
      />

      <Section
        eyebrow="История"
        title="От поставок оборудования к сопровождению клиентов"
        description="Эта рамка подтверждена в контентной основе: компания понимает процесс с двух сторон, как исполнитель и как эксперт по сопровождению."
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
        title="5 человек в процессе клиента"
        description="Фото подготовлены из локальных материалов. Имена, должности и зоны ответственности нужно подтвердить перед релизом."
        tone="soft"
      >
        <TeamGrid members={teamMembers} />
      </Section>

      <Section eyebrow="Принципы" title="Как держим работу под контролем">
        <FeatureGrid columns={4} items={companyPrinciples} variant="cards" />
      </Section>
    </>
  );
}
