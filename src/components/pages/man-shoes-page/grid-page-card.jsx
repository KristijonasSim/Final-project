import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Products } from '../../../data';

const styleImage= styled(CardMedia)


const GridPageCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={props.img}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize="h1">
            {props.price}  $
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default GridPageCard
