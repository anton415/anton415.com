import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Copyright() {
  return (
    <Box component="footer" sx={{ p: 2, position: 'fixed', bottom: 0, width: 1.0 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright Anton '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}