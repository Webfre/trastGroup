import { useEffect, useState } from "react";
import { ApplicationFormSection } from "../components/sections/ApplicationFormSection";
import { DirectionGrid } from "../components/sections/DirectionGrid";
import { FeatureGrid } from "../components/sections/FeatureGrid";
import { LettersRail } from "../components/sections/LettersRail";
import { PageHero } from "../components/sections/PageHero";
import { PartnersSection } from "../components/sections/PartnersSection";
import { StatsGrid } from "../components/sections/StatsGrid";
import { TeamGrid } from "../components/sections/TeamGrid";
import { Timeline } from "../components/sections/Timeline";
import { TrustStrip } from "../components/sections/TrustStrip";
import { WhyUsSection } from "../components/sections/WhyUsSection";
import { Seo } from "../components/ui/Seo";
import { Section } from "../components/ui/Section";
import {
  clientPath,
  directions,
  letters,
  serviceMatrix,
  stats,
  teamMembers,
  trustTags,
} from "../data/site";

export function HomePage() {
  const [isTrustStripShifted, setIsTrustStripShifted] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const updateTrustStripPosition = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setIsTrustStripShifted(window.scrollY > 18);
      });
    };

    updateTrustStripPosition();
    window.addEventListener("scroll", updateTrustStripPosition, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateTrustStripPosition);
    };
  }, []);

  const trustStripStateClass = isTrustStripShifted ? "is-shifted" : "";

  return (
    <>
      <Seo
        title="ООО ТрастГрупп Контракт - тендерное сопровождение и поставки"
        description="Сопровождение закупок под ключ: заявки, площадки, документы, исполнение контрактов и поставки."
      />

      <PageHero
        align="center"
        actions={[
          { label: "Получить консультацию", href: "#contact-form" },
          { label: "О компании", to: "/about", variant: "ghost" },
        ]}
        bottomSlot={
          <div
            className={`home-trust-strip home-trust-strip--hero ${trustStripStateClass}`.trim()}
          >
            <TrustStrip items={trustTags} />
          </div>
        }
        eyebrow="Тендеры, контракты, поставки"
        text="Берем на себя заявку, площадки, документы и исполнение контракта."
        title="Сопровождение закупок под ключ"
      />

      <Section compact className="home-trust-section">
        <div
          className={`home-trust-strip home-trust-strip--inline ${trustStripStateClass}`.trim()}
        >
          <TrustStrip items={trustTags} />
        </div>
      </Section>

      <Section
        eyebrow="Два направления"
        title="Ведем закупку и помогаем закрыть исполнение"
      >
        <DirectionGrid items={directions} />
      </Section>

      <Section
        eyebrow="Путь клиента"
        title="От анализа ниши до документов после поставки"
        tone="soft"
      >
        <Timeline steps={clientPath} />
      </Section>

      <Section
        eyebrow="Что берем на себя"
        title="Документы, площадки, торги и исполнение"
      >
        <FeatureGrid items={serviceMatrix} />
      </Section>

      <WhyUsSection />

      <Section
        eyebrow="Цифры"
        title="Опыт в закупках и поставках"
        tone="dark"
      >
        <StatsGrid items={stats} />
      </Section>

      <Section
        eyebrow="Команда"
        title="Рабочий контур"
      >
        <TeamGrid members={teamMembers} />
      </Section>

      <PartnersSection />

      <Section
        eyebrow="Благодарности"
        title="Отзывы и благодарственные письма"
      >
        <LettersRail items={letters} />
      </Section>

      <ApplicationFormSection id="contact-form" formTitle="Финальная форма" />
    </>
  );
}
