import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck, DiReact } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: '20px'}}>
          <DiReact size ="3rem"/> <Span>Danny Sinicco</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projekte</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologien</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Über mich</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Teshiification">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/dannysini">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
    </Container>
);

export default Header;
