import React from "react"
import navbarCSS from "./navbar.module.scss"

export default function Navbar() {
    return (
        <div className={navbarCSS.container}>
            <ul>
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </div>
    )
}
