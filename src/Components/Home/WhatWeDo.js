import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BuildIcon from '@mui/icons-material/Build';
import FactoryIcon from '@mui/icons-material/Factory';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const info = [
  {title:'Robotics 101', description:'We run robotics 101 , our flagship open source introductory robotics course, throughout the academic year. We also teach how robots in trading work to generate trading signals. Robot trading is a trading system that allows traders to rely on computers to carry out user-defined trading activities. An example of such a trading bot is profit secret app 2022, which is a well-known AI-driven auto trading bot. It works based on algorithms to provide accurate results for the traders.', icons:<PrecisionManufacturingIcon sx={{fontSize: 100, width:'100%', paddingY:2, color:'#0084FF',margin:'auto'}}/>},
  {title:'Wednesday Hackdays', description:"People work on various cool robotics projects on Wednesdays. Members usually provide technical help and support to one another's projects during these sessions.", icons:<BuildIcon sx={{fontSize: 100, width:'100%', paddingY:2, color:'#0084FF',margin:'auto'}}/>},
  {title:'Facilities for Makers', description:'We have a soldering station, laser cutter and 3D printers for our members to build whatever they want.', icons:<FactoryIcon sx={{fontSize: 100, width:'100%', paddingY:2, color:'#0084FF',margin:'auto'}}/>},
  {title:'External Competitions', description:'We participate in external competitions such as piwars and eurobot.', icons:<EmojiEventsIcon sx={{fontSize: 100, width:'100%', paddingY:2, color:'#0084FF',margin:'auto'}}/>},
]
const WhatWeDo = () => {
  return (
    <Paper elevation={3} sx={{ backgroundColor: 'white', paddingY:5 }}>
      <Typography variant="h4" component="div" align='center' marginBottom={1} color='black'>
        What do we do?
      </Typography>
      <hr style={{borderColor:'#0084FF', width:'20%',height:'5px', backgroundColor:'#0084FF', borderStyle:'none'}}/>
      <Grid container>
        {info.map((information, index) => (
          <Grid xs={12} md={6} alignItems='center'>
            {information.icons}
            <Typography variant="h5" component="div" align='center' marginBottom={1} color='black'>{information.title}</Typography>
            <Typography variant="body1" color='gray' align='center' padding={2}>{information.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default WhatWeDo;

