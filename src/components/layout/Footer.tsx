import {
  ExternalLink,
  FileText,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Store,
} from "lucide-react";
import { company, contacts, socialLinks } from "../../data/env";
import { media } from "../../data/media";
import { Link } from "../../router/Router";

const footerNav = [
  { label: "Главная", to: "/" },
  { label: "О компании", to: "/about" },
  { label: "Клиенты и благодарности", to: "/clients" },
  { label: "Контакты", to: "/contacts" },
];

const footerServices = [
  { label: "Тендерное сопровождение", to: "/tender" },
  { label: "БРИФ / Росатом", to: "/brief" },
  { label: "Поставки", to: "/supplies" },
  { label: "Заявка на расчет", to: "/contacts" },
];

const socialIcon = (label: string) => {
  switch (label) {
    case "Telegram":
      return <Send aria-hidden="true" size={20} />;
    case "WhatsApp":
      return <MessageCircle aria-hidden="true" size={20} />;
    case "Instagram":
      return <Camera aria-hidden="true" size={20} />;
    case "Avito":
      return <Store aria-hidden="true" size={20} />;
    case "VK":
      return <span aria-hidden="true">vk</span>;
    default:
      return <ExternalLink aria-hidden="true" size={20} />;
  }
};

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link className="brand brand--footer" to="/">
              <img
                className="brand__logo"
                src={media.logoFooter}
                alt={company.name}
              />
            </Link>
            <p className="lead">
              Тендерное сопровождение и поставки под исполнение контрактов по
              России.
            </p>
          </div>

          {socialLinks.length > 0 && (
            <div className="footer-socials" aria-label="Социальные сети">
              {socialLinks.map((link) => (
                <a
                  className="footer-socials__link"
                  href={link.value}
                  key={link.label}
                  title={link.label}
                  aria-label={link.label}
                >
                  {socialIcon(link.label)}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="site-footer__grid">
          <nav className="footer-column" aria-label="Навигация в подвале">
            <h2>Навигация</h2>
            {footerNav.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="footer-column" aria-label="Услуги в подвале">
            <h2>Услуги</h2>
            {footerServices.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="footer-column footer-contacts">
            <h2>Контакты</h2>
            {contacts.phoneDisplay && contacts.phoneHref && (
              <a href={contacts.phoneHref}>
                <Phone aria-hidden="true" size={16} /> {contacts.phoneDisplay}
              </a>
            )}
            {contacts.email && (
              <a href={`mailto:${contacts.email}`}>
                <Mail aria-hidden="true" size={16} /> {contacts.email}
              </a>
            )}
            {contacts.city && (
              <span>
                <MapPin aria-hidden="true" size={16} /> {contacts.city}
              </span>
            )}
          </div>

          <nav className="footer-column" aria-label="Документы в подвале">
            <h2>Документы</h2>
            <Link to="/privacy">
              <FileText aria-hidden="true" size={16} /> Политика обработки
              персональных данных
            </Link>
            <Link to="/contacts">Отправить заявку</Link>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 ООО "ТрастГрупп Контракт"</span>
          <Link to="/privacy">Политика обработки персональных данных</Link>
        </div>
      </div>
    </footer>
  );
}
