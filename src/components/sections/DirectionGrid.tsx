import { ArrowRight } from "lucide-react";
import type { Direction } from "../../data/site";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

type DirectionGridProps = {
  items: Direction[];
};

export function DirectionGrid({ items }: DirectionGridProps) {
  return (
    <div className="grid grid--2">
      {items.map((item) => (
        <Card className="direction-card" key={item.title}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ul>
              {item.items.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="direction-card__link">
            <Button
              icon={<ArrowRight aria-hidden="true" size={18} />}
              to={item.to}
              variant="ghost"
            >
              {item.cta}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
