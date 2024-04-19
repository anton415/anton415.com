import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import TopBar from './TopBar';
import theme from './theme';
import AntonSerdyuchenkoMobileAvatar from './static/images/avatar/AntonSerdyuchenko-Mobile.webp';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <TopBar />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
