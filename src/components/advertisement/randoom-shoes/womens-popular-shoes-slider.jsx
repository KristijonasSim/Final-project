import React, { useState, useEffect } from 'react';

import APIService from '../../../services/api-service';
import Carousel from "react-elastic-carousel";
// import { styled } from '@mui/material/styles';
import GridPageCard from '../../pages/shoes-page/shoes-page grid-card';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import ButtonMore from '../../buttons/button-more';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';


const WomensPopularShoesSlider = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchedItems();
      setItems(fetchedItems);

    })();
  }, []);

  const breakPoints = [
    { width: 600, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
  ];

  const randomSlice = items.slice(0, 10)

  return (
      <Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', m:3}}>
        <Typography variant='h4' sx={{fontWeight:'bold'}} >Womens most popular</Typography>
        <ButtonMore sx={{px:3}}>More <ArrowRightAltSharpIcon sx={{fontSize: '30px'}}/></ButtonMore>
        </Box>
          <Carousel
          enableAutoPlay='true'
          autoPlaySpeed='7000'
          disableArrowsOnEnd='false'
          breakPoints={breakPoints}
          >
          {randomSlice.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Box sx={{m:1}}>
            <GridPageCard
              key={item.id}
              {...item}
            />
            </Box>   
          ))}
            </Carousel>
      </Box>
    );
  }
  


export default WomensPopularShoesSlider