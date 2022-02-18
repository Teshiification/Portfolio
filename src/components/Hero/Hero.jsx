import React from 'react';

import {H1, H2, Section} from '../../themes/global';
import {HeroImg, HeroText} from './HeroStyles';
import {InfoData} from '../../constants/info'; 

const Hero = () => {
    return (
        <>
    <HeroText style={{zindex:"-99"}}>
        {InfoData.map(({title, phrase})=>(
            <>
                <H1>{title}</H1>  
                <H2>{phrase}</H2> 
            </>
        ))}   
        </HeroText>  
    <HeroImg style={{zindex:"-999"}}/>
    </>
    )
}

export default Hero;
