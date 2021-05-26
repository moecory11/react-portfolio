import React from "react";
import Border from "../components/Border/Border";
import Details from "../components//Details/Details";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import AboutPic from "../components/AboutPic/AboutPic";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

function Projects() {
  return (
    <div>
      <NavBar />
      <Border />
      <br></br>
      <Row>
        
          <AboutPic />
        
        <Col>
          <Details />
        </Col>
      </Row>

      <br></br>
      <Footer />
    </div>
  );
}
export default Projects;
