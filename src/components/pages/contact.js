import React from "react"
import contactCSS from "./contact.module.scss"

export default function Contact() {
    return (
        <div id="contact" className={contactCSS.container}>
            <h1>Contact me</h1>
            <p></p>
            <form className={contactCSS.form}>
                <div className={contactCSS.upper}>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                </div>
                <input type="text" name="subject" placeholder="Subject"/>
                <textarea placeholder="Message"></textarea>
                <input type="submit" rows="10" text="Send" />         
            </form>
        </div>
    )
}