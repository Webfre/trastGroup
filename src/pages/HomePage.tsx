import { ContactForm } from "../components/sections/ContactForm";
import { DirectionGrid } from "../components/sections/DirectionGrid";
import { FeatureGrid } from "../components/sections/FeatureGrid";
import { LettersRail } from "../components/sections/LettersRail";
import { LogoCloud } from "../components/sections/LogoCloud";
import { PageHero } from "../components/sections/PageHero";
import { StatsGrid } from "../components/sections/StatsGrid";
import { TeamGrid } from "../components/sections/TeamGrid";
import { Timeline } from "../components/sections/Timeline";
import { TrustStrip } from "../components/sections/TrustStrip";
import { Seo } from "../components/ui/Seo";
import { Section } from "../components/ui/Section";
import { media } from "../data/media";
import {
  clientPath,
  directions,
  letters,
  logoPlaceholders,
  serviceMatrix,
  stats,
  teamMembers,
  trustTags,
  whyUs,
} from "../data/site";

export function HomePage() {
  return (
    <>
      <Seo
        title="ТрастГрупп Контракт - тендерное сопровождение и поставки"
        description="Сопровождаем закупки от первой заявки до исполнения контракта: 44-ФЗ, 223-ФЗ, БРИФ, ЭТП, поставки и логистика."
      />

      <PageHero
        actions={[
          { label: "Получить консультацию", to: "/contacts" },
          { label: "Отправить заявку", to: "/contacts", variant: "ghost" },
        ]}
        eyebrow="Тендеры, контракты, поставки"
        imageAlt="Команда ТрастГрупп Контракт за рабочей встречей"
        imageSrc={media.heroTeam}
        tags={trustTags}
        text="Помогаем бизнесу выходить на рынок закупок, готовить заявки, проходить площадки, защищать интересы и исполнять контракты с поставкой и логистикой."
        title="Сопровождаем закупки от первой заявки до исполнения контракта"
      />

      <Section compact>
        <TrustStrip items={trustTags} />
      </Section>

      <Section
        eyebrow="Два направления"
        title="Ведем закупку и помогаем закрыть исполнение"
        description="Сайт разделяет тендерное сопровождение и поставки, но показывает их как связанный B2B-процесс."
      >
        <DirectionGrid items={directions} />
      </Section>

      <Section
        eyebrow="Путь клиента"
        title="От анализа ниши до документов после поставки"
        description="Маршрут помогает быстро понять, где команда подключается и какие риски берет под контроль."
        tone="soft"
      >
        <Timeline steps={clientPath} />
      </Section>

      <Section
        eyebrow="Что берем на себя"
        title="Документы, площадки, торги и исполнение"
        description="Формулировки собраны из документации проекта и Avito-основы, без неподтвержденных обещаний."
      >
        <FeatureGrid items={serviceMatrix} />
      </Section>

      <Section
        eyebrow="Почему выбирают нас"
        title="Практичный подход вместо формальной подачи заявки"
      >
        <FeatureGrid columns={4} items={whyUs} variant="cards" />
      </Section>

      <Section
        eyebrow="Цифры"
        title="Показатели подготовлены к замене на подтвержденные"
        description="Часть данных пока намеренно не превращена в маркетинговые цифры: это защищает сайт от неподтвержденных заявлений."
        tone="dark"
      >
        <StatsGrid items={stats} />
      </Section>

      <Section
        eyebrow="Команда"
        title="5 человек в рабочем контуре"
        description="Имена взяты из файлов фото. Роли и зоны ответственности нужно подтвердить у заказчика перед публикацией."
      >
        <TeamGrid members={teamMembers} />
      </Section>

      <Section
        eyebrow="Площадки и компании"
        title="Помогаем выходить на закупки крупнейших компаний"
        description="Список из графических макетов показан как перечень направлений закупок, а не как подтвержденные клиенты."
        tone="soft"
      >
        <LogoCloud items={logoPlaceholders} />
        <p className="notice" style={{ marginTop: 20 }}>
          Перед релизом нужно подтвердить, какие логотипы можно публиковать и в
          каком статусе: клиенты, партнеры, площадки или примеры закупок.
        </p>
      </Section>

      <Section
        eyebrow="Благодарности"
        title="Блок готов под реальные письма"
        description="Когда заказчик передаст изображения писем, карточки можно заменить без изменения структуры страницы."
      >
        <LettersRail items={letters} />
      </Section>

      <Section
        eyebrow="Заявка"
        title="Обсудим закупку, сопровождение или поставку"
        description="Форма уже учитывает файл документации или спецификации. Канал отправки заявок подключается после выбора CRM, Telegram, SMTP или email."
        tone="soft"
      >
        <ContactForm title="Финальная форма" />
      </Section>
    </>
  );
}
