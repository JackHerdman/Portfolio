import React from 'react';
import "./Portrait.css"
import { Image } from "react-bootstrap"
import portrait from "../img/portrait-bw.png"

export default function Portrait() {
    return (
        <div id="portrait" className="vh-100 d-flex justify-content-center align-items-center portrait-bg">
            <div className="py-5 px-5 text-dark" style={{ backgroundColor: `rgba(${255}, ${255}, ${255}, ${0.8})` }}>
            <Image src={portrait} width = "20%" height = "auto" roundedCircle alt="self portrait"/>
            </div>
        </div>
    )
}