import React from "react"
import Error404CSS from "./error404.module.scss"

export default function Error404() {
    return (
        <div className={Error404CSS.container}>
            <h1>404</h1>
        </div>
    )
}