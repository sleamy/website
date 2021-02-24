import React from "react"
import projectCSS from "./project.module.scss"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt"

export default function Project(props) {

    var tIndex = 0;
    const technologies = []
    const info = []
    
    for(const i of props.info) {
        info.push(<span key={i + props.title}>{i}</span>)
        info.push(<br />)
    }

    for (const t of props.technologies) {
        technologies.push(<img src={t} key={props.title + tIndex}alt="icon" />)
        tIndex = tIndex + 1
    }

    return (
        <div className={projectCSS.projectContainer}>
            <div className={projectCSS.projectInfo}>
                <div className={projectCSS.title}>
                    <h6>{props.title}</h6>
                    {props.githubLink && <a href={props.githubLink} target="_blank" rel="noreferrer"><FaGithub aria-label="Github Link" className={projectCSS.icon}></FaGithub></a>}
                    {props.externalLink && <a href={props.externalLink} target="_blank" rel="noreferrer"><FaExternalLinkAlt aria-label="Visit Website Link" className={projectCSS.icon}></FaExternalLinkAlt></a>}
                </div>
                <p className={projectCSS.description}>{props.description}</p>
                <p>{info}</p>
                <p>Technologies Used</p>
                <div className={projectCSS.technologies}>
                    {technologies}
                </div>
            </div>
            <div className={projectCSS.projectImage}>
                <img src={props.projectImage} alt="typefights screenshot" />
            </div>
        </div>
    )
}