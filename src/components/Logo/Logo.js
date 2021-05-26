import React from 'react'
import img from '../images/Cory Moe Logo.png'
import "./style.css"

function Logo() {

    return(
        <div>
            <img className="logo" src={img} alt=""></img>
        </div>
    )
}

export default Logo