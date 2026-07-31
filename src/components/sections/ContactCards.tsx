import {
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { contacts, socialLinks } from "../../data/env";

export function ContactCards() {
  const cards = [
    {
      label: "Телефон",
      value: contacts.phoneDisplay || "Требует уточнения",
      href: contacts.phoneHref,
      icon: <Phone size={20} />,
    },
    {
      label: "Email",
      value: contacts.email || "Требует уточнения",
      href: contacts.email ? `mailto:${contacts.email}` : "",
      icon: <Mail size={20} />,
    },
    {
      label: "Город",
      value: contacts.city || "Требует уточнения",
      href: "",
      icon: <MapPin size={20} />,
    },
    ...socialLinks.map((link) => ({
      label: link.label,
      value: link.value,
      href: link.value,
      icon:
        link.label === "Telegram" ? (
          <Send size={20} />
        ) : (
          <MessageCircle size={20} />
        ),
    })),
  ];

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
              {card.href ? "Открыть" : card.value}
            </span>
            {card.href && <ExternalLink aria-hidden="true" size={16} />}
          </>
        );

        if (card.href) {
          return (
            <a className="contact-card" href={card.href} key={card.label}>
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
