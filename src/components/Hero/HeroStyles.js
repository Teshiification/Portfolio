import styled from 'styled-components';

export const HeroText = styled.p`
    z-index: 999;
    position: absolute;  
    margin-left: 25vw;
    max-width: 50vw;  

    @media only screen and (max-width: 900px){
        padding-top: 10vh;
    }
    
    @media only screen and (min-width: 900px){
        margin-top: 20vh;

    }
`

export const HeroImg = styled.div`
    z-index: -999;
    height: 100%;
    width: 100%;
    opacity: .1;
    margin-top: -15vh; 
    @media only screen and (max-width: 900px){
        // background-image: url(/images/portrait.png);
        // background-repeat: no-repeat;
        // background-size: 100%;
        padding-top: 25rem;
    }

    @media only screen and (min-width: 900px){
        background-image: url(/images/portrait.png);
        background-repeat: no-repeat;
        background-size: 100%;
        padding-top: 70rem;
    }

    // mask-image: -moz-linear-gradient(top, rgba(255,255,255, .25), rgba(255,255,255, 1), rgba(255,255,255, .25));
    // -webkit-mask-image: -webkit-linear-gradient(top, rgba(255,255,255, .0), rgba(255,255,255, .5), rgba(255,255,255, 1), rgba(255,255,255, .5), rgba(255,255,255, .0));
    
`
