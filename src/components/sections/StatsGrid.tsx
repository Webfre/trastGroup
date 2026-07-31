import { useEffect, useRef, useState } from "react";
import type { Stat } from "../../data/site";
import { Counter } from "../ui/Counter";

type StatsGridProps = {
  items: Stat[];
};

export function StatsGrid({ items }: StatsGridProps) {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const statsElement = statsRef.current;

    if (!statsElement || isVisible) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      const frameId = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting || (entry?.intersectionRatio ?? 0) > 0) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.05,
      },
    );

    observer.observe(statsElement);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div className="stats" ref={statsRef}>
      {items.map((item) => (
        <article className="stat-card" key={item.label}>
          <div className="stat-card__value">
            {typeof item.counterValue === "number" ? (
              <Counter
                fontSize={42}
                fontWeight={800}
                gradientFrom="#202124"
                gradientTo="rgba(32, 33, 36, 0)"
                value={isVisible ? item.counterValue : 0}
              />
            ) : (
              item.value
            )}
          </div>
          <div>
            <div className="stat-card__label">{item.label}</div>
            {item.note && <div className="stat-card__note">{item.note}</div>}
          </div>
        </article>
      ))}
    </div>
  );
}
