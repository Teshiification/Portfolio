import React from 'react';

import FadeInSection from '../animations/FadeInSection';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/Timeline/Timeline';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
    <>
    <Header/>
        <FadeInSection>
            
        </FadeInSection>
        <FadeInSection>
            <Hero/>
        </FadeInSection>
        <FadeInSection>
            <Projects/>
        </FadeInSection>
        <FadeInSection>
            <Technologies />
        </FadeInSection>
        <FadeInSection>
            <Timeline />
        </FadeInSection>
        <FadeInSection>
            <Acomplishments />
        </FadeInSection>    
        <FadeInSection>
            <Footer/>    
        </FadeInSection>
    </>    
    )
}

export default Home;
