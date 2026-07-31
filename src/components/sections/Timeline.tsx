import type { TimelineStep } from "../../data/site";

type TimelineProps = {
  columns?: boolean;
  steps: TimelineStep[];
};

export function Timeline({ columns = true, steps }: TimelineProps) {
  return (
    <div className={`timeline ${columns ? "timeline--columns" : ""}`.trim()}>
      {steps.map((step) => (
        <article className="timeline__item" key={step.title}>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>
      ))}
    </div>
  );
}
