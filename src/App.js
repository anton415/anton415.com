import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import HornyLittleKittyImg from './static/images/horny-little-kitty.webp';
import TheBirthOfAPonyGirlImg from './static/images/the-birth-of-a-pony-girl.webp';

const theme = createTheme();

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


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Main unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Anton415 portfolio
            </Typography>
            <Divider />
              <Link href="https://www.literotica.com/stories/memberpage.php?uid=6695609&page=submissions">literotica</Link>
              {' | '}
              <Link href="https://medium.com/@anton415">medium</Link>
              {' | '}
              <Link href="https://twitter.com/anton415226">twitter</Link>
              {' | '}
              <Link href="https://www.instagram.com/anton415226/">instagram</Link>
              {' | '}
              <Link href="https://www.patreon.com/Anton415226">patreon</Link>
              {' | '}
              <Link href="https://www.goodreads.com/anton415">goodreads</Link>
          </Container>
        </Box>
        {/* End main unit */}

        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
          {stories.map((story) => {
            return (
                <Card sx={{ maxWidth: 345 }}>
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
            );
          })}

          </Typography>
        </Container>

      </main>
      <Footer />
    </ThemeProvider>
  );
}