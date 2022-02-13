import React from 'react'
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

const DeliveryAdvertismentInfo = () => {

  
  const StyledinfoContainer = styled(Box)(({theme}) => ({
    height:'473px',
    backgroundColor: '#F4F4F4',
    [theme.breakpoints.down('lg')]: {
      width: '100%'
    }
  }));



  const StyledinfoMiniContainer = styled(Box)(({theme}) => ({
    paddingRight: '80px',
    paddingLeft: '80px',
     [theme.breakpoints.down('lg')]: {
      paddingTop: '16.5%',
      paddingRight: '40px',
      paddingBottom: '16.5%',
      paddingLeft: '40px',    
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '40px',
      paddingRight: '24px',
      paddingBottom: '40px',
      paddingLeft: '24px',
    },     
}));



  return (
    <StyledinfoContainer  sx={{display: 'flex', alignItems:'center', justifyContent:'center',flexDirection:'column', }}>
      <StyledinfoMiniContainer>
        <Box sx={{display: 'flex'}} >
            <LocalShippingIcon sx={{fontSize:'40px', color:'#F4F4F4', backgroundColor:'#E73830', marginRight: 3}}/>
           <Typography variant='h4' sx={{fontWeight:'Bold'}}>Delivery with one day  
            <Typography variant='subtitle1' sx={{color: 'gray'}}>
            All goods are in our warehouse, so we offer <br></br>  extremelyfast one day delivery </Typography>
           </Typography>
        </Box>
        <Divider style={{width:'100%', marginTop: '40px', marginBottom: '40px'}} />
        <Box sx={{display: 'flex', }} >
            <LocalShippingIcon sx={{fontSize:'40px', color:'#F4F4F4', backgroundColor:'#E73830', marginRight: 3}}/>
           <Typography variant='h4' sx={{fontWeight:'Bold'}}>30 Days free return  !!!  
            <Typography variant='subtitle1' sx={{color: 'gray'}}>
            You can return the product free <br></br>of charge within 30 days of purchase.</Typography>
           </Typography>
        </Box>
        </StyledinfoMiniContainer>
      </StyledinfoContainer>
  )
}

export default DeliveryAdvertismentInfo