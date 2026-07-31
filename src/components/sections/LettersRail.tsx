import { FileText } from "lucide-react";
import { Card } from "../ui/Card";

type Letter = {
  title: string;
  text: string;
};

type LettersRailProps = {
  items: Letter[];
};

export function LettersRail({ items }: LettersRailProps) {
  return (
    <div className="letter-rail" aria-label="Благодарственные письма">
      {items.map((item) => (
        <Card className="letter-card" key={item.title}>
          <div className="letter-card__sheet">
            <FileText aria-hidden="true" size={34} />
          </div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
