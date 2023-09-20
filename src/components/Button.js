import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Btn = styled.button`
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
font-size: ${props => props.theme.fontsm};
padding: 0.8rem 2.5rem;
border-radius: 3rem;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 3rem;
    border: 2px solid  ${props => props.theme.text};
    /* background-color: lightblue; */
}

&:hover::after{
  transform: translate(-50%, -50%) scale(1);
  padding: 0.3rem;
}
`

const Button = ({ text, link }) => {
  return (
    <Btn>
    <Link to={link} target="_blank">
    {text}
    </Link>
    </Btn>
  )
}

export default Button