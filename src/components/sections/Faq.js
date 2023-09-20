import React from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  /* z-index: -2; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  margin: 1rem auto;
  border-bottom: 0.4rem solid ${(props) => props.theme.body};
  width: fit-content;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  width: 45%;
  height: auto;
  /* border: 2px solid white; */
`;

const Faq = () => {
  return (
    <Section id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
        <Accordion title="WHERE CAN I VIEW MY NFTS?">
        Once minted or bought simply connect to your OpenSea account to view your NFTs.
        </Accordion> 
        <Accordion title="WHAT IS THE METAVERSE?">
        Once minted or bought simply connect to your OpenSea account to view your NFTs.
        </Accordion> 
        <Accordion title="WHY DO WE NEED ROYALTIES?">
        Once minted or bought simply connect to your OpenSea account to view your NFTs.
        </Accordion> 
        </Box>
        <Box>
        <Accordion title="WHERE CAN I VIEW MY NFTS?">
        Once minted or bought simply connect to your OpenSea account to view your NFTs.
        </Accordion> 
        <Accordion title="WHAT IS THE METAVERSE?">
        Once minted or bought simply connect to your OpenSea account to view your NFTs.
        </Accordion> 
        <Accordion title="WHY DO WE NEED ROYALTIES?">
        Once minted or bought simply connect to your OpenSea account to view your NFTs.
        </Accordion> 
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
