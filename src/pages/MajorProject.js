import React from 'react';
import { Container } from 'react-bootstrap';

export default function MajorProject() {

    return (
        <div className="bg-dark vh-100" style={{ marginTop: "69px" }}>
            <Container className="d-flex flex-column align-items-center justify-content-center">
                <h3 className="py-2 px-5 mb-0 text-light">Major Project</h3>
                <div className="py-2 px-5 m-3 text-light"> Our major project contained an individual presentation after a two week SCRUM sprint. The video below is of that presentation which highlights the design decisions, technologies used and challenges faced in developing this project. We met the MVP and implented addition functionality. Unfortunately there was a slight coding error during presentation which resulted in the final "admin" page not working correctly. This was fixed minutes after the presentation and updated for the github link below.</div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/JackHerdmanTAFE/MajorProject" className="text-light">view code on GitHub</a></div>
                <iframe title="majorproject" width="100%" height="550px" src="https://www.youtube.com/embed/xhcSrXALzD8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Container>
        </div>
    )
}