import React from 'react'
import {Box} from '@mui/material';
import ManShoesPageGrid from './grid-page-grid';
import ManGridPageCard from './grid-page-card';

const ShoesPage = (props) => {

  return (
    <Box sx={{marginTop: 5}}>
    <ManShoesPageGrid>
      {props.products.map((item)=>{
        return (

          <ManGridPageCard 
          name={item.name}
          img={item.img}
          desc={item.desc}
          price={item.price.value}/>
          )
        })}
      </ManShoesPageGrid>
    </Box>
  )
}

export default ShoesPage
