import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import img1 from "../assets/Nfts/bighead.svg";
import img2 from "../assets/Nfts/bighead-1.svg";
import img3 from "../assets/Nfts/bighead-2.svg";
import img4 from "../assets/Nfts/bighead-3.svg";
import img5 from "../assets/Nfts/bighead-4.svg";
import img6 from "../assets/Nfts/bighead-5.svg";
import Button from "./Button";
import { dark } from "../styles/Themes";
import Logo from "./Logo";
import LinkedIn from "../Icons/LinkedIn";
import Github from "../Icons/Github";
import { NavLink } from "react-router-dom";
import Twitter from "../Icons/Twitter";
import Facebook from "../Icons/Facebook";

const Section = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.text};
  z-index: 11;
  position: relative;
  /* backdrop-filter: blur(5px); */
  display: flex;
  flex-direction: column;
`;

const BackgroundImage = styled.div`
  width: 100vw;
  height: 65vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => `rgba(${props.theme.text},0.2)`};

  img {
    width: 25vw;
    height: 40vh;
  }
`;

const UpperContainer = styled.div`
  width: 100%;
  height: 65vh;
  position: absolute;
  /* background-color: rgba(253,240,228,0.4); */
  top: 0;
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 600;
`;

const LowerContainer = styled.div`
  width: 100vw;
  height: 35vh;
  background-color: ${(props) => props.theme.body};
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* background-color: rgba(253,240,228,0.8); */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
`;

const FirstContainer = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Details = styled.div`
  /* border: 1px solid red; */
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10%;
`;

const UpperSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* hr {
    width: 90%;
    height: 1px;
    background-color: ${(props) => props.theme.text};
  } */
`;

const SvgContainer = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  /* justify-content: center; */
  /* align-items: flex-end; */
  /* border: 1px solid green; */
  margin-top: 4px;
  margin-left: 7rem;

  svg {
    transform: scale(1);
    transition: all 0.1s linear;
    padding: 2px 4px;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

const Menu = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  align-self: flex-start;
  /* border: 2px solid purple; */
`;

const MenuItem = styled.li`
  width: fit-content;
  margin: 0.4rem 0rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  list-style: none;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Partition = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;

  hr {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.text};
  }
`;

const LastContainer = styled.div`
/* border: 1px solid red; */
width: 100%;
margin: 1rem auto;
display: flex;
justify-content: center;
align-items: center;
font-size: ${props => props.theme.fontlg};

.link{
  margin: 0.1rem 0.2rem;
  color: ${props => props.theme.text};
  font-weight: 600;
  /* text-decoration: underline; */

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
}
`


const Footer = () => {

  const scrollTo = (id) => {

    let element = document.getElementById(id)

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <Section>
      <BackgroundImage>
        <img src={img1} alt="img" />
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
        <img src={img4} alt="img" />
        <img src={img5} alt="img" />
        <img src={img6} alt="img" />
      </BackgroundImage>
      <UpperContainer>
        <h1>Join us now</h1>
        <ThemeProvider theme={dark}>
          <Button text="Join" link="/" />
        </ThemeProvider>
      </UpperContainer>
      <LowerContainer>
        <FirstContainer>
          <Details>
            <UpperSection>
              <Logo />
              &nbsp;
            </UpperSection>
            <SvgContainer>
              <NavLink to="//github.com/Garvit1809" target="_blank">
                <Github />
              </NavLink>
              <NavLink
                to="//www.linkedin.com/in/garvit-varshney-a35055220/"
                target="_blank"
              >
                <LinkedIn />
              </NavLink>
              <NavLink to="//twitter.com/20elb179" target="_blank">
                <Twitter />
              </NavLink>
              <NavLink to="/">
                <Facebook />
              </NavLink>
            </SvgContainer>
          </Details>
          <Box>
            <Menu>
              <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
              <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
              <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
            </Menu>
            <Menu>
              <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
              <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
              <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
            </Menu>
          </Box>
        </FirstContainer>
        <Partition>
          <hr />
        </Partition>
        <LastContainer>
        Made with ♥ by 
        <NavLink to="//garvits-portfolio.netlify.app/" target="_blank" className="link">
        Garvit
        </NavLink>
        </LastContainer>
      </LowerContainer>
    </Section>
  );
};

export default Footer;
