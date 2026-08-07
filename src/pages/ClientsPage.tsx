import { LettersRail } from "../components/sections/LettersRail";
import { PageHero } from "../components/sections/PageHero";
import { PartnersSection } from "../components/sections/PartnersSection";
import { StatsGrid } from "../components/sections/StatsGrid";
import { Seo } from "../components/ui/Seo";
import { Section } from "../components/ui/Section";
import { media } from "../data/media";
import { letters, stats } from "../data/site";

export function ClientsPage() {
  return (
    <>
      <Seo
        title="Клиенты и благодарности - ООО ТрастГрупп Контракт"
        description="Блоки доверия: показатели, логотипы направлений закупок, благодарственные письма и будущие кейсы."
      />

      <PageHero
        actions={[{ label: "Передать материалы", to: "/contacts" }]}
        eyebrow="Клиенты и благодарности"
        imageAlt="Команда ООО ТрастГрупп Контракт"
        imageSrc={media.aboutTeam}
        tags={["Цифры", "Логотипы", "Письма", "Кейсы"]}
        text="Раздел готов под доказательства опыта: подтвержденные показатели, письма, кейсы и согласованные логотипы."
        title="Доказательства опыта без неподтвержденных заявлений"
      />

      <Section
        eyebrow="Показатели"
        title="Цифры ждут подтверждения"
        description="Формулировка «8 лет в тендерах» и другие показатели не используются как факт до согласования."
        tone="dark"
      >
        <StatsGrid items={stats} />
      </Section>

      <PartnersSection />

      <Section
        eyebrow="Письма"
        title="Благодарственные письма наших клиентов"
        tone="soft"
      >
        <LettersRail items={letters} />
      </Section>

      <Section eyebrow="Кейсы" title="Кейсы появятся после передачи фактов">
        <div className="empty-state">
          <strong>Нужны данные по задачам, действиям, срокам и результатам.</strong>
          <span>
            После согласования здесь можно собрать аккуратные B2B-кейсы без
            раскрытия конфиденциальной информации.
          </span>
        </div>
      </Section>
    </>
  );
}
