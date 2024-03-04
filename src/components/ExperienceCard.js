import {FaCalendarAlt} from "react-icons/fa";

const ExperienceCard = ({experience, index}) => {
  return (
    <div className="experience-card" key={index}>
      <div className="experience-container">
        <h4><b>{experience.title}</b></h4>
        <p>{experience.company}</p>
        <p><FaCalendarAlt/> {experience.period}</p>
        <ul>
          {experience.description.map((item, index) =>
            <li key={index}>
              {item}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
export default ExperienceCard;
