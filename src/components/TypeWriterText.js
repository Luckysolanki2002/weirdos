import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .text-1 {
    color: red
  }

  .text-2 {
    color: blue;
  }

  .text-3 {
    color: orange;
  }
`;

const Subtitle = styled.h3`
align-self: flex-start;
font-size: ${props => props.theme.fontlg};
color: ${props => `rgba(${props.theme.textRgba}, 0.5)`};
font-weight: 600;
margin-bottom: 1rem;
`

const ButtonContainer = styled.div`
align-self: flex-start;
`

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discover A New Era Of Cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1">NFTs.</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-2">Collectible Items.</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-3">Ape Killers!</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <Subtitle>Bored Of Apes? Try Something New.</Subtitle>
      <ButtonContainer>
      <Button text="Explore" link="#about" target="_blank"/>
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
