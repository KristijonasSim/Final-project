import React, { useState, useEffect } from 'react';

import APIService from '../../../services/api-service';



import Carousel from "react-elastic-carousel";
// import { styled } from '@mui/material/styles';
import GridPageCard from '../../pages/shoes-page/shoes-page grid-card';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import MainButtonLink  from '../../buttons/main-button-link'
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import routes from '../../../routing/routes';



const MensPopularShoesSlider = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchedItems();
      console.log(fetchedItems)
      setItems(fetchedItems);

    })();
  }, []);

  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
  ];

  const randomSlice = items.slice(0, 10)

  return (
      <Box sx={{m:1}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between',my:3}}>
        <Typography variant='h4' sx={{fontWeight:'bold'}} >Mens most popular</Typography>
        <MainButtonLink to={routes.MensShoesPage}>MORE <ArrowRightAltSharpIcon sx={{fontSize: '35px', ml:1}}/></MainButtonLink>
        </Box>
          <Carousel
          enableAutoPlay={true}
          autoPlaySpeed={7000}
          disableArrowsOnEnd={false}
          breakPoints={breakPoints}
          >
          {randomSlice.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Box sx={{m:1}}
            key={item.id}
            >
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
  


export default MensPopularShoesSlider