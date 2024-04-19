import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Container from '@mui/material/Container';
import AntonSerdyuchenkoAvatar from '.././static/images/avatar/AntonSerdyuchenko.png';

export default function BasicInfo() {
  return (
    <Box display="flex" flexDirection="column">
      <Typography sx={{ width: '100%', bgcolor: 'background.paper' }} variant="h6">Basic information</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', alignSelf: 'center' }}>
        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar alt="Anton Serdyuchenko" src={AntonSerdyuchenkoAvatar} />
          </ListItemAvatar>
          <ListItemText primary="Anton Serdyuchenko" secondary="Born in 1993 in Moscow, Russia." />
        </ListItem>
      </List>
    </Box>
  );
}