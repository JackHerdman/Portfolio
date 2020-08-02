import React from 'react';
import { Container } from 'react-bootstrap';
import rsaServer from '../img/rsa-server.PNG';
import rsaForm from '../img/rsa-app-form.png';

export default function RSAApp() {

    return (
        <div className="bg-dark" style={{ marginTop: "69px" }}>
            <Container className="d-flex flex-column align-items-center justify-content-center">
                <h3 className="py-2 px-5 mb-0 text-light">First React Site - RSA app</h3>
                <div className="py-2 px-5 m-3 text-light">For our first React site we were given a transaction from Service NSW and asked to create a system to create and store data. As this was our first attempt the functionality is not fully developed. We started with our server side and made a basic get and put request.</div>
                <img src={rsaServer} alt="get and post requests for server"/>
                <div className="py-2 px-5 m-3 text-light">As I was still understanding components I decided to color each different component differently so I had a better idea of how they all work together. Below is an image of the first form I created that can submit data. This data is written to a JSON file so is not persistant but will still be listed in the "view licences" page while the session is active. <br/><br/> This was a very difficult week. From knowing nothing 2 and a half months ago to learning javascript and html to creating React apps is a very steep learning curve. I was struggling with the post request but was very happy when I got it to work. Through sheer brute force changing bits of code and trying again to <i>always</i> forgetting to reset the server and comparing code to my team mates as soon as one of us got something working there was a huge leap between this week and my fishing licence I created the following week.</div>
                <img src={rsaForm} className="m-3" alt="Landing Page listing all fishing licences" />
                <div className="py-2 px-5 m-3 text-light"></div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/JackHerdmanTAFE/RSA-App" className="text-light">view code on GitHub</a></div>
            </Container>
        </div>
    )
}