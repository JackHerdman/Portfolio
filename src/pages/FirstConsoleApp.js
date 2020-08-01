import React from 'react';
import { Container } from 'react-bootstrap';

export default function FirstConsoleApp() {

    return (
        <div className="bg-dark vh-100" style={{ marginTop: "69px" }}>
            <Container className="d-flex flex-column align-items-center justify-content-center">
            <h3 className="py-2 px-5 mb-0 text-light">First Ever Console App</h3>
                    <div className="py-2 px-2 mb-3 mt-0 text-light">This is a console app we created after our first week of learning Javascript. We had to include what we had learnt throughout the week and incorporate it into a boiler plate that was provided to us. This included Functions, Arrays, Loops, Operators and String Extensions.<br/><br/>I have made a Running Carnival results search. By entering a "runner" and a "race" it will tell you the outcome of the runner in that particular race.</div>
                    <iframe title="firstconsoleapp" height="590px" width="100%" src="https://repl.it/@jackhtafe/ConsoleApp?lite=true" scrolling="no" outputonly="1" frameBorder="no" allowtransparency="true" allowFullScreen={true} sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
            </Container>
        </div>
    )
}