import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Container } from "../ui/Container";

type HeroAction = {
  label: string;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
};

type PageHeroProps = {
  actions?: HeroAction[];
  children?: ReactNode;
  eyebrow?: string;
  imageAlt?: string;
  imageSrc?: string;
  tags?: string[];
  text: string;
  title: string;
};

export function PageHero({
  actions = [],
  children,
  eyebrow,
  imageAlt = "",
  imageSrc,
  tags = [],
  text,
  title,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <Container>
        <div className="page-hero__grid">
          <div className="page-hero__content">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="page-title">{title}</h1>
            <p className="lead">{text}</p>
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
    </section>
  );
}
