import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  compact?: boolean;
  description?: string;
  eyebrow?: string;
  headerAlign?: "left" | "center";
  id?: string;
  tone?: "default" | "soft" | "dark";
  title?: string;
};

export function Section({
  children,
  className = "",
  compact = false,
  description,
  eyebrow,
  headerAlign = "left",
  id,
  tone = "default",
  title,
}: SectionProps) {
  const sectionClass = [
    "section",
    compact ? "section--compact" : "",
    tone === "soft" ? "section--soft" : "",
    tone === "dark" ? "section--dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClass} id={id}>
      <Container>
        {(eyebrow || title || description) && (
          <div
            className={`section__header ${
              headerAlign === "center" ? "section__header--center" : ""
            }`.trim()}
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {description && <p className="lead">{description}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
