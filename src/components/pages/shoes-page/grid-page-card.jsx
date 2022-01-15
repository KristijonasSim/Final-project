import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const GridPageCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345, height: 440}}>
      <CardActionArea>
        <CardMedia sx={{ maxWidth: 345}}
          component="img"
          height="350px"
          image={props.img}
          
        />
        <CardContent  sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <Typography gutterBottom variant="h6" component="div">
                {props.name}
              </Typography>
              <Typography variant="h6" color="text.primary">
                {props.price}  $
              </Typography>
            </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default GridPageCard
