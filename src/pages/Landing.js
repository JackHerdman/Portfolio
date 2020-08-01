import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';


export default function Landing() {
    return (
        <div>
            <Home />
            <About />
            <Skills />
            <About />
            <Home />

        </div>
    )
}