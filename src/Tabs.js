import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import DrawIcon from '@mui/icons-material/Draw';
import EmailIcon from '@mui/icons-material/Email';
import About from './About';
import Drawing from './Drawing';
import Contact from './Contact';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab icon={<InfoIcon />} label="about" {...a11yProps(0)} />
          <Tab icon={<DrawIcon />} label="drawings" {...a11yProps(1)} />
          <Tab icon={<EmailIcon />} label="contact" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <About />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Drawing />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Contact />
      </CustomTabPanel>
    </Box>
  );
}