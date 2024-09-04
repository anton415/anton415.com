import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
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
import CaraIcon from './static/icons/cara-icon.png';
import PixivIcon from './static/icons/pixiv-logo.png';
import TwitterIcon from './static/icons/twitter-logo.png';

export default function Contact() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem disablePadding>
        <ListItemButton component="a" href="https://cara.app/anton415/">
          <ListItemAvatar>
            <Avatar
              alt="Pixiv"
              src={PixivIcon}
            />
          </ListItemAvatar>
          <ListItemText primary="Pixiv" secondary="My portfolio." />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton component="a" href="https://cara.app/anton415/">
          <ListItemAvatar>
            <Avatar
              alt="Twitter"
              src={TwitterIcon}
            />
          </ListItemAvatar>
          <ListItemText primary="Twitter" secondary="My portfolio." />
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