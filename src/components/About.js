import React from 'react';
import "./Home.css"
import github from "../img/github-dark.png"
import linkedin from "../img/linkedin-dark.png"
import { Image } from "react-bootstrap"

export default function About() {
    return (
        <section className="vh-50 d-flex justify-content-center align-items-center">
            <div className="py-5 px-5 text-light" style={{ backgroundColor: `rgba(${52}, ${58}, ${64})` }}>
                <p style={{ fontWeight: "500", lineHeight: "1.2", fontSize: "40px" }}>
                    
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorem hic aperiam! Libero quia dolore temporibus natus incidunt veritatis, harum aliquam autem unde maxime delectus et distinctio inventore sit totam ipsa magnam dolores eligendi. Nobis quos incidunt magnam accusamus sequi cumque, earum veritatis explicabo sapiente repellendus eius voluptas, voluptate cum.</p><br />

            </div>
        </section>
    )
}