import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './AvatarGame.css';





export default function AvatarGame() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "/puzzle.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <div className="bg-dark vh-100" style={{ marginTop: "69px" }}>
            <Container>
                <h3 className="py-2 px-5 mb-0 text-light">Avatar Match Game</h3>
                <div className="py-2 px-2 mb-3 mt-0 text-light">I am incredibly proud of this game! It is a part of our first HTML website project. The design is inspired by the Pathfinder quest in Destiny 2 and skinned with the 4 nations from the tv show Avatar: The Last Airbender. The project works with javascript controlling elements by ID and using onclick events to change their source. This was very difficult work that i had the help of both the Tafe teach and Trent on but majority of the code was my work.<br /><br />On load, the page will generate  the name one of four random nations in the Avatar World. When you click on an image, it will change all images in the same row and column. Your goal is to get all 9 images to match the displayed nation.</div>

                <div className="py-2 px-2 mb-3 mt-0 text-light">The Next Avatar is from the <span id= "nation" style={{fontSize: "larger", textDecoration: "underline"}}></span>. make all elements match.</div>

                <div id="gameSquare">
                    <div id="rowOne">
                        <div className="colourBox">
                            <img id="1" src="/images/fire.png" alt="randomElement" width="130" height="130" />
                            {/* <img id="1" src={process.env.PUBLIC_URL + '/images/fire.png'} alt="randomElement" width="130" height="130" /> */}
                        </div>
                        <div className="colourBox">
                            <img id="2" src="/images/air.png" alt="randomElement" width="130" height="130" />
                        </div>
                        <div className="colourBox">
                            <img id="3" src="/images/fire.png" alt="randomElement" width="130" height="130" />
                        </div>
                    </div>
                    <div id="rowTwo">
                        <div className="colourBox">
                            <img id="4" src="/images/water.png" alt="randomElement" width="130" height="130" />
                        </div>
                        <div className="colourBox">
                            <img id="5" src="/images/air.png" alt="randomElement" width="130" height="130" />
                        </div>
                        <div className="colourBox">
                            <img id="6" src="/images/water.png" alt="randomElement" width="130" height="130" />
                        </div>
                    </div>
                    <div id="rowThree">
                        <div className="colourBox">
                            <img id="7" src="/images/air.png" alt="randomElement" width="130" height="130" />
                        </div>
                        <div className="colourBox">
                            <img id="8" src="/images/earth.png" alt="randomElement" width="130" height="130" />
                        </div>
                        <div className="colourBox">
                            <img id="9" src="/images/air.png" alt="randomElement" width="130" height="130" />
                        </div>
                    </div>
                </div>
                <div>
                <Button className='m-4' variant="light" onClick={() => window.location.reload()}>Try Again</Button>
                </div>
            </Container>
        </div>
    )
}