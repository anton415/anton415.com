import * as React from 'react';
import { CardGroup, Card } from 'semantic-ui-react'
import FirstImg from './static/drawings/1.jpeg';
import SecondImg from './static/drawings/2.jpeg';
import ThirdImg from './static/drawings/3.jpeg';
import FourthImg from './static/drawings/4.jpeg';
import FifthImg from './static/drawings/5.jpeg';
import SixthImg from './static/drawings/6.jpeg';
import SeventhImg from './static/drawings/7.jpeg';
import EighthImg from './static/drawings/8.jpeg';
import NinthImg from './static/drawings/9.jpeg';

const Drawing = () => (
  <CardGroup centered items={items} />
)

export default Drawing

const items = [
  {image: FirstImg},
  {image: SecondImg},
  {image: ThirdImg},
  {image: FourthImg},
  {image: FifthImg},
  {image: SixthImg},
  {image: SeventhImg},
  {image: EighthImg},
  {image: NinthImg}
];