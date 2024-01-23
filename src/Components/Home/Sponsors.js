import React from 'react';
import { Grid, Typography } from '@mui/material';
const Sponsors = () => {
  let images = [
    {src: 'images/janestreet.png'},
    {src: 'images/Ocado.png'},
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
            <Grid key={index} xs={12} md={6} padding={1} sx={{display:'flex',alignItem:'center' }}>
              <img src={image.src}  style={{maxHeight:'120px', width:'100%', objectFit: 'contain' }} alt='' />
            </Grid>
            
          ))}
      </Grid>
    </div>
  );
};

export default Sponsors;