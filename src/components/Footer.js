// Footer.js
import React from 'react';
import { FooterContainer, FooterText, FooterLink } from './FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Powered by{" "}
        <FooterLink href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          TMDb{" "}
        </FooterLink>
      </FooterText>
      <FooterText>
        Made by{" "}
        <FooterLink href="https://github.com/leobvi" target="_blank" rel="noreferrer">
          Leandro B
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;