import React from 'react';
import { List, Grid, Typography } from '@mui/material';
const Sponsors = () => {
  let images = [
    {src: 'images/sponsor1.png'},
    {src: 'images/sponsor2.svg'},
    {src: 'images/sponsor3.png'},
  ]
  return (
    <div style={{
        display:'flex',
        justifyContent:'start',
        flexDirection:'column'
    }}>
        <Typography variant='h5' align='center' sx={{paddingY:'10px'}}>ICRS is sponsored by:</Typography>
        <Grid container sx={{padding:0}}>
          {images.map((image, index) => (
            <Grid key={index} xs={12} md={4} padding={1} sx={{display:'flex',alignItem:'center'}}>
              <img src={image.src}  width='100%' />
            </Grid>
            
          ))}
      </Grid>
    </div>
  );
};

export default Sponsors;