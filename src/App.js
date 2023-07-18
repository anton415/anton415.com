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
import img from './static/images/horny-little-kitty.webp';

const theme = createTheme();
const story = {
  name: 'Horny little kitty',
  url: 'https://literotica.com/s/horny-little-kitty',
  description: 'A young girl went to a Halloween party in a catsuit where she will show her wild instincts and desire to obey.'
};


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
              {' '}
              <Link href="https://medium.com/@anton415">medium</Link>
              {' '}
              <Link href="https://twitter.com/anton415226">twitter</Link>
              {' '}
              <Link href="https://www.instagram.com/anton415226/">instagram</Link>
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
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="194"
                image={img}
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
                  href={story.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  size="small"
                >
                  Literotica
                </Button>
              </CardActions>
            </Card>
          </Typography>
        </Container>

      </main>
      <Footer />
    </ThemeProvider>
  );
}