import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Drawing from './Drawing';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Main unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8
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
            {/*
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
              {' | '}
              <Link href="https://www.amazon.com/hz/wishlist/ls/319GC3WCQAP6T?ref_=wl_share">amazon</Link>
              {' | '}
              <Link href="https://www.reddit.com/user/Limp-Map3167">reddit</Link>
              {' | '}
              <Link href="https://subscribestar.adult/anton415">subscribestar</Link>
              {' | '}
              <Link href="https://discord.gg/X8W8BPnA7b">discord</Link>
            */}
              <Typography
                align="center"
              >
                More of my works on <Link href="https://www.instagram.com/anton415226/">Instagram</Link>.
              </Typography>
          </Container>
        </Box>
        {/* End main unit */}

        {/* <Tabs /> */}
        <Drawing/>

      </main>
      <Footer />
    </ThemeProvider>
  );
}