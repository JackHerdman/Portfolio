import React from 'react';
import "./Home.css"

export default function CourseOverview() {
    return (
        <section className="vh-50 d-flex justify-content-center align-items-center">
            <div  id="about" style={{ position: "relative", top: "-227px" }}></div>
            <div className="py-5 px-5 text-light" style={{ backgroundColor: `rgba(${52}, ${58}, ${64})` }}>
                <p style={{ fontWeight: "400", lineHeight: "1.2", fontSize: "30px", color: `rgba(${248}, ${249}, ${250})` }}>    
                Three months is not a long time to learn new skills. From not even knowing what a variable is to being able to create a full stack website allowing for public submissions, voting and administrative control over approving and denying submissions is a huge leap. And now being able to show my creative skill (little it may be) in creating this brief portfolio overview of our three month course I feel incredibly proud of where I have come in such a short time.I'm exciting to see where I can go in the future!</p>
            </div>
        </section>
    )
}
