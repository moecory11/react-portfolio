import React from "react";
import "./style.css";
import img1 from "../images/mountain border.jpg";


function Footer() {
  return (
    <div className="containers">
      <div className="image-stack-1">
        <div className="image-stack__item--bottom">
          <img src={img1} alt=""></img>
        </div>
      </div>
     
    </div>
  );
}

export default Footer;