import React from 'react'
import {Box} from '@mui/material';
import ShoesPageGrid from './grid-page-grid';
import GridPageCard from './grid-page-card';

const ShoesPage = (props) => {

  return (
    <Box sx={{marginTop: 5}}>
    <ShoesPageGrid>
      {props.products.map((item) => {
        return (

          <GridPageCard 
          name={item.name}
          img={item.img}
          desc={item.desc}
          price={item.price.value}
          key={item.id}/>
          )
        })}
      </ShoesPageGrid>
    </Box>
  )
}

export default ShoesPage
