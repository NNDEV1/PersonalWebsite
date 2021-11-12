import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { BiAtom, BiCodeAlt} from 'react-icons/bi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <BiCodeAlt size="3rem" /> <Span> Nalin's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/NNDEV1">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/nalin-nagar">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://nalinnagar1.medium.com">
        <AiFillMediumCircle size="3rem"/>
      </SocialIcons>
        
    </Div3>
  </Container>
);

export default Header;
