import React, { useState } from "react";
import styled from 'styled-components'
import {Minus} from '../Icons/Minus'
import {Plus} from '../Icons/Plus'

const Container = styled.div`
cursor: pointer;
display: flex;
flex-direction: column;
padding: 1rem 0.5rem;
border-bottom: 1px solid ${props => props.theme.carouseColor};
margin: 3rem 0;
`

const Title = styled.div`
font-size: ${props => props.theme.fontsm};
display: flex;
justify-content: space-between;
align-items: center;
`

const Reveal = styled.div`
display: ${props => props.clicked ? 'block' : 'none'};
margin-top: 1rem;
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
font-size: ${props => props.theme.fontsm};
font-weight: 300;
line-height: 1.1rem;
`

const Name = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Indicator = styled.div`
display: flex;
justify-content: center;
align-items: center;

svg{
  width: 1rem;
  height: 1rem;
  fill: ${props => props.theme.carouseColor};
}
`

const Accordion = ({ title, children }) => {
    const [collapse, setCollapse] = useState(false)
  return (
    <Container onClick={() => setCollapse(!collapse)}>
    <Name>
    <Title>{title}</Title>
    {
      collapse ? 
      <Indicator><Minus/></Indicator> : <Indicator><Plus/></Indicator>
    }
    </Name>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
