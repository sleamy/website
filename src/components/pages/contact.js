import React from "react"
import contactCSS from "./contact.module.scss"

export default function Contact() {
    return (
        <div id="contact" className={contactCSS.container}>
            <h1>Contact me</h1>
            <p></p>
            <form className={contactCSS.form}>
                <div className={contactCSS.upper}>
                    <label for="name"></label><input type="text" name="name" placeholder="Name"/>
                    <label for="email"></label><input type="email" name="email" placeholder="Email"/>
                </div>
                <label for="subject"></label><input type="text" name="subject" placeholder="Subject"/>
                <textarea rows="10" placeholder="Message"></textarea>
                <label for="submit"></label><input type="submit" name="submit" text="Send"/>         
            </form>
        </div>
    )
}