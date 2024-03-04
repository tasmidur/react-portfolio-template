import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import {ProjectSchema} from "../data/ProjectSchema";

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <Row>
            <Col md={4} xl={4} sm={12}>
              <h1>Top Projects</h1>
            </Col>
            <Col md={8} xl={8} sm={12}>
              {ProjectSchema.map((item, index) =>
                <ProjectCard project={item} index={index}/>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
