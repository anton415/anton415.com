import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import MobileFirstImg from './static/drawings-for-mobile-view/1.webp';
import MobileSecondImg from './static/drawings-for-mobile-view/2.webp';
import MobileThirdImg from './static/drawings-for-mobile-view/3.webp';
import MobileFourthImg from './static/drawings-for-mobile-view/4.webp';
import MobileFifthImg from './static/drawings-for-mobile-view/5.webp';
import MobileSixthImg from './static/drawings-for-mobile-view/6.webp';
import MobileSeventhImg from './static/drawings-for-mobile-view/7.webp';
import MobileEighthImg from './static/drawings-for-mobile-view/8.webp';
import MobileNinthImg from './static/drawings-for-mobile-view/9.webp';
import FirstImg from './static/drawings/1.webp';
import SecondImg from './static/drawings/2.webp';
import ThirdImg from './static/drawings/3.webp';
import FourthImg from './static/drawings/4.webp';
import FifthImg from './static/drawings/5.webp';
import SixthImg from './static/drawings/6.webp';
import SeventhImg from './static/drawings/7.webp';
import EighthImg from './static/drawings/8.webp';
import NinthImg from './static/drawings/9.webp';

const items = [
  {image: FirstImg, mobileImage: MobileFirstImg},
  {image: SecondImg, mobileImage: MobileSecondImg},
  {image: ThirdImg, mobileImage: MobileThirdImg},
  {image: FourthImg, mobileImage: MobileFourthImg},
  {image: FifthImg, mobileImage: MobileFifthImg},
  {image: SixthImg, mobileImage: MobileSixthImg},
  {image: SeventhImg, mobileImage: MobileSeventhImg},
  {image: EighthImg, mobileImage: MobileEighthImg},
  {image: NinthImg, mobileImage: MobileNinthImg}
];

export default function Art(props) {
  const { loading = false } = props;

  return (
    <Grid container spacing={1}>
      {(loading ? Array.from(new Array(9)) : items).map((item, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper elevation={10}>
            <Card
              sx={{
                maxWidth: 660, display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box' }
              }}
            >
              {item ? (
                <CardMedia
                  component="img"
                  image={item.mobileImage}
                  title="gesture drawing"
                />
              ) : (
                <Skeleton variant="rectangular" width={295} height={300} />
              )}
            </Card>
            <Card
              sx={{
                maxWidth: 660, display: { xs: 'none', sm: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box' }
              }}
            >
              {item ? (
                <CardMedia
                  image={item.image}
                  title="gesture drawing"
                />
              ) : (
                <Skeleton variant="rectangular" width={295} height={300} />
              )}
            </Card>
            <Card
              sx={{
                maxWidth: 660, display: { xs: 'none', sm: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box' }
              }}
            >
              {item ? (
                <CardMedia
                  image={item.image}
                  title="gesture drawing"
                />
              ) : (
                <Skeleton variant="rectangular" width={295} height={300} />
              )}
            </Card>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}