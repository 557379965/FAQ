import React from "react"
import "./index.css"
import background from '../../assets/backgroundImage.svg'

function Background(){
    return(
        <>
        <div className="background">
                <img src={background}/>
        </div>
        </>
    )
}

export default Background