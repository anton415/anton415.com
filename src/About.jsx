import * as React from 'react';
import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {timelineOppositeContentClasses} from '@mui/lab/TimelineOppositeContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MikeMattesiAvatar from './static/images/avatar/MikeMattesi.jpg';
import AntonSerdyuchenkoAvatar from './static/images/avatar/AntonSerdyuchenko.png';
import SmallForceBanner from './static/images/banner/force/small.webp';
import MediumForceBanner from './static/images/banner/force/medium.webp';
import LargeForceBanner from './static/images/banner/force/large.png';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.0rem',
  [theme.breakpoints.up('sm')]: {
      fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

export default function About() {
  return (
    <Box >
      <Box align="center" >
         I'm an artist who dreams of creating my own comic book.
      </Box>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          }
        }}
      >

        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            2024
          </TimelineOppositeContent>
          <TimelineSeparator>
              <Avatar alt="Mike Mattesi" src={MikeMattesiAvatar} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card sx={{ minWidth: 125 }}>
              <Link
                 href="https://www.drawingforce.com" underline="none"
              >
                <CardMedia
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    height: 92
                  }}
                  image={SmallForceBanner}
                  title="FORCE Art Mentorship"
                />
                <CardMedia
                  sx={{
                    display: { xs: 'none', sm: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    height: 150
                  }}
                  image={MediumForceBanner}
                  title="FORCE Art Mentorship"
                />
                <CardMedia
                  sx={{
                    display: {  xs: 'none', sm: 'none', md: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    height: 150
                  }}
                  image={LargeForceBanner}
                  title="FORCE Art Mentorship"
                />
              </Link>
              <CardContent>
                <ThemeProvider theme={theme}>
                  <Typography variant="h3">Drawing FORCE Art Mentorship with Mike Mattesi.</Typography>
                </ThemeProvider>
                <Typography variant="body2" color="text.secondary">
                  FORCE drawing has helped me develop a deeper and more intuitive understanding of drama and form,
                  and has given me the tools to create incredible works of art.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <IconButton aria-label="instagram" href="https://www.instagram.com/michaelmattesi/">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton aria-label="facebook" href="https://www.facebook.com/pages/DrawingForcecom-with-Michael-Mattesi/">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton aria-label="x" href="https://twitter.com/michaelmattesi">
                    <XIcon />
                  </IconButton>
                  <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/mike-mattesi-b39b475/">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton aria-label="pinterest" href="https://www.pinterest.com/michaelmattesi/">
                    <PinterestIcon />
                  </IconButton>
                  <IconButton aria-label="youtube" href="https://www.youtube.com/user/drawingforce">
                    <YouTubeIcon />
                  </IconButton>
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Avatar alt="Anton Serdyuchenko" src={AntonSerdyuchenkoAvatar} />
          </TimelineSeparator>
          <TimelineContent>
            <Card sx={{ minWidth: 125 }}>
              <CardContent>
                <ThemeProvider theme={theme}>
                  <Typography variant="h3">Self-study.</Typography>
                </ThemeProvider>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}