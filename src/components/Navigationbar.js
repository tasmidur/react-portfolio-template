import {Nav, Navbar, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";
import ResumePdf from "../assets/resume/cv.pdf"

const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="sm"bg="white">
      <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
      <Navbar.Collapse id="navbarScroll" className="justify-content-center">
        <Nav
          activeKey="/"
          navbarScroll
          fixed="top"
        >
          <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
          <NavLink eventKey="2" as={Link} to="/experience">Experience</NavLink>
          <NavLink eventKey="2" as={Link} to="/projects">Projects</NavLink>
          <NavLink eventKey="3" as={Link} to="/contact">Contact</NavLink>
          <NavLink eventKey="3" as={Link} to={{pathname: ResumePdf}} target="_blank" className="btn btn-outline-success btn-sm">Resume</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;
