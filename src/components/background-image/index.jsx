import React from "react"
import "./index.css"
import backgroundImage from '../../assets/backgroundImage.svg'
import boxImage from '../../assets/backgroundBox.svg'

function BackgroundImage(){
    return(
        <>
        <div className="backgroundImage">
    <img src={backgroundImage}/>
    <img src={boxImage} className="boxImage"/>
        </div>
        </>
    )
}

export default BackgroundImage