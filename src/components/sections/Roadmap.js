import React from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";

const Section = styled.div`
  min-height: 200vh;
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
  border-bottom: 0.4rem solid ${props => props.theme.text};
  width: fit-content;
`;

const Container = styled.div`
width: 70%;
height: 200vh;
background-color: ${props => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;
/* border: 1px solid green; */
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

/* border: 1rem solid red; */
`

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */

  &>*:nth-of-type(2n + 1){
      justify-content: start;

      div{
          border-radius: 50px 0 50px 0;
          text-align: right;
      }
      p{
        border-radius: 40px 0 40px 0;
      }
  }

  &>*:nth-of-type(2n){
      justify-content: end;

      div{
          border-radius: 0 50px 0 50px;
          text-align: left;
      }
      p{
        border-radius: 0 40px 0 40px;
      }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid black;
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${props => props.theme.carouseColor};
  padding: 1rem;
  position: relative;
  border: 1px solid black;
`;

const SubTitle = styled.span`
display: block;
font-size: 2em;
text-transform: capitalize;
color: black;
`;

const Text = styled.h3`
display: block;
font-size: 0.875em;
text-transform: capitalize;
color: black;

font-weight: 400;
margin: 0.5rem 0;
`;


const RoadMapItem = ({ title, subtext }) => {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};


const Roadmap = () => {
  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
       <SvgContainer>
         <DrawSvg/>
       </SvgContainer>
       <Items>
        <Item>&nbsp;</Item>
          <RoadMapItem title="Grand Opening" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
          <RoadMapItem title="Great Benefits" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
          <RoadMapItem title="Early Access" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
          <RoadMapItem title="New Merch" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
          <RoadMapItem title="Sponsors & Prizes" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
