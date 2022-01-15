import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const GridPageCard = ({
  title, price, ImageURL,
}) => {
  return (
    <Card sx={{ maxWidth: 345, height: 440}}>
      <CardActionArea>
        <CardMedia sx={{ maxWidth: 345}}
          component="img"
          height="350px"
          image={ImageURL}
          
        />
        <CardContent  sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
              <Typography variant="h6" color="text.primary">
                {price}  $
              </Typography>
            </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default GridPageCard
