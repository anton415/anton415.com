import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import BasicInfo from './about-information/BasicInfo';
import Education from './about-information/Education';

export default function About() {
  return (
    <Box >
      <BasicInfo />
      <Divider />
      <Education />
    </Box>
  );
}