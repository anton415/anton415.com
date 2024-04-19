import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AntonSerdyuchenkoMobileAvatar from './static/images/avatar/AntonSerdyuchenko-Mobile.webp';

export default function BasicInfo() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Typography alignItems="center" sx={{ flexGrow: 1 }}>
          ANTON SERDYUCHENKO ART
        </Typography>
      </Toolbar>
    </AppBar>
  );
}