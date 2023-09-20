import React, { useLayoutEffect, useRef } from 'react'
import { useWindowScroll } from 'react-use'
import styled from 'styled-components'

const Up = styled.div`
width: 3rem;
height: 3rem;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
box-sizing: border-box;
margin: 0;
padding: 0;
font-size: ${props => props.theme.fontxl};
position: fixed;
bottom: 1rem;
right: 1rem;

display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
cursor: pointer;
transition: all 0.2s ease;

&:hover{
    transform: scale(1.2);
}

&:active{
    transform: scale(0.9);
}

z-index: 100;
`

const ScrollToTop = () => {

    const ref = useRef(null)
    const {y} = useWindowScroll();

    const scrollTo = () => {

        let element = document.getElementById("navigation")
    
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
    }

    useLayoutEffect(() => {
        if (y > 200) {
            ref.current.style.display = 'flex'
        } else {
            ref.current.style.display = 'none'
        }
    }, [y])

  return (
      <Up ref={ref} onClick={() => scrollTo()}>
      &#x2191;
    </Up>
  )
}

export default ScrollToTop