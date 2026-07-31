import type { Stat } from "../../data/site";

type StatsGridProps = {
  items: Stat[];
};

export function StatsGrid({ items }: StatsGridProps) {
  return (
    <div className="stats">
      {items.map((item) => (
        <article className="stat-card" key={item.label}>
          <div className="stat-card__value">{item.value}</div>
          <div>
            <div className="stat-card__label">{item.label}</div>
            {item.note && <div className="stat-card__note">{item.note}</div>}
          </div>
        </article>
      ))}
    </div>
  );
}
