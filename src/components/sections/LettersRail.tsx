import { ExternalLink } from "lucide-react";
import { Card } from "../ui/Card";

type Letter = {
  file: string;
  preview: string;
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
          <a
            aria-label={`Открыть благодарственное письмо: ${item.title}`}
            className="letter-card__sheet"
            href={item.file}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt={`Благодарственное письмо от ${item.title}`} loading="lazy" src={item.preview} />
            <span className="letter-card__open">
              Открыть PDF <ExternalLink aria-hidden="true" size={16} />
            </span>
          </a>
          <div className="letter-card__meta">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
