import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, styled } from '@mui/material';
import { SliderImages } from '../../Sliderimages';

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ImgContainer = styled(Box)({
  width: '100%',
  height: '100%',
  maxHeight: '75vh',

});

const Slideris = () => (
  <Carousel
    sx={{ marginTop: '100px' }}
    interval="7000"
    indicators="false"
  >
    {SliderImages.map((item) => (
      <ImgContainer key={item.id}>
        <Image src={item.img} />
      </ImgContainer>

    ))}
  </Carousel>
);

export default Slideris;
