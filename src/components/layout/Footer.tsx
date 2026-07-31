import { Mail, MapPin, Phone } from "lucide-react";
import { company, contacts, socialLinks } from "../../data/env";
import { media } from "../../data/media";
import { Link } from "../../router/Router";
import { SocialIcon } from "../ui/SocialIcon";

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
                  rel="noopener noreferrer"
                  target="_blank"
                  title={link.label}
                  aria-label={link.label}
                >
                  <SocialIcon label={link.label} />
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
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 ООО "ТрастГрупп Контракт"</span>
          <Link to="/privacy">Политика обработки персональных данных</Link>
        </div>
      </div>
    </footer>
  );
}
