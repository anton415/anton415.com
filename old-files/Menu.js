import React from 'react'
import { TabPane, Tab } from 'semantic-ui-react'
import About from './About';
import Drawing from './Drawing';
import Contact from './Contact';

const panes = [
  { menuItem: 'Drawings', render: () => <TabPane><Drawing /></TabPane> },
  { menuItem: 'About', render: () => <TabPane><About /></TabPane> },
  { menuItem: 'Contact', render: () => <TabPane><Contact /></TabPane> },
]

const Menu = () => <Tab panes={panes} />

export default Menu