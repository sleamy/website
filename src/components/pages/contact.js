import React from "react"
import contactCSS from "./contact.module.scss"

export default function Contact() {

    return (
        <div id="contact" className={contactCSS.container}>
            <h1>Contact me</h1>
            <p></p>
            <form className={contactCSS.form} name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className={contactCSS.upper}>
                    <label for="name"></label><input type="text" name="name" id="name" placeholder="Name"/>
                    <label for="email"></label><input type="email" name="email" id="email" placeholder="Email"/>
                </div>
                <label for="subject"></label><input type="text" name="subject" id="subject" placeholder="Subject"/>
                <label for="message"></label><textarea rows="10" name="message" id="message" placeholder="Message"></textarea>
                <label for="submit"></label><input type="submit" name="submit" text="Send"/>         
            </form>
        </div>
    )
}