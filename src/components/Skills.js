import React from 'react';
import "./Skills.css"

export default function Skills() {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center skills-bg">
            <div className="py-5 px-5 text-dark" style={{ backgroundColor: `rgba(${255}, ${255}, ${255}, ${0.8})` }}>
                <div style={{ textTransform: "uppercase", letterSpacing: "30px", fontWeight: "500", lineHeight: "1.2", fontSize: "40px" }}>Skills</div><br />
                <div className="d-flex flex-row justify-content-center">
                    <div>
                        <h4>Javascript</h4>
                            <p>Data Types, Variables and Statements<br />
                            Arrays and Loops<br />
                            Objects and Functions<br />
                            Logical Operators and Callbacks<br />
                            String Extensions and Regular Expressions<br />
                            Switches and Classes<br />
                            Inheritance, Hoisting and Scope<br />
                            Default Values, Arrow Functions, Exceptions and Ternary Operators<br />
                            Files and JSON Files<br />
                            API's, Promises
                            </p>
                    </div>
                    <div>
                        <h4>Node.js</h4>
                            <p>NodeJS<br />
                            Testing & Test Driven Development<br />
                            Introduction to HTTP, REST APIs and Postman</p>
                        <h4>HTML, CSS</h4>
                            <p>HTML Elements<br />
                            HTML Attributes<br />
                            HTML Events<br />
                            CSS Selectors<br />
                            CSS Properties<br />
                            CSS Layout</p>
                    </div>
                    <div>
                        <h4>Full Stack React & Bootstrap</h4>
                            <p>Express.js<br />
                            Node-Persist<br />
                            React Routing<br />
                            Bootstrap implementation</p>
                        <h4>Agile Development</h4>
                            <p>Traditional Waterfall vs Agile projects<br />
                            SCRUM - agile framework<br />
                            User Stories</p>
                    </div>
                </div>
            </div>
        </div>
    )
}