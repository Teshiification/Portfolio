import React from 'react';

import './HeaderStyles';
import {H5,A5} from '../../themes/global';
import {DivLeft,DivCenter,DivRight, Container, SocialIcons,NavList} from './HeaderStyles';
import {SocialMediaData} from '../../constants/socialmedia';
import {InfoData} from '../../constants/info'; 
import {AiFillFire} from 'react-icons/ai';

const Header = () => {
    return (
        <>
        <Container>
            <DivLeft>
                <SocialIcons href="./">
                    <AiFillFire size="2rem" />
                    </SocialIcons>
                {InfoData.map(({forname, surname})=>(
                    <H5>{forname} {surname}</H5>                
                ))}
            </DivLeft>
            <DivCenter>
                <NavList>
                    <A5 href="#projects">Projekte</A5>
                    <A5 href="#technologies">Skils</A5>
                    <A5 href="#timeline">Timeline</A5>
                    <A5 href="#acomplishments">Acomplishments</A5>
                    <A5 href="#contact">Kontakt</A5>
                </NavList>
            </DivCenter>
            <DivRight>
                {SocialMediaData.map(({url, icon})=>(
                    <SocialIcons href={url}>
                        {icon}
                    </SocialIcons>
                ))}
            </DivRight>
        </Container>
        </>
    )
}

export default Header;
