import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HornyLittleKittyImg from './static/images/horny-little-kitty.webp';
import TheBirthOfAPonyGirlImg from './static/images/the-birth-of-a-pony-girl.webp';

const stories = [
    {
        name: 'Horny little kitty',
        literoticaUrl: 'https://literotica.com/s/horny-little-kitty',
        mediumUrl: 'https://medium.com/@anton415/horny-little-kitty-63b4f5070565',
        description: 'A young girl at a Halloween party.',
        img: HornyLittleKittyImg
    },

    {
        name: 'The Birth of a Pony Girl',
        literoticaUrl: 'https://literotica.com/s/the-birth-of-a-pony-girl',
        mediumUrl: 'https://medium.com/@anton415/the-birth-of-a-pony-girl-13aa7d757f2e',
        description: 'Rose overcome shame of sexual desire and become pony girl.',
        img: TheBirthOfAPonyGirlImg
    }
]

export default function Writing() {
  return (
    <Grid justifyContent="center"
            alignItems="center"
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
      {stories.map((story, index) => {
        return (
          <Grid justifyContent="center" alignItems="center" item key={index}>
            <Card sx={{ maxWidth: 345, minHeight: 362 }}>
              <CardMedia
                component="img"
                height="194"
                image={story.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {story.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {story.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href={story.literoticaUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  size="small"
                >
                  Literotica
                </Button>
                <Button
                  href={story.mediumUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  size="small"
                >
                  Medium
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}