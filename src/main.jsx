import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import AntonSerdyuchenkoAvatar from './static/images/avatar/AntonSerdyuchenko.png';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Box >
            <Avatar alt="Anton Serdyuchenko" src={AntonSerdyuchenkoAvatar} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Typography alignItems="center" sx={{ flexGrow: 1 }}>
            Art of Anton Serdyuchenko
          </Typography>
        </Toolbar>
      </AppBar>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
