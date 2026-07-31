import type { TeamMember } from "../../data/site";
import { Badge } from "../ui/Badge";

type TeamGridProps = {
  members: TeamMember[];
};

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="team-grid">
      {members.map((member) => (
        <article className="team-card" key={member.name}>
          <div className="team-card__photo">
            <img src={member.image} alt={`Фото: ${member.name}`} />
          </div>
          <div className="team-card__body">
            <h3>{member.name}</h3>
            <p className="team-card__role">{member.responsibility}</p>
            <div style={{ marginTop: 14 }}>
              <Badge>{member.role}</Badge>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
