import React from "react"
import projectsCSS from "./projects.module.scss"
import typefightsImage from "../../../static/images/typefightsImage.png"
import ubetImage from "../../../static/images/ubetImage.png"
import minesweeperImage from "../../../static/images/minesweeperImage.png"
import reactIcon from "../../../static/images/reactIcon.svg"
import nodeIcon from "../../../static/images/nodeIcon.svg"
import cssIcon from "../../../static/images/cssIcon.svg"
import sqlIcon from "../../../static/images/sqlIcon.svg"
import mongodbIcon from "../../../static/images/mongodbIcon.svg"
import jsIcon from "../../../static/images/jsIcon.svg"
import javaIcon from "../../../static/images/javaIcon.svg"

import Project from "../project"

export default function Projects() {
    return (
        <div id="projects" className={projectsCSS.container}>
            <Project 
                title="Typefights"
                githubLink="https://github.com/sleamy/Typefights"
                externalLink="http://typefights.xyz"
                description="Multiplayer typing game"
                info={[
                    "- Fullstack application utilising React + Redux, Nodejs, and Socket.io", 
                    "- Designed and developed front-end client interface",
                    "- Developed backend server using node.js and socket.io for multiplayer functionality",
                    "- Developed Database using Postgresql to store all player information"    
                ]}
                technologies={[reactIcon, nodeIcon, cssIcon, sqlIcon]}
                projectImage={typefightsImage}
                
            ></Project>
            <Project 
                title="UBet Web Scraper"
                githubLink="https://github.com/sleamy/Scraper"
                description="Scrapes data for all Ubet greyhound races"
                info={[
                    "- Developed using Javascript and puppeteer", 
                    "- Designed mongodb database to store information for all races and all greyhound information",    
                ]}
                technologies={[jsIcon, mongodbIcon]}
                projectImage={ubetImage}
                
            ></Project>
            <Project 
                title="Minesweeper"
                githubLink="https://github.com/sleamy/Typefights"
                description="Minesweeper Clone with scaling options"
                info={[
                    "- Minesweeper clone made during semester break at University",
                    "- Developed features allowing game to scaled up to 4x original game size" 
                ]}
                technologies={[javaIcon]}
                projectImage={minesweeperImage}
                
            ></Project>
        </div>
    )
}