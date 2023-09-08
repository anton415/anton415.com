import * as React from 'react';
import Box from '@mui/material/Box';
import MaterialTabs from '@mui/material/Tabs';
import MaterialTab from '@mui/material/Tab';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BrushIcon from '@mui/icons-material/Brush';
import Writing from './Writing';

export default function Tabs() {

const [value, setValue] = React.useState(0);

const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
};

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        p: 6
      }}
    >
      <MaterialTabs value={value} onChange={handleChange} aria-label="icon label tabs" centered="true">
        <MaterialTab icon={<AutoStoriesIcon />} label="WRITING">
          <Writing />
        </MaterialTab>
        <MaterialTab icon={<BrushIcon />} label="ART" />
      </MaterialTabs>
    </Box>
  );
}