import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import FirstImg from './static/drawings/1.jpeg';
import SecondImg from './static/drawings/2.jpeg';
import ThirdImg from './static/drawings/3.jpeg';
import FourthImg from './static/drawings/4.jpeg';
import FifthImg from './static/drawings/5.jpeg';
import SixthImg from './static/drawings/6.jpeg';
import SeventhImg from './static/drawings/7.jpeg';
import EighthImg from './static/drawings/8.jpeg';
import NinthImg from './static/drawings/9.jpeg';

export default function Drawing() {
  return (
      <Box align="center" >
         <ImageList sx={{ width: 500 }} cols={3} >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
      </Box>

  );
}

const itemData = [
  {
    img: FirstImg
  },
  {
    img: SecondImg
  },
  {
    img: ThirdImg
  },
  {
    img: FourthImg
  },
  {
    img: FifthImg
  },
  {
    img: SixthImg
  },
  {
    img: SeventhImg
  },
  {
    img: EighthImg
  },
  {
    img: NinthImg
  }
];