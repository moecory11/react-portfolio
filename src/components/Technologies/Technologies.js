import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import img from "../images/html5.png";
import img2 from "../images/css3.png";
import img3 from "../images/github.png";
import img4 from "../images/visualstudio.png";
import img5 from "../images/express.png";
import img6 from "../images/slack.png";
import img7 from "../images/sequelize.png";
import img8 from "../images/handlebars.png";
import img9 from "../images/mysql.png";
import img10 from "../images/javascript.png";
import img11 from "../images/node-js.png";
import img12 from "../images/jquery.png";
import img13 from "../images/mongodb.png";
import img14 from "../images/react.png";
import img15 from "../images/bootstrap.png";
import img16 from "../images/linkedin.png";
import img17 from "../images/gitlab.png";
import img18 from "../images/chrome.png";
import img19 from "../images/git.png";
import img20 from "../images/heroku.png";
import img21 from "../images/npm.png";
import "./style.css";

function Technologies() {
  return (
    <div className="styleDiv">
      <h2 className="tech-title">Technologies:</h2>

      <Row>
        <Col>
          <img className="img-tech" src={img21} alt="HTML"></img>
        </Col>
        <Col>
          <img className="img-tech" src={img} alt="HTML"></img>
        </Col>
        <Col>
          <img className="img-tech" src={img2} alt="CSS"></img>
        </Col>
        <Col>
          <img className="img-tech" src={img3} alt="JavaScript"></img>
        </Col>
        <Col>
          <img src={img4} alt="jQuery"></img>
        </Col>
        <Col>
          <img className="img-tech" src={img5} alt="Node.js"></img>
        </Col>
        <Col>
          <img className="img-tech" src={img6} alt="React"></img>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="img-tech" src={img7} alt="MySql"></img>
        </Col>
        <Col>
          <img className= "img-tech" src={img8} alt="Mongoose"></img>
        </Col>
        <Col>
          <img className= "img-tech" src={img9} alt="Sequelize"></img>
        </Col>
        <Col>
          <img className= "img-tech" src={img10} alt="Visual Studio Code"></img>
        </Col>
        <Col>
          <img className= "img-tech" src={img11} alt="Slack"></img>
        </Col>
        <Col>
          <img className= "img-tech" src={img12} alt="GitHub"></img>
        </Col>
        <Col>
          <img className= "img-tech" src={img13} alt="Express"></img>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className= "img-tech" src={img14} alt="Handlebars"></img>
        </Col>
        <Col>
          <img className= "img-tech" src={img15} alt="Handlebars"></img>
        </Col>
        <Col>
          <img className= "img-tech" src={img16} alt="Slack"></img>
        </Col>
        <Col>
          <img className= "img-tech" src={img17} alt="GitHub"></img>
        </Col>
        <Col>
          <img className= "img-tech" src={img18} alt="Express"></img>
        </Col>
        <Col>
          <img className= "img-tech" src={img19} alt="Handlebars"></img>
        </Col>
        <Col>
          <img className= "img-tech" src={img20} alt="Handlebars"></img>
        </Col>
      </Row>
    </div>
  );
}

export default Technologies;
