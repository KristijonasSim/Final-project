import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { SliderImages } from '../../Sliderimages';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';


const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})



const ImgContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  maxHeight: '75vh',

}));

const Slideris = () => {

  return (
    <Carousel sx={{marginTop:'100px'}}
    interval="7000"
    indicators="false"
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
