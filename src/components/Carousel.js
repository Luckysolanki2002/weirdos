import React from 'react'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, EffectCards, Autoplay, Navigation } from "swiper";

import img1 from '../assets/Nfts/bighead.svg'
import img2 from '../assets/Nfts/bighead-1.svg'
import img3 from '../assets/Nfts/bighead-2.svg'
import img4 from '../assets/Nfts/bighead-3.svg'
import img5 from '../assets/Nfts/bighead-4.svg'
import img6 from '../assets/Nfts/bighead-5.svg'
import img7 from '../assets/Nfts/bighead-6.svg'
import img8 from '../assets/Nfts/bighead-7.svg'
import img9 from '../assets/Nfts/bighead-8.svg'
import img10 from '../assets/Nfts/bighead-9.svg'


const Container = styled.div`
width: 25vw;
height: 75vh;

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouseColor};
    border-radius: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-button-next{
    color: ${props => props.theme.text};
}

.swiper-button-prev{
    color: ${props => props.theme.text};
}
`

const Carousel = () => {
  return (
    <Container>
    <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction: false,
        }}
        pagination={{
            type:'fraction',
        }}
        scrollbar={{
            draggable:true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="nft" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="nft" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="nft" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="nft" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="nft" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="nft" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="nft" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="nft" /></SwiperSlide>
        <SwiperSlide><img src={img9} alt="nft" /></SwiperSlide>
        <SwiperSlide><img src={img10} alt="nft" /></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel