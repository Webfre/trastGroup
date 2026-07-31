import type { Feature } from "../../data/site";

type FeatureGridProps = {
  columns?: 2 | 3 | 4;
  items: Feature[];
  variant?: "cards" | "list";
};

export function FeatureGrid({
  columns = 3,
  items,
  variant = "list",
}: FeatureGridProps) {
  if (variant === "cards") {
    return (
      <div className={`grid grid--${columns}`}>
        {items.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="feature-list">
      {items.map((item) => (
        <article className="feature-list__item" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
