import type { TeamMember } from "../../data/site";

type TeamGridProps = {
  members: TeamMember[];
};

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="team-grid">
      {members.map((member, index) => (
        <article className="team-card" key={member.name}>
          <div className="team-card__photo">
            <img src={member.image} alt={`Фото: ${member.name}`} />
          </div>
          <div className="team-card__body">
            <span className="team-card__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="team-card__role">{member.role}</p>
            <h3>{member.name}</h3>
            <p className="team-card__description">{member.responsibility}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
