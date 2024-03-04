import {Col, Row} from "react-bootstrap";
import {FaGraduationCap} from "react-icons/fa";
import TechnologySkill from "./TechnologySkill";

function About({data}) {
  return (
    <>
      <Row>
        <Col>
          <div className="about-div">
            <div className="mt-1">
              <div dangerouslySetInnerHTML={{__html: data.aboutMe.description}}/>
            </div>
          </div>
        </Col>
        <hr/>
        <Col md={6} lg={6} sm={12}>
          <h3>Interests</h3>
          <ul>
            {
              data.interest.map((item, index) =>
                <li key={index}>{item}</li>
              )
            }
          </ul>
        </Col>
        <Col md={6} lg={6} sm={12}>
          <h3>Education</h3>
          <Row>
            {data.academic.map((item, index) =>
              <div key={index} className="col-12">
                <Row>
                  <Col md={1} lg={1} sm={1}>
                    <FaGraduationCap size={25}/>
                  </Col>
                  <Col md={11} lg={11} sm={11}>
                    {item.career}, {item.passingYear}<br/>
                    {item.institution}
                  </Col>
                </Row>
              </div>
            )}
          </Row>
        </Col>
        <hr/>
        <Row>
          <Col md={6} lg={6} sm={12}>
            <h3>Technologies</h3>
            <TechnologySkill technologies={data.skills.technicalSkills}/>
          </Col>
          <Col md={6} lg={6} sm={12}>
            <h3>SoftSkills</h3>
            <TechnologySkill technologies={data.skills.softSkills}/>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default About;
