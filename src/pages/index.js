import React from "react"
import Navbar from "../components/pages/navbar"
import Main from "../components/pages/main"
import About from "../components/pages/about"
import Projects from "../components/pages/projects"
import Contact from "../components/pages/contact"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div>
      <Helmet htmlAttributes={{
        lang: 'en',
      }}>
        <meta charSet="utf-8" />\
        <meta name="description" content="Sean Leamy's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Sean Leamy</title>
      </Helmet>
      <Navbar></Navbar>
      <Main></Main>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}
