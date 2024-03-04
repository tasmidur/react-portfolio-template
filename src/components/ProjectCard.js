import {FaCalendarAlt} from "react-icons/fa";
const ProjectCard = ({project, index}) => {
  return (
    <div className="experience-card" key={index}>
      <div className="experience-container">
        <h6><b>{project.name} - {project.company}</b></h6>
        <p><FaCalendarAlt/> {project.period}</p>
        <p>Developed Features:</p>
        <ul>
          {project.description.map((item, index) =>
            <li key={index}>
              {item}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
export default ProjectCard;
