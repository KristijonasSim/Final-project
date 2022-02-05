import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { SliderImages } from '../../Sliderimages';
import styled from "styled-components";

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block'
})

const ImgContainer = styled('div')({
  width: 'auto',
  height: '75vh',
})


const Slideris = () => {

  return (
    <Carousel
    autoPlay="false"
    indicatorContainerProps={{
      style: {
        position: 'absolute',
        bottom: 10,
        zIndex: 5,
      },
    }}
  >
      {SliderImages.map((item) => (
        <ImgContainer key={item.id}>
            <Image  src={item.img}></Image>
            
        </ImgContainer>

          
      ))}
      </Carousel>
  )
}

export default Slideris;
