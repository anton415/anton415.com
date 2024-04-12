import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import FirstImg from './static/drawings/1.jpeg';
import SecondImg from './static/drawings/2.jpeg';
import ThirdImg from './static/drawings/3.jpeg';
import FourthImg from './static/drawings/4.jpeg';
import FifthImg from './static/drawings/5.jpeg';
import SixthImg from './static/drawings/6.jpeg';
import SeventhImg from './static/drawings/7.jpeg';
import EighthImg from './static/drawings/8.jpeg';
import NinthImg from './static/drawings/9.jpeg';

const items = [
  {image: FirstImg},
  {image: SecondImg},
  {image: ThirdImg},
  {image: FourthImg},
  {image: FifthImg},
  {image: SixthImg},
  {image: SeventhImg},
  {image: EighthImg},
  {image: NinthImg}
];

export default function Art(props) {
  const { loading = false } = props;

  return (
    <Grid container spacing={1}>
      {(loading ? Array.from(new Array(9)) : items).map((item, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper elevation={10}>
            <Card sx={{ maxWidth: 660 }}>
              {item ? (
                <CardMedia
                  component="img"
                  alt="gesture drawing"
                  image={item.image}
                />
              ) : (
                <Skeleton variant="rectangular" width={240} height={250} />
              )}
            </Card>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}