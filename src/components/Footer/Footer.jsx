import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';



const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
          Email
          </LinkTitle>
          <LinkItem href="mailto:support@danny-sinicco.de">support@danny-sinicco.de</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>Danny-Gino Sinicco</Slogan>
    </CompanyContainer>
    <SocialIcons href="https://github.com/Teshiification">
      <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://linkedin.com">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.instagram.com/danny_sinicco">
      <AiFillInstagram size="3rem"/>
    </SocialIcons>
  </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
