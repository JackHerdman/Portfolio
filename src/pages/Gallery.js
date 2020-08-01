import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.css'
import charmeleon from "../img/gallery/charmeleon.jpg";
import cheetah from "../img/gallery/cheetah.jpg";
import giraffe from "../img/gallery/giraffe.jpg";
import leopard from "../img/gallery/leopard.jpg";
import lion from "../img/gallery/lion.jpg";
import mongeese from "../img/gallery/mongeese.jpg";
import ngorongoro from "../img/gallery/ngorongoro.jpg";
import rhino from "../img/gallery/rhino.jpg";
import zebras from "../img/gallery/zebras.jpg";
import { Container } from 'react-bootstrap';

export default function Gallery() {

    const images = [
        {
            original: ngorongoro,
            thumbnail: ngorongoro,
        },
        {
            original: charmeleon,
            thumbnail: charmeleon,
        },
        {
            original: cheetah,
            thumbnail: cheetah,
        },
        {
            original: lion,
            thumbnail: lion,
        },
        {
            original: giraffe,
            thumbnail: giraffe,
        },
        {
            original: mongeese,
            thumbnail: mongeese,
        },
        {
            original: leopard,
            thumbnail: leopard,
        },
        {
            original: rhino,
            thumbnail: rhino,
        },
        {
            original: zebras,
            thumbnail: zebras,
        },
    ];


    return (
        <div className="bg-dark vh-100" style={{ marginTop: "69px" }}>
            <Container className ="d-flex" style={{justifyContent:"center", alignItems:"center", paddingTop: "10px" }}>
                <ImageGallery items={images} showPlayButton={false} />
            </Container>
                <section className="d-flex justify-content-center align-items-center" style={{ backgroundColor: `rgba(${248}, ${249}, ${250})` }}>
                    <div className="py-2 px-5 mt-3 text-light" >
                            <p style={{fontWeight: "500", color: `rgba(${52}, ${58}, ${64})`}}>This is some of my photography from when i visited Africa in 2018, I hope you enjoy!</p>
                    </div>
                </section>
        </div>

    )

}