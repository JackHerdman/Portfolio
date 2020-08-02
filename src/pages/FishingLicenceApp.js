import React from 'react';
import { Container } from 'react-bootstrap';
import searchCode from '../img/fishing-search-code.PNG';
import fishingList from '../img/fishing-list.png';
import fishingDelete from '../img/fishing-confirm-delete.png';

export default function FishingLicenceApp() {

    return (
        <div className="bg-dark" style={{ marginTop: "69px" }}>
            <Container className="d-flex flex-column align-items-center justify-content-center">
                <h3 className="py-2 px-5 mb-0 text-light">Second React Site - Fishing Licences</h3>
                <div className="py-2 px-5 m-3 text-light">This was our second React site which was another transaction from Service NSW which we were going to make into a full stack website that will be able to Create, Read, Update and Delete data from persistant storage using Node Persist. During this week we learnt how to use Node Persist and we also were taught the basics of Bootstrap. We started with our server side and set out all of our basic requests. I am especially proud of the search function which was tested in postman. It allows for a broad search into nested data. There was so much to learn this week and so much to try and take on board and comprehend. Trying to get one thing working before moving onto the next means I wasn't able to implement any of the CRUD except Read. Time was a major challenge this week. I was able to understand the concepts and implement them to full and complete success in our major project.</div>
                <img src={searchCode} alt="sample of get request for search box"/>
                <div className="py-2 px-5 m-3 text-light">This was our first foray into using bootstrap and bootstrap-react. I learnt general styling and how bootstrap implements flex boxes. I like how I got the confirm delete page to separate into columns</div>
                <img src={fishingList} width="100%" height="auto" className="m-3" alt="Landing Page listing all fishing licences" />
                <img src={fishingDelete} width="100%" height="auto" className="m-3" alt="confirmation of delete page" />
                <div className="py-2 px-5 m-3 text-light"> As this was our first time learning react and with a client and server side making persistant data requests, our sites were not completed and functional, rather used to give us a step in the door and an idea of how we might create a full stack site. You may wish to view the code using the GitHub link below</div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/JackHerdmanTAFE/FishingLicenceApp" className="text-light">view code on GitHub</a></div>
            </Container>
        </div>
    )
}