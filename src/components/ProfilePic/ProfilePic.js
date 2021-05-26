import React from "react"
import img2 from "../images/Profile Picture.PNG";
import "./style.css";

function ProfilePic(){

    return(
        <div className="image-top">
        <img className="img-2" src={img2} alt=""></img>
      </div>
    )
}

export default ProfilePic