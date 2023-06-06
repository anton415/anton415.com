import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright anton415.com '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}