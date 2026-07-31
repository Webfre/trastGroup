import {
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { ReactNode } from "react";
import { contacts, socialLinks } from "../../data/env";
import { SocialIcon } from "../ui/SocialIcon";

type ContactCard = {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  isExternal?: boolean;
};

export function ContactCards() {
  const cards: ContactCard[] = [
    {
      label: "Телефон",
      value: contacts.phoneDisplay,
      href: contacts.phoneHref,
      icon: <Phone size={20} />,
    },
    {
      label: "Email",
      value: contacts.email,
      href: "",
      icon: <Mail size={20} />,
    },
    {
      label: "Город",
      value: contacts.city,
      href: "",
      icon: <MapPin size={20} />,
    },
    ...socialLinks.map((link) => ({
      label: link.label,
      value: link.value,
      href: link.value,
      icon: <SocialIcon label={link.label} />,
      isExternal: true,
    })),
  ].filter((card) => card.value || card.href);

  return (
    <div className="contact-grid">
      {cards.map((card) => {
        const content = (
          <>
            <span className="contact-card__icon" aria-hidden="true">
              {card.icon}
            </span>
            <span className="contact-card__label">{card.label}</span>
            <span className="contact-card__value">
              {card.isExternal ? "Открыть" : card.value}
            </span>
            {card.isExternal && <ExternalLink aria-hidden="true" size={16} />}
          </>
        );

        if (card.href) {
          return (
            <a
              className="contact-card"
              href={card.href}
              key={card.label}
              rel={card.isExternal ? "noopener noreferrer" : undefined}
              target={card.isExternal ? "_blank" : undefined}
            >
              {content}
            </a>
          );
        }

        return (
          <div className="contact-card" key={card.label}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
