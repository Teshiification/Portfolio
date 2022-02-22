import React from 'react';

import {Container, ContainerItemLeft, ContainerItemCenter, ContainerItemRight, P, A, SocialIcons} from './FooterStyles';
import {SocialMediaData} from '../../constants/socialmedia';
const Footer = () => {
    return (
        <>
            <Container>
                <ContainerItemLeft>
                    <P>Portfolio 2022</P>
                    <P>©Danny Sinicco</P> 
                </ContainerItemLeft>

                <ContainerItemLeft>
                    {/*  */}
                </ContainerItemLeft>

                <ContainerItemCenter>
                    <P>- Links -</P>
                    <A href="#">Impressum</A><br/>
                    <A href="#">Datenschutz</A>
                </ContainerItemCenter>

                <ContainerItemRight>
                    {/*  */}
                </ContainerItemRight>
                
                <ContainerItemRight>
                    {SocialMediaData.map((data)=>(
                            <SocialIcons href={data.url}>
                                {data.icon}
                            </SocialIcons>
                        ))}
                </ContainerItemRight>    
            </Container>
        </>
    )
}

export default Footer;
