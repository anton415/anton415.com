import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  return (
    <Box align="center" >
      <IconButton aria-label="instagram" href="https://www.instagram.com/anton415226/">
        <InstagramIcon />
      </IconButton>
      <IconButton aria-label="email" href="mailto:anton415@gmail.com">
        <EmailIcon />
      </IconButton>
    </Box>
  );
}