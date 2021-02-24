import React from "react"
import skillCSS from "./skill.module.scss"

export default function Skill(props) {
    return (
        <div className={skillCSS.iconContainer}>
            <img src={props.icon} className={skillCSS.icon} alt="{props.name} icon" />
            <h6>{props.name}</h6>
        </div>
    )    
}