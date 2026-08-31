import React from "react";
import styled from "styled-components";
import { LinkedIn } from "@mui/icons-material";
import { Bio } from "../../data/constants";

const FooterContainer = styled.footer`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 76px 24px 34px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: min(820px, 80%);
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.primary + "aa"}, transparent);
    box-shadow: 0 0 18px ${({ theme }) => theme.primary + "55"};
    transform: translateX(-50%);
  }

  @media (max-width: 600px) { padding: 58px 16px 28px; }
`;

const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.primary};
  font-size: clamp(22px, 3vw, 26px);
  font-weight: 800;
  letter-spacing: -0.04em;
  text-decoration: none;
  text-shadow: 0 0 26px ${({ theme }) => theme.primary + "66"};
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover { color: ${({ theme }) => theme.text_primary}; transform: translateY(-2px); }
`;

const Tagline = styled.p`
  margin-top: 11px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  font-weight: 500;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 34px;
  margin-top: 34px;
`;

const NavLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -7px;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background: ${({ theme }) => theme.primary};
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &:hover { color: ${({ theme }) => theme.primary}; }
  &:hover::after { transform: scaleX(1); }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 36px;
`;

const SocialMediaIcon = styled.a`
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.primary + "77"};
  border-radius: 14px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.primary + "18"};
  box-shadow: 0 8px 24px ${({ theme }) => theme.primary + "24"};
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover { transform: translateY(-4px) rotate(-4deg); color: white; background: ${({ theme }) => theme.primary}; }
`;

const Copyright = styled.p`
  width: 100%;
  margin-top: 38px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.11);
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  font-weight: 600;
`;

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Logo href="#About">Lakindu Kualuarachchi</Logo>
      <Tagline>Full Stack Developer · Software Developer · UI/UX Designer</Tagline>
      <Nav aria-label="Footer navigation">
        <NavLink href="#About">About</NavLink>
        <NavLink href="#Skills">Skills</NavLink>
        <NavLink href="#Projects">Projects</NavLink>
        <NavLink href="#Education">Education</NavLink>
      </Nav>
      <SocialMediaIcons>
        <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></SocialMediaIcon>
      </SocialMediaIcons>
      <Copyright>© 2025 Lakindu Kualuarachchi. All rights reserved.</Copyright>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
