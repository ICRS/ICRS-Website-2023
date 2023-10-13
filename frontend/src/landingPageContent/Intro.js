import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const Intro = () => {
  return (
    <Paper elevation={3} sx={{ backgroundColor: '#0084FF', paddingY:5 }}>
      <Typography variant="h4" component="div" align='center' marginBottom={1} color='white'>
        Hello there!
      </Typography>
        <hr style={{borderColor:'white', width:'20%',height:'5px', backgroundColor:'white', borderStyle:'none'}}/>
      <Typography variant="body1" color='white' align='center' padding={2}>
        Welcome one, welcome all! Imperial College Robotics Society is a student-led university club aiming to increase robotics interest at Imperial College London and across the UK. We run workshops, competitions and lectures to teach about robotics, electronics and software as well as providing help (financial and technical) to students looking to start a robotics project.
      </Typography>
    </Paper>
  );
};

export default Intro;

