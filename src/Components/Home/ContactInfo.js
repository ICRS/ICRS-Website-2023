import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import JoinButton from './JoinButton';

const ContactInfoBox = () => {
  return (
    <Paper sx={{backgroundColor:'darkgray', paddingX:'20px',justifyContent:'center'}} >
      <Typography variant="h4" component="div" sx={{ padding: 2, color: 'white' }} align='center'>
        Get in touch!
      </Typography>
      <Typography variant="h6" component="div" sx={{ padding: 2, color: 'white' }} align='center'>
        Find us on our email: contact@icrs.io
        <hr></hr>
        Or even better, Visit us in the Lab!
      </Typography>
      <Box sx={{width:'100%', margin:'auto', justifyContent:'center', display:'flex'}}>
        <img src='/images/map.jpg' style={{width: '100%', maxWidth: '400px', height: '100%', marginBottom:'20px'}}></img>
      </Box>
      <JoinButton></JoinButton>
    </Paper>
  );
};

export default ContactInfoBox;
