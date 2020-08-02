import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import CourseOverview from '../components/CourseOverview'
import Portrait from '../components/Portrait'


export default function Landing() {
    return (
        <div>
            <Home />
            <About />
            <Skills />
            <CourseOverview />
            <Portrait />

        </div>
    )
}