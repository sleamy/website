import React from "react"
import { Component } from "react"
import navbarCSS from "./navbar.module.scss"
import { Link, animateScroll as scroll } from "react-scroll"


class Navbar extends Component {

    render() {
        return (
            <div className={navbarCSS.container}>
                <ul>
                <li><Link to="home" smooth duration={500}>Home</Link></li>
                <li><Link to="about" smooth duration={500}>About</Link></li>
                <li><Link to="projects" smooth duration={500}>Projects</Link></li>
                <li><Link to="contact" smooth duration={500}>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;
