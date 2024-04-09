import * as React from 'react';
import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {timelineOppositeContentClasses} from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MikeMattesiAvatar from './static/images/avatar/MikeMattesi.jpg';
import SmallForceBanner from './static/images/banner/force/small.webp';
import MediumForceBanner from './static/images/banner/force/medium.webp';
import LargeForceBanner from './static/images/banner/force/large.png';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

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
          },
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
            <Card>
              <Link
                 href="https://www.drawingforce.com" underline="none"
              >
                <CardMedia
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    height: 120
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
                <Typography gutterBottom variant="h5" component="div">
                  Drawing FORCE Art Mentorship with Mike Mattesi.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  FORCE drawing has helped me develop a deeper and more intuitive understanding of drama and form,
                  and has given me the tools to create incredible works of art.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mike Mattesi Instagram Account:
                  <IconButton aria-label="instagram" href="https://www.instagram.com/michaelmattesi/">
                    <InstagramIcon />
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
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Self-taught.</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}