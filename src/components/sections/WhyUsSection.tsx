import { useEffect, useRef, useState } from "react";
import { whyUs } from "../../data/site";
import { Folder } from "../ui/Folder";
import { Section } from "../ui/Section";

const folderPapers = [
  ["Требования", "Заявка", "Исполнение"],
  ["Анализ", "Площадки", "Договор"],
  ["Тендеры", "Юрист", "Логистика"],
  ["ЕИС", "ЭТП", "Контроль"],
];

export function WhyUsSection() {
  const folderGridRef = useRef<HTMLDivElement>(null);
  const hasAutoOpenedRef = useRef(false);
  const [shouldAutoOpenFirstFolder, setShouldAutoOpenFirstFolder] = useState(false);

  useEffect(() => {
    const folderGrid = folderGridRef.current;

    if (!folderGrid || !("IntersectionObserver" in window)) {
      return;
    }

    let timeoutId: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (hasAutoOpenedRef.current) {
          return;
        }

        if (entries.some((entry) => entry.isIntersecting)) {
          hasAutoOpenedRef.current = true;
          setShouldAutoOpenFirstFolder(true);
          timeoutId = window.setTimeout(() => {
            setShouldAutoOpenFirstFolder(false);
          }, 1800);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.25,
      },
    );

    observer.observe(folderGrid);

    return () => {
      observer.disconnect();

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <Section
      className="why-folder-section"
      eyebrow="Почему выбирают нас"
      id="why-us"
      title="Практичный подход вместо формальной подачи заявки"
    >
      <div className="folder-feature-grid" ref={folderGridRef}>
        {whyUs.map((item, index) => (
          <article className="folder-feature" key={item.title}>
            <Folder
              autoOpen={index === 0 && shouldAutoOpenFirstFolder}
              items={folderPapers[index]?.map((paper) => (
                <span className="folder-paper-label" key={paper}>
                  {paper}
                </span>
              ))}
              label={`Открыть папку: ${item.title}`}
            />
            <div className="folder-feature__body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
