import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Tabs from './Tabs';

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
              Anton's portfolio
            </Typography>
            <Divider />
          </Container>
        </Box>
        {/* End main unit */}

        <Tabs />

      </main>
      <Footer />
    </ThemeProvider>
  );
}