import React from "react";
import "./style.css";
import img1 from "../images/mountain border.jpg";


function Border() {
  return (
    <div className="containers">
      <div className="image-stack">
        <div className="image-bottom">
          <img src={img1} alt=""></img>
        </div>
      </div>
     
    </div>
  );
}

export default Border;
