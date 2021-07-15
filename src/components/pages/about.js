import React from "react"
import Skill from "../skill"
import aboutCSS from "./about.module.scss"
import jsIcon from "../../../static/images/jsIcon.svg"
import reactIcon from "../../../static/images/reactIcon.svg"
import htmlIcon from "../../../static/images/htmlIcon.svg"
import cssIcon from "../../../static/images/cssIcon.svg"
import sqlIcon from "../../../static/images/sqlIcon.svg"
import csharpIcon from "../../../static/images/csharpIcon.svg"
import nodeIcon from "../../../static/images/nodeIcon.svg"
import javaIcon from "../../../static/images/javaIcon.svg"
import mongodbIcon from "../../../static/images/mongodbIcon.svg"
import sassIcon from "../../../static/images/sassIcon.svg"
import pythonIcon from "../../../static/images/pythonIcon.svg"

export default function About() {
    return (
        <div id="about" className={aboutCSS.container}>
            <div className={aboutCSS.content}>
                <div className={aboutCSS.info}>
                    <h1>About Me</h1>
                    <p>I am a recent IT Graduate currently looking for work as a software developer. I have experience
                    working with both front-end and back-end technologies, have great time management skills and am able to
                    work effectively in a team or alone. I am interested in all areas of software development and enjoy working on my own projects in my spare time.</p>
                </div>
                <div className={aboutCSS.skills}>
                    <Skill name="HTML" icon={htmlIcon} ></Skill>
                    <Skill name="CSS" icon={cssIcon} ></Skill>
                    <Skill name="Javascript" icon={jsIcon} ></Skill>
                    <Skill name="SQL" icon={sqlIcon} ></Skill>
                    <Skill name="Node" icon={nodeIcon} ></Skill>
                    <Skill name="React" icon={reactIcon} ></Skill>
                    <Skill name="Sass" icon={sassIcon} ></Skill>
                    <Skill name="MongoDB" icon={mongodbIcon} ></Skill>
                    <Skill name="C#" icon={csharpIcon} ></Skill>
                    <Skill name="Python" icon={pythonIcon} ></Skill>
                    <Skill name="Java" icon={javaIcon} ></Skill>
                </div>
            </div>
        </div>
    )
}
