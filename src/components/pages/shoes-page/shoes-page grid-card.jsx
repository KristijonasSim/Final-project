import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const GridPageCard = ({
  title, price, imageURL, Size, Stock, id
}) => {



  const CardElement = styled(Card)(({theme}) => ({
    border: "none", 
    boxShadow: "none", 
    height: '100%', 
    position: 'relative',
    display: 'flex', 
    justifyContent: 'center',
    flexDirection: 'column',
    objectFit: 'scale-down',
  }))

  const TotalSize = Size.length
  return (
    <CardElement
    >
        <CardMedia sx={{cursor: 'pointer', objectFit: 'cover'}}
        component="img"
        image={imageURL}
        />
        <Typography sx={{mt:1, cursor: 'pointer'}} 
        variant="body2" 
        color="text.secondary"
        >
          {TotalSize} Sizes
        </Typography>
        <Divider sx={{mt: 1}}/>
        <CardContent sx={{p: 0}}>
              <Typography sx={{fontWeight: 'bold', mt:1}} 
              variant="body1" 
              >
                {title}
              </Typography>
              <Typography sx={{mt: 1}}
              variant="body2" 
              color="text.secondary"
              >
                {Stock} In warehouse right now
        </Typography>
              
              
              <Typography sx={{fontWeight: 'bold',}} 
              variant="body1" 
              >
                {price}  
              </Typography>
            </CardContent>
    </CardElement>
  );
}
export default GridPageCard
