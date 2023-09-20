import React from "react";
import styled from "styled-components";

import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img8 from "../../assets/Nfts/bighead-7.svg";
import img9 from "../../assets/Nfts/bighead-8.svg";
import ConfettiComp from "../Confetti";

const Section = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 0.4rem solid ${(props) => props.theme.text};
  width: fit-content;
`;

const Container = styled.div`
  width: 75%;
  /* height: auto; */
  margin: 2rem auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  margin: 2rem 1rem;
  border-radius: 20px;
  padding: 1rem;

  z-index: 5;
  backdrop-filter: blur(4px);
`;

const ImageContainer = styled.div`
  width: 15rem;
  /* margin: 1rem 1rem; */
  background-color: ${(props) => props.theme.carouseColor};
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 20px;

  img {
    width: 100%;
    height: auto;
    transform: scale(1);
    transition: all 0.2s linear;

    &:hover {
      transform: translateY(-10%) scale(1.2);
    }
  }
`;

const Name = styled.div`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const Position = styled.div`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.2rem;
  color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <>
      <Section id="team">
        <ConfettiComp />
        <Title>Team</Title>
        <Container>
          <MemberComponent img={img1} name="Monkey D Luffy" position="Admin" />
          <MemberComponent img={img2} name="Naruto Uzumaki" position="Hokage" />
          <MemberComponent
            img={img3}
            name="Shunsui Kyōraku"
            position="Head Captain"
          />
          <MemberComponent
            img={img4}
            name="Ging Freecs"
            position="Daddy Gon..e"
          />
          <MemberComponent img={img5} name="Yami Sukehiro" position="Head" />
          <MemberComponent img={img6} name="Lorem ipsum" position="Admin" />
          <MemberComponent img={img7} name="Monkey D Luffy" position="Admin" />
          <MemberComponent img={img8} name="Monkey D Luffy" position="Admin" />
          <MemberComponent img={img9} name="Monkey D Luffy" position="Admin" />
        </Container>
      </Section>
    </>
  );
};

export default Team;
