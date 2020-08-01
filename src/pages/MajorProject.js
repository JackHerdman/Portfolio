import React from 'react';
import { Container } from 'react-bootstrap';

export default function MajorProject() {

    return (
        <div className="bg-dark vh-100" style={{ marginTop: "69px" }}>
            <Container className="d-flex flex-column align-items-center justify-content-center">
                    <div className="py-2 px-5 m-3 text-light">This is a console app we created after our first week of learning Javascript. We had to include what we had learnt throughout the week and incorporate it into a boiler plate that was provided to us. This included Functions, Arrays, Loops, Operators and String Extensions.<br/><br/>I have made a Running Carnival results search. By entering a "runner" and a "race" it will tell you the outcome of the runner in that particular race.</div>
            </Container>
        </div>
    )
}