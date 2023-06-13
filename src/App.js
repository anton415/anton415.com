import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Menu from './Menu';

const theme = createTheme();
const story = {
  name: 'Horny little kitty',
  url: 'https://literotica.com/s/horny-little-kitty'
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menu />
      <main>
        {/* Hero unit */}
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
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Erotic content</Button>
              <Button variant="outlined">Non-erotic content</Button>
            </Stack>
          </Container>
        </Box>
        {/* End hero unit */}
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {story.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href={story.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}