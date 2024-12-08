import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
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
import PixivIcon from './static/icons/pixiv-logo.png';
import TwitterIcon from './static/icons/twitter-logo.png';
import MailIcon from './static/icons/mail-logo.png';
import InstagramIcon from './static/icons/instagram-logo.png';
import VkIcon from './static/icons/vk-logo.png';
import CaraIcon from './static/icons/cara-logo.png';

export default function Contact() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem disablePadding>
        <ListItemButton component="a" href="https://www.instagram.com/anton415226/">
          <ListItemAvatar>
             <Avatar
               alt="Instagram"
               src={InstagramIcon}
             />
          </ListItemAvatar>
          <ListItemText primary="Instagram" secondary="More of my work here." />
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton component="a" href="https://x.com/anton415226/">
          <ListItemAvatar>
            <Avatar
              alt="Twitter"
              src={TwitterIcon}
            />
          </ListItemAvatar>
          <ListItemText primary="Twitter" secondary="News, my works and funny posts." />
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton component="a" href="https://vk.com/anton415/">
          <ListItemAvatar>
            <Avatar
              alt="VK"
              src={VkIcon}
            />
          </ListItemAvatar>
          <ListItemText primary="VK" secondary="Russian social media with my works." />
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton component="a" href="https://www.pixiv.net/en/users/108453050/">
        <ListItemAvatar>
          <Avatar
            alt="Pixiv"
            src={PixivIcon}
          />
        </ListItemAvatar>
        <ListItemText primary="Pixiv" secondary="My works and also some 18+ drawings." />
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton component="a" href="https://cara.app/anton415">
          <ListItemAvatar>
            <Avatar
              alt="Cara"
              src={CaraIcon}
            />
          </ListItemAvatar>
          <ListItemText primary="Cara" secondary="There is so many social platforms :)" />
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton component="a" href="mailto:anton415@gmail.com">
          <ListItemAvatar>
            <Avatar
              alt="Mail"
              src={MailIcon}
            />
          </ListItemAvatar>
          <ListItemText primary="Mail" secondary="Reach out with any questions!" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}