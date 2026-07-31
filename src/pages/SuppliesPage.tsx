import { ContactForm } from "../components/sections/ContactForm";
import { FeatureGrid } from "../components/sections/FeatureGrid";
import { LogoCloud } from "../components/sections/LogoCloud";
import { PageHero } from "../components/sections/PageHero";
import { Timeline } from "../components/sections/Timeline";
import { Seo } from "../components/ui/Seo";
import { Section } from "../components/ui/Section";
import { media } from "../data/media";
import { supplyCategories, supplyProcess } from "../data/site";

const geography = [
  {
    title: "Работаем по России",
    text: "География подтверждена в материалах, но список регионов нужно уточнить отдельно.",
  },
  {
    title: "Онлайн-коммуникация",
    text: "Заявки, спецификации, согласования и документы можно вести дистанционно.",
  },
  {
    title: "Документы под контракт",
    text: "Поставка рассматривается как часть исполнения: сроки, закрывающие документы и логистика.",
  },
];

const brandPlaceholders = [
  "Заводы уточняются",
  "Бренды уточняются",
  "Дистрибьюторы уточняются",
  "Категории уточняются",
  "Партнеры уточняются",
];

export function SuppliesPage() {
  return (
    <>
      <Seo
        title="Поставки промышленной продукции - ТрастГрупп Контракт"
        description="Поставка промышленной продукции под исполнение контрактов: спецификация, подбор, документы, сроки и логистика."
      />

      <PageHero
        actions={[{ label: "Отправить спецификацию", to: "/contacts" }]}
        eyebrow="Поставки"
        imageAlt="Команда ТрастГрупп Контракт"
        imageSrc={media.aboutTeam}
        tags={["Спецификация", "Подбор", "Документы", "Логистика"]}
        text="Подбираем продукцию, согласуем стоимость и сроки, оформляем документы и организуем поставку под исполнение контракта."
        title="Поставки промышленной продукции под исполнение контрактов"
      />

      <Section
        eyebrow="Категории"
        title="Продукция под заявку и спецификацию"
        description="Направления поставок оставлены осторожными: точные категории, арматура, заводы и бренды требуют подтверждения."
      >
        <FeatureGrid columns={4} items={supplyCategories} variant="cards" />
      </Section>

      <Section
        eyebrow="Как работаем"
        title="От спецификации до поставки"
        tone="soft"
      >
        <Timeline steps={supplyProcess} />
      </Section>

      <Section
        eyebrow="География"
        title="Поставки и сопровождение по России"
        description="Карта не добавлена до подтверждения публичного адреса и регионов; вместо нее используется честный географический блок."
      >
        <FeatureGrid columns={3} items={geography} variant="cards" />
      </Section>

      <Section
        eyebrow="Заводы и бренды"
        title="Блок подготовлен под подтвержденный список"
        description="Логотипы заводов, брендов и партнеров нельзя публиковать без согласования."
        tone="soft"
      >
        <LogoCloud items={brandPlaceholders} />
      </Section>

      <Section
        eyebrow="Расчет"
        title="Отправьте заявку, спецификацию или реквизиты"
        description="Форма учитывает компанию/ИНН и прикрепление файла, как указано в ТЗ для раздела поставок."
      >
        <ContactForm
          fileLabel="Прикрепить заявку или спецификацию"
          title="Расчет поставки"
          withCompany
        />
      </Section>
    </>
  );
}
