import {
  MapPinned,
  MessageCircle,
  PackageCheck,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { whyUs } from "../../data/site";
import { Section } from "../ui/Section";

const advantageIcons: LucideIcon[] = [
  RefreshCw,
  MessageCircle,
  PackageCheck,
  MapPinned,
];

export function WhyUsSection() {
  return (
    <Section
      className="why-us-section"
      eyebrow="Почему выбирают нас"
      id="why-us"
      title="Берём закупки под полный контроль"
    >
      <div className="advantage-grid">
        {whyUs.map((item, index) => {
          const Icon = advantageIcons[index] ?? RefreshCw;

          return (
            <article className="advantage-card" key={item.title}>
              <div className="advantage-card__graphic" aria-hidden="true">
                <span className="advantage-card__icon">
                  <Icon size={32} strokeWidth={1.7} />
                </span>
                <span className="advantage-card__trace">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="advantage-card__body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
