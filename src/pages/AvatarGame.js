import React from 'react';
import { Container } from 'react-bootstrap';

export default function AvatarGame() {

    return (
        <div className="bg-dark vh-100" style={{ marginTop: "69px" }}>
            <Container>
                <h3 className="py-2 px-5 mb-0 text-light">Avatar Match Game</h3>
                <div className="py-2 px-2 mb-3 mt-0 text-light">I am incredibly proud of this game! It is a part of our first HTML website project. The design is inspired by the Pathfinder quest in Destiny 2 and skinned with the 4 nations from the tv show Avatar: The Last Airbender. The project works with javascript controlling elements by ID and using onclick events to change their source. This was very difficult work that i had the help of both the Tafe teach and Trent on but majority of the code was my work.<br /><br />On load, the page will generate  the name one of four random nations in the Avatar World. When you click on an image, it will change all images in the same row and column. Your goal is to get all 9 images to match the displayed nation.</div>
                <iframe title="matchgame" height="500px" width="500px" src="https://matchgame.jackhtafe.repl.co/" scrolling="no" frameBorder="no" allowtransparency="true" allowFullScreen={true} sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
                <div><a href="https://repl.it/@jackhtafe/MatchGame" className="text-light">view code on Repl.it</a></div>

            </Container>
        </div>
    )
}