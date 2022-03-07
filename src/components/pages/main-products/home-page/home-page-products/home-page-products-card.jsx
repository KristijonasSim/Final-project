import React, { useCallback } from 'react';
import {
  Typography,
  Box,
  styled,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';


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



const HomePageProductsCard = ({
  id, images, price, size, title, stock, ...props
}) => {

  const navigate = useNavigate();

  const navigateToSingleShoe = useCallback(() => {
    navigate(`/products/${id}`);
    console.log('Naviguojama i atskirą produkto puslapį:', id);
  }, [id]);

  const addToCart = (event) => {
    event.stopPropagation();
    console.log('Pridedma į Krepšelį productas su id', id);
  };

  const TotalSize = size.length

  return (
    <CardElement
    >
       <CardMedia sx={{cursor: 'pointer', objectFit: 'cover',}}
        component="img"
        image={images[0]}
        onClick={navigateToSingleShoe}
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
                {stock} In warehouse right now
                </Typography>
        <Box sx={{display: 'flex',justifyContent: 'space-between', mt: 1}}>
        <Typography sx={{fontWeight: 'bold',}} 
              variant="body1" 
              >
            {price} €
            </Typography>

            <Button variant="contained" size="small" onClick={addToCart}>
            <ShoppingCartIcon fontSize="small" />
          </Button>
        </Box>
      </CardContent>
    </CardElement>
  );
};

export default HomePageProductsCard;
