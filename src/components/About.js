import React from 'react';
import "./About.css"
import github from "../img/github-dark.png"
import linkedin from "../img/linkedin-dark.png"
import { Image } from "react-bootstrap"

export default function About() {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center main-bg">
            <div className="py-5 px-5 text-dark" style={{ backgroundColor: `rgba(${255}, ${255}, ${255}, ${0.8})` }}>
                <p style={{ textTransform: "uppercase", letterSpacing: "40px", fontWeight: "500", lineHeight: "1.2", fontSize: "40px" }}>Jack Herdman</p><br />
                <a href="https://github.com/jackherdmantafe"><Image className="m-2" src={github} width="40px" /></a>
                <a href="www.linkedin.com/in/jack-h-900979143"><Image className="m-2" src={linkedin} width="40px" /></a>
            </div>
        </div>
    )
}