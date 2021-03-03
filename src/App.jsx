import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import AboutSection from './components/About-section/AboutSection';
import Skills from './components/Skills-section/Skills';
import Timeline from './components/Projects-section/Timeline';

const App = () => {
    return (
        <div>
            <Navbar />
            <Showcase />
            <AboutSection />
            <Skills />
            <Timeline />
        </div>
    )
}

export default App;
