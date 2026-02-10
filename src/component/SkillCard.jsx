

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <h3>{skill.category}</h3>

      <ul>
        {skill.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
