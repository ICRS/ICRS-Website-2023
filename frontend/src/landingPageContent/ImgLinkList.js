import React, { useState } from 'react';
import { List, Paper, Grid } from '@mui/material';
import LinkWithOverlay from '../ReusableComponents/LinkWithOverlay'

const ImgLinkList = () => {
  const images = [
    { src: 'images/image1.jpeg', description: 'Our 2022 Eurobot Entry', title: 'External Competitions'},
    { src: 'images/image2.jpeg', description: 'Robotics 101', title: 'courses'},
    { src: 'images/image3.jpeg', description: 'How to train your Robot', title: 'Academic Talks'},
  ];

  return (
    <Paper elevation={3}>
      <Grid container sx={{padding:0}}>
        {images.map((image, index) => (
          <Grid xs={12} md={4}>
            <LinkWithOverlay src={image.src} description={image.description} key={index} title={image.title} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ImgLinkList;
