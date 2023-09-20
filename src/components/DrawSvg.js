import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Vector from '../Icons/Vector'

const VectorContainer = styled.div`
position: absolute;
top: 0.5rem;
left: 50%;
transform: translate(-50%);
width: 100%;
height: 100%;
overflow: hidden;
/* border: 1px solid blue; */

svg{
    width: 100%;
    height: 100%;
}
`

const bounce = keyframes`
from { transform: translateX(-50%) scale(0.5); }
to { transform: translateX(-50%) scale(1); }
`

const Ball = styled.div`
position: absolute;
width: 2rem;
height: 2rem;
top: -0.5rem;
left: 50%;
transform: translateX(-50%);
background-color: ${props => props.theme.text};
border-radius: 50%;
animation: ${bounce} 1s ease infinite alternate;
`

const DrawSvg = () => {
  return (
    <>
    <Ball/>
    <VectorContainer>
    <Vector/>
    </VectorContainer>
    </>
  )
}

export default DrawSvg