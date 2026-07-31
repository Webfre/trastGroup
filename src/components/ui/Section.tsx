import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  compact?: boolean;
  description?: string;
  eyebrow?: string;
  headerAlign?: "left" | "center";
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
    <section className={sectionClass}>
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
