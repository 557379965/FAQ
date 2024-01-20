import React from "react"
import "./index.css"
import backgroundImage from '../../assets/backgroundImage.svg'

function BackgroundImage(){
    return(
        <>
        <div className="backgroundImage">
    <img src={backgroundImage}/>
        </div>
        </>
    )
}

export default BackgroundImage