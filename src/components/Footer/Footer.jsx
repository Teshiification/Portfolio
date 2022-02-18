import React from 'react';

import {Container, ContainerItem, P, A, SocialIcons} from './FooterStyles';
import {SocialMediaData} from '../../constants/socialmedia';
const Footer = () => {
    return (
        <>
            <Container>
                <ContainerItem>
                    <P>Portfolio</P>
                    <P>©Danny Sinicco</P>                     
                </ContainerItem>
                <ContainerItem>
                    <P>- Links -</P>
                    <A href="#">Impressum</A><br/>
                    <A href="#">Datenschutz</A>
                </ContainerItem>
                <ContainerItem>
                {SocialMediaData.map((data)=>(
                        <SocialIcons href={data.url}>
                            {data.icon}
                        </SocialIcons>
                    ))}
                </ContainerItem>    
            </Container>
        </>
    )
}

export default Footer;
