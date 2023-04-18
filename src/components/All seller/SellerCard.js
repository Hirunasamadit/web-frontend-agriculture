import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicRating from './Rating';
import ProfilePicture from '../../assets/Images/farmer image 1.jpg'

const SellerCard = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
      {[1, 2, 3, 4, 5, 6, 7, 8 , 9].map((seller, index) => {
        const isFirstRow = index < 1;
        // const isSecondRow = index >= 1 && index < 3;
        // const isThirdRow = index >= 3;

        let cardStyle = {
          maxWidth: '345px',
          marginBottom: '20px',
        };

        if (isFirstRow) {
          cardStyle.flex = '1 1 calc(100% - 40px)';
        } else {
          cardStyle.flex = '1 1 calc(50% - 20px)';
        }

        return (
          <Card key={index} sx={cardStyle}>
            <CardMedia
              sx={{ height: 140 }}
              image={ProfilePicture}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bandarawela Vegetable Shop
              </Typography>
              <BasicRating />
            </CardContent>
            <CardActions>
              <Button size="small">Location</Button>
              <Button size="small">Call</Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default SellerCard;
