import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import img from "../images/call.png";
import img2 from "../images/linkedin.png";
import img3 from "../images/github.png";
import img4 from "../images/mail.png";
import img5 from "../images/resume.png";
import "./style.css";

function ContactInfo() {
  return (
    <div>
      <div className="styleRow">
          <h2 className="contact-title">Connect</h2>
        <Row>
          <Col>
            <a href="https://github.com/moecory11" target="blank">
              <img src={img3} alt=""></img>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.linkedin.com/in/cory-moe-66530848/"
              target="blank"
            >
              <img src={img2} alt=""></img>
            </a>
          </Col>
          <Col>
            <a href="mailto:moecory11@gmail.com">
              <img src={img4} alt=""></img>
            </a>
          </Col>
          <Col>
            <a
              href="https://1drv.ms/w/s!AhjrVYjz451VhAkImemhgU3Klrte?e=U5lgn9"
              target="blank"
            >
              <img src={img5} alt=""></img>
            </a>
          </Col>
          <Col>
            <a href="tel:425-923-3263">
              <img src={img} alt=""></img>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContactInfo;
