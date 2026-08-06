import { PageHero } from "../components/sections/PageHero";
import { TeamGrid } from "../components/sections/TeamGrid";
import { WhyUsSection } from "../components/sections/WhyUsSection";
import { Seo } from "../components/ui/Seo";
import { Section } from "../components/ui/Section";
import { media } from "../data/media";
import { teamMembers } from "../data/site";

const companyDirections = [
  {
    title: "Собственные поставки",
    text: "Мы остаёмся действующим поставщиком и продолжаем участвовать в закупках на поставку трубопроводной арматуры по всей России. Это позволяет нам всегда быть в курсе требований заказчиков и рыночной ситуации.",
  },
  {
    title: "Тендерное сопровождение",
    text: "Мы берём на себя полный цикл тендерного сопровождения: от поиска закупок до сопровождения исполнения контракта. Для наших клиентов мы становимся полноценным тендерным отделом на аутсорсе.",
  },
  {
    title: "ЦР «БРИФ» (ГК «Росатом»)",
    text: "Отдельное направление нашей работы — сопровождение компаний в системе ЦР «БРИФ». Мы помогаем пройти путь от регистрации до подачи заявки, учитывая все требования и особенности. Наша задача — сделать процесс понятным, исключить формальные ошибки и помочь клиентам уверенно выйти на новый рынок.",
  },
];

export function AboutPage() {
  return (
    <>
      <Seo
        title="О компании - ООО ТрастГрупп Контракт"
        description="Команда профессионалов с 8-летним опытом участия в тендерах, поставках и сопровождении закупок по всей России."
      />

      <PageHero
        actions={[{ label: "Почему выбирают нас", href: "#why-us" }]}
        align="center"
        className="page-hero--about page-hero--about-centered"
        eyebrow="О компании"
        imageAlt="Логотип ООО ТрастГрупп Контракт"
        imageSrc={media.logoWorkspace}
        text="ООО «ТрастГрупп Контракт» — команда профессионалов с 8-летним опытом участия в тендерах. Мы прошли путь от первых заявок до исполнения крупных контрактов и сегодня помогаем клиентам уверенно побеждать в закупках."
        title="Знаем закупки изнутри"
        withBackground={false}
      />

      <Section
        className="about-history-section"
        eyebrow="История"
        title="Сначала побеждали сами. Теперь помогаем другим."
      >
        <div className="about-history">
          <div className="about-history__copy">
            <p>
              Всё началось 8 лет назад с простого решения — участвовать в тендерах.
              Тогда мы были частью другой компании: создали собственный отдел и с
              нуля погрузились в мир закупок, пройдя путь поставщика — от первой
              заявки до исполнения крупных контрактов.
            </p>
            <p>
              Этот опыт стал нашей главной школой. Со временем мы увидели, что
              накопленная экспертиза может быть полезна не только нам, но и другим
              компаниям. В 2025 году мы создали ООО «ТрастГрупп Контракт» — чтобы
              передавать свой опыт и быть надежным партнером в мире закупок.
            </p>
          </div>
          <div className="about-history__image">
            <img src={media.aboutTeam} alt="Команда ООО «ТрастГрупп Контракт»" />
          </div>
        </div>

        <div className="about-directions">
          <h3>Сегодня ООО «ТрастГрупп Контракт» развивает три ключевых направления</h3>
          <div className="about-directions__grid">
            {companyDirections.map((direction, index) => (
              <article className="about-direction" key={direction.title}>
                <span className="about-direction__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4>{direction.title}</h4>
                <p>{direction.text}</p>
              </article>
            ))}
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
