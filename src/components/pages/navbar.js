import React from "react"
import { Component } from "react"
import navbarCSS from "./navbar.module.scss"
import { Link, animateScroll as scroll } from "react-scroll"


class Navbar extends Component {

    render() {
        return (
            <div className={navbarCSS.container}>
                <ul>
                <Link to="home" smooth duration={500}><li>Home</li></Link>
                <Link to="about" smooth duration={500}><li>About</li></Link>
                <Link to="projects" smooth duration={500}><li>Projects</li></Link>
                <Link to="contact" smooth duration={500}><li>Contact</li></Link>
                </ul>
            </div>
        )
    }
}

export default Navbar;
