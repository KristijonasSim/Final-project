import React from 'react'
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import ReplayIcon from '@mui/icons-material/Replay';
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
            <Box sx={{ backgroundColor:'#E73830',height:'40px', width:'40px', marginRight: 3, display:'flex', justifyContent: 'center', alignItems: 'center'}}>
             <LocalShippingTwoToneIcon sx={{fontSize:'30px', color:'#F4F4F4', }}/>
            </Box>
           <Typography variant='h4' component='p' sx={{fontWeight:'Bold'}}>Delivery with one day  
            <Typography variant='subtitle1' component='p' sx={{color: 'gray'}}>
            All goods are in our warehouse, so we offer extremely fast one day delivery </Typography>
           </Typography>
        </Box>

        <Divider style={{width:'100%', marginTop: '40px', marginBottom: '40px'}} />
        
        <Box sx={{display: 'flex', }} >
            <Box sx={{ backgroundColor:'#E73830',height:'40px', width:'40px', marginRight: 3, display:'flex', justifyContent: 'center', alignItems: 'center'}}>
              <ReplayIcon sx={{fontSize:'30px', color:'#F4F4F4', }}/>
            </Box>
           <Typography variant='h4' component='p' sx={{fontWeight:'Bold'}}>30 Days free return  !!!  
            <Typography variant='subtitle1' component='p' sx={{color: 'gray'}}>
            You can return the product free of charge within 30 days of purchase.</Typography>
           </Typography>
        </Box>
        </StyledinfoMiniContainer>
      </StyledinfoContainer>
  )
}

export default DeliveryAdvertismentInfo