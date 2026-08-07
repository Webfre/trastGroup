import type { LegalDocument } from "../../data/legal";
import { Seo } from "../ui/Seo";

type LegalDocumentPageProps = {
  document: LegalDocument;
};

export function LegalDocumentPage({ document }: LegalDocumentPageProps) {
  return (
    <>
      <Seo
        title={document.seoTitle}
        description={document.seoDescription}
      />

      <section className="page-hero legal-hero">
        <div className="container">
          <span className="eyebrow">{document.eyebrow}</span>
          <h1 className="page-title">{document.title}</h1>
          <p className="lead">{document.lead}</p>
          <dl className="legal-hero__meta">
            {document.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section legal-document-section">
        <div className="container legal-layout">
          <aside className="legal-aside">
            <span className="legal-aside__label">Содержание</span>
            <nav aria-label={`Содержание документа «${document.title}»`}>
              {document.sections.map((section, index) => (
                <a
                  href={`#legal-section-${index + 1}`}
                  key={section.title}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </nav>
          </aside>

          <article className="legal-card">
            {document.preamble && (
              <div className="legal-preamble">
                {document.preamble.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            {document.sections.map((section, index) => (
              <section
                className="legal-section"
                id={`legal-section-${index + 1}`}
                key={section.title}
              >
                <div className="legal-section__heading">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{section.title}</h2>
                </div>

                <div className="legal-section__content">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      className={
                        paragraph.tone
                          ? `legal-paragraph legal-paragraph--${paragraph.tone}`
                          : "legal-paragraph"
                      }
                      key={`${paragraph.number ?? paragraphIndex}-${paragraph.text}`}
                    >
                      {paragraph.tone === "bullet" && (
                        <span className="legal-paragraph__bullet" aria-hidden="true">
                          -
                        </span>
                      )}
                      {paragraph.number && <strong>{paragraph.number}</strong>}
                      <span>{paragraph.text}</span>
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
