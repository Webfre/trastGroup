import { Menu, MessageCircle, Phone, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contacts } from "../../data/env";
import { media } from "../../data/media";
import { navItems } from "../../data/site";
import { NavLink } from "../../router/Router";
import { Button } from "../ui/Button";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `nav__link ${isActive ? "is-active" : ""}`.trim();

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <NavLink className="brand brand--header" to="/" onClick={closeMenu}>
          <img
            className="brand__mark"
            src={media.logoHeader}
            alt="ТрастГрупп Контракт"
          />
        </NavLink>

        <nav className="nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <NavLink
              className={navClass}
              end={item.path === "/"}
              key={item.path}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          {contacts.phoneDisplay && contacts.phoneHref && (
            <a
              className="icon-link"
              href={contacts.phoneHref}
              aria-label={`Позвонить: ${contacts.phoneDisplay}`}
              title={contacts.phoneDisplay}
            >
              <Phone size={18} />
            </a>
          )}
          {contacts.telegram && (
            <a
              className="icon-link"
              href={contacts.telegram}
              aria-label="Открыть Telegram"
              title="Telegram"
            >
              <Send size={18} />
            </a>
          )}
          {contacts.whatsapp && (
            <a
              className="icon-link"
              href={contacts.whatsapp}
              aria-label="Открыть WhatsApp"
              title="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          )}
          <Button to="/contacts" variant="primary">
            Получить консультацию
          </Button>
        </div>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-panel ${isOpen ? "is-open" : ""}`.trim()}>
        <div className="mobile-panel__inner">
          <nav className="nav" aria-label="Мобильная навигация">
            {navItems.map((item) => (
              <NavLink
                className={navClass}
                end={item.path === "/"}
                key={item.path}
                to={item.path}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-panel__actions">
            <Button to="/contacts" onClick={closeMenu}>
              Получить консультацию
            </Button>
            {contacts.telegram && (
              <Button href={contacts.telegram} variant="ghost">
                Telegram
              </Button>
            )}
            {contacts.phoneDisplay && contacts.phoneHref && (
              <Button href={contacts.phoneHref} variant="ghost">
                {contacts.phoneDisplay}
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
