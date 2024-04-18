import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';

export default function Contact() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem disablePadding>
        <ListItemButton component="a" href="https://www.instagram.com/anton415226/">
          <ListItemAvatar>
            <Avatar>
              <InstagramIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Instagram" secondary="More of my work here." />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton component="a" href="https://twitter.com/anton415226">
          <ListItemAvatar>
            <Avatar>
              <XIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="X" secondary="Art related news." />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton component="a" href="https://pin.it/62NObwbtT">
          <ListItemAvatar>
            <Avatar>
              <PinterestIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Pinterest" secondary="References and inspiration map." />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton component="a" href="mailto:anton415@gmail.com">
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary="Reach out with any questions!" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}