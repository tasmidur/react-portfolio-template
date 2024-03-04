import {Col, Container, Row} from "react-bootstrap";
import {FaAt, FaMapMarkedAlt, FaPhoneAlt} from "react-icons/fa";

const Contact = ({contact}) => {
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <Row>
            <Col md={4} xl={4} sm={12}>
              <h1>Contact</h1>
            </Col>
            <Col md={8} xl={8} sm={12}>
              <div className="experience-card">
                <div className="experience-container">
                  <p><FaAt fill={"#6600FF"}/> {contact.email}</p>
                  <p><FaPhoneAlt fill={"#6600FF"}/> {contact.mobileNumber}</p>
                  <p><FaMapMarkedAlt fill={"#6600FF"}/> {contact.address}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
