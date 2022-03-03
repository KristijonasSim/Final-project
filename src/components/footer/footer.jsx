import React from 'react'
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

const Footer = () => {


  const StyledFooterBox = styled(Box)(({theme}) => ({
    width: '100%',
    height: '400px',
    backgroundColor: '#000000',
    color: 'white',
    bottom: 0
  }));
  
  return (
    <StyledFooterBox sx= {{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', }}>
      <Box sx= {{width: '75%', marginLeft: 'auto', marginRight: 'auto' }}>
          <Box sx={{marginBottom: 3 }}>
               <img alt="company" src={process.env.PUBLIC_URL + "/CompanyLogo.PNG"} width="220" sx={{cursor: 'pointer'}}></img>
           </Box>
           <Box sx={{display: 'flex', gap: 1, marginBottom: 3 }}>
               <PhoneIcon/> 
               <Link sx={{textDecoration: 'none', color: 'white'}} href="tel:370646258585">+370 865 535 47</Link>
           </Box>          
           <Box sx={{display: 'flex', gap: 1, marginBottom: 3 }}>
               <EmailIcon/>
               <Link sx={{textDecoration: 'none', color: 'white'}} href="mailto:drunk@sneakers.com">drunk@sneakers.com</Link>

           </Box>          
           <Box sx={{display: 'flex',marginBottom: 3, gap:2}}>
              
               <Link sx={{textDecoration: 'none', color: 'white'}} href="https://www.facebook.com/"><FacebookIcon/></Link>
               <Link sx={{textDecoration: 'none', color: 'white'}} href="https://www.instagram.com/"><InstagramIcon/></Link>
               <Link sx={{textDecoration: 'none', color: 'white'}} href="https://www.youtube.com/"><YouTubeIcon/></Link>

           </Box>
           <Typography variant="caption">© 2022 SportClothes, UAB. All Rights Reserved.</Typography>
             <Divider style={{width:'100%', backgroundColor: 'white', marginTop: 6}} />
           </Box>
    </StyledFooterBox>
           
  )
}

export default Footer