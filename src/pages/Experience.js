import {Col, Container, Row} from "react-bootstrap";
import {ExperienceSchema} from "../data/ExperienceSchema";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <Row>
            <Col md={4} xl={4} sm={12}>
              <h1>Experiences</h1>
            </Col>
            <Col md={8} xl={8} sm={12}>
              {ExperienceSchema.map((item, index) =>
                <ExperienceCard experience={item} index={index}/>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Experience
