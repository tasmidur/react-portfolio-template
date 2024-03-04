import "../assets/css/technology-skill.css";

function TechnologySkill({technologies}) {
  return (
    <div>
      {
        technologies.map((item, index) => <span className="badge" key={index}>{item}</span>)
      }
    </div>
  );
}

export default TechnologySkill;
