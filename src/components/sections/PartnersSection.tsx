import { logoPlaceholders } from "../../data/site";
import { Section } from "../ui/Section";
import { LogoCloud } from "./LogoCloud";

export function PartnersSection() {
  return (
    <Section
      className="partners-section"
      eyebrow="Партнёры"
      title="Компании из рабочих направлений"
    >
      <LogoCloud items={logoPlaceholders} marquee />
    </Section>
  );
}
