import {Col, Container, Row} from "react-bootstrap";
import Profile from "../components/Profile";
import About from "../components/About";


const Home = ({BasicInfo}) => {
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <Row>
            <Col md={4} xl={4} sm={12}>
              <Profile data={BasicInfo}/>
            </Col>
            <Col md={8} xl={8} sm={12}>
              <About data={BasicInfo}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
