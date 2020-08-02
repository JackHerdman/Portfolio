import React from 'react';
import "./Home.css"

export default function About() {
    return (
        <section className="vh-50 d-flex justify-content-center align-items-center">
            <div  id="about" style={{ position: "relative", top: "-227px" }}></div>
            <div className="py-5 px-5 text-light" style={{ backgroundColor: `rgba(${52}, ${58}, ${64})` }}>
                <p style={{ fontWeight: "400", lineHeight: "1.2", fontSize: "30px", color: `rgba(${248}, ${249}, ${250})` }}>    
                Hey, my name is Jack! I'm new to coding but so far, am enjoying the challenges of learning new technologies. I have worked at Service NSW for about 4 years starting in the Digital Stores before moving into a centre as a DSR. I'm looking forward to working behind the scenes to help create new online capabilites to help the wider NSW community. I have interests in gaming (mainly PS4), popular culture and reading. I also on occasion take a half decent picture! You can see some of my photos in the gallery.</p>
            </div>
        </section>
    )
}
