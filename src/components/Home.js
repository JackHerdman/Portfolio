import React from 'react';
import "./Home.css"
import github from "../img/github-dark.png"
import linkedin from "../img/linkedin-dark.png"
import gallery from "../img/gallery-dark.png"
import { Image } from "react-bootstrap"

export default function Home() {
    return (
        <div id="home" className="vh-100 d-flex justify-content-center align-items-center main-bg">
            <div className="py-5 px-5 text-dark" style={{ backgroundColor: `rgba(${255}, ${255}, ${255}, ${0.8})` }}>
                <p style={{ textTransform: "uppercase", letterSpacing: "40px", fontWeight: "500", lineHeight: "1.2", fontSize: "40px" }}>Jack Herdman</p><br />
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jackherdmantafe"><Image className="m-2" src={github} width="40px" alt="github" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jack-h-900979143/"><Image className="m-2" src={linkedin} width="40px" alt="linkedin" /></a>
                <a href="/gallery"><Image className="m-2" src={gallery} width="40px" height="40px" alt="gallery" /></a>
            </div>
        </div>
    )
}