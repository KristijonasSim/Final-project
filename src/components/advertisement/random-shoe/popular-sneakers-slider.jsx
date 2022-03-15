import React, { useContext } from 'react';

import Carousel from 'react-elastic-carousel';
// import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import MainButtonLink from '../../buttons/main-button-link';
import HomePageProductsCard from '../../../pages/products-page/products-grid-page/shoes-page-products/home-page-products-card';
import routes from '../../../routing/routes';
import { ProductContext } from '../../../pages/products-page/products-grid-page/contexts/product-context';

const PopularSneakersSlider = () => {
  const { products } = useContext(ProductContext);

  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
  ];

  const randomSlice = products.filter((item) => item.sex === 'Men').slice(5, 15);

  return (
    <Box sx={{ m: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>This week&apos;s most popular  </Typography>
        <MainButtonLink to={routes.SneakersPage}>
          MORE
          {' '}
          <ArrowRightAltSharpIcon sx={{ fontSize: '35px', ml: 1 }} />
        </MainButtonLink>
      </Box>
      <Carousel
        enableAutoPlay
        autoPlaySpeed={7000}
        disableArrowsOnEnd={false}
        breakPoints={breakPoints}
      >
        {randomSlice.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Box
            sx={{ m: 1 }}
            key={item.id}
          >
            <HomePageProductsCard
              key={item.id}
              {...item}
            />
          </Box>
        ))}
      </Carousel>

    </Box>
  );
};

export default PopularSneakersSlider;
