import React from "react"
import mainCSS from "./main.module.scss"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaFile } from "@react-icons/all-files/fa/FaFile"
import { FaCaretDown } from "@react-icons/all-files/fa/FaCaretDown"
import Resume from "../../../static/documents/SeanLeamy_CV.pdf"
import { Link, animateScroll as scroll } from "react-scroll"

export default function Main() {
  return (
    <div id="home" className={mainCSS.container}>
      <div className={mainCSS.content}>
        <h1>Sean Leamy</h1>
        <h3>Software Developer</h3>
        <ul>
          <a
            href="http://www.github.com/Sleamy"
            target="_blank"
            rel="noreferrer"
          >
            <li className={mainCSS.iconContainer}>
              <FaGithub className={mainCSS.icon}></FaGithub>
              <h6>Github</h6>
            </li>
          </a>
          <a
            href="https://au.linkedin.com/in/sean-leamy-30619978"
            target="_blank"
            rel="noreferrer"
          >
            <li className={mainCSS.iconContainer}>
              <FaLinkedinIn className={mainCSS.icon}></FaLinkedinIn>
              <h6>LinkedIn</h6>
            </li>
          </a>
          <a href={Resume} target="_blank" rel="noreferrer">
            <li className={mainCSS.iconContainer}>
              <FaFile className={mainCSS.icon}></FaFile>
              <h6>Resumé</h6>
            </li>
          </a>
        </ul>
      </div>
      <Link to="about" smooth duration={500} className={mainCSS.button}>
        <FaCaretDown aria-label="scroll to next section"></FaCaretDown>
      </Link>
    </div>
  )
}
