import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Container } from "../ui/Container";
import { HeroFerrofluidBackground } from "./HeroFerrofluidBackground";

type HeroAction = {
  label: string;
  to?: string;
  href?: string;
  rel?: string;
  target?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
};

type PageHeroProps = {
  align?: "left" | "center";
  actions?: HeroAction[];
  bottomSlot?: ReactNode;
  children?: ReactNode;
  className?: string;
  eyebrow?: string;
  imageAlt?: string;
  imageSrc?: string;
  tags?: string[];
  text?: string;
  title: string;
};

export function PageHero({
  align = "left",
  actions = [],
  bottomSlot,
  children,
  className = "",
  eyebrow,
  imageAlt = "",
  imageSrc,
  tags = [],
  text,
  title,
}: PageHeroProps) {
  const heroClassName = [
    "page-hero",
    align === "center" ? "page-hero--center" : "",
    bottomSlot ? "page-hero--has-bottom" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={heroClassName}>
      <HeroFerrofluidBackground />
      <Container>
        <div className="page-hero__grid">
          <div className="page-hero__content">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="page-title">{title}</h1>
            {text && <p className="lead">{text}</p>}
            {tags.length > 0 && (
              <div className="tag-list" style={{ marginTop: 24 }}>
                {tags.map((tag) => (
                  <Badge key={tag} tone="red">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            {actions.length > 0 && (
              <div className="page-hero__actions">
                {actions.map((action) => (
                  <Button
                    href={action.href}
                    icon={<ArrowRight aria-hidden="true" size={18} />}
                    key={action.label}
                    rel={action.rel}
                    target={action.target}
                    to={action.to}
                    variant={action.variant}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            )}
            {children}
          </div>

          {imageSrc && (
            <div className="page-hero__media">
              <img src={imageSrc} alt={imageAlt} />
            </div>
          )}
        </div>
      </Container>
      {bottomSlot && (
        <div className="page-hero__bottom" aria-hidden="true">
          <Container>{bottomSlot}</Container>
        </div>
      )}
    </section>
  );
}
