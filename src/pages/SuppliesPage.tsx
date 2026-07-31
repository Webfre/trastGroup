import { ApplicationFormSection } from "../components/sections/ApplicationFormSection";
import { FeatureGrid } from "../components/sections/FeatureGrid";
import { PageHero } from "../components/sections/PageHero";
import { PartnersSection } from "../components/sections/PartnersSection";
import { Timeline } from "../components/sections/Timeline";
import { DomeGallery } from "../components/ui/DomeGallery";
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

const supplyGalleryImages = [
  { src: media.aboutTeam, alt: "Рабочая встреча команды" },
  { src: media.contactsHero, alt: "Команда на встрече" },
  { src: media.heroTeam, alt: "Обсуждение документов" },
  { src: media.team.katya, alt: "Специалист команды" },
  { src: media.team.lena, alt: "Специалист команды" },
  { src: media.team.kristina, alt: "Специалист команды" },
  { src: media.team.nastya, alt: "Специалист команды" },
  { src: media.team.sveta, alt: "Специалист команды" },
];

export function SuppliesPage() {
  return (
    <>
      <Seo
        title="Поставки промышленной продукции - ООО ТрастГрупп Контракт"
        description="Поставка промышленной продукции под исполнение контрактов: спецификация, подбор, документы, сроки и логистика."
      />

      <PageHero
        actions={[{ label: "Отправить спецификацию", to: "/contacts" }]}
        eyebrow="Поставки"
        imageAlt="Команда ООО ТрастГрупп Контракт"
        imageSrc={media.aboutTeam}
        tags={["Спецификация", "Подбор", "Документы", "Логистика"]}
        text="Подбираем продукцию, согласуем стоимость и сроки, оформляем документы и организуем поставку под исполнение контракта."
        title="Поставки промышленной продукции под исполнение контрактов"
      />

      <Section
        eyebrow="Категории"
        title="Продукция под заявку и спецификацию"
      >
        <FeatureGrid columns={4} items={supplyCategories} variant="cards" />
      </Section>

      <Section
        eyebrow="География"
        title="Поставки и сопровождение по России"
      >
        <FeatureGrid columns={3} items={geography} variant="cards" />
        <div className="supplies-dome-gallery">
          <DomeGallery
            dragDampening={0.92}
            fit={0.74}
            grayscale={false}
            imageBorderRadius="8px"
            maxVerticalRotationDeg={0}
            minRadius={460}
            openedImageBorderRadius="8px"
            openedImageHeight="min(70vh, 520px)"
            openedImageWidth="min(72vw, 560px)"
            overlayBlurColor="#171717"
            segments={30}
            images={supplyGalleryImages}
          />
        </div>
      </Section>

      <Section
        eyebrow="Как работаем"
        title="От спецификации до поставки"
        tone="soft"
      >
        <Timeline steps={supplyProcess} />
      </Section>

      <PartnersSection />

      <ApplicationFormSection formTitle="Расчет поставки" />
    </>
  );
}
