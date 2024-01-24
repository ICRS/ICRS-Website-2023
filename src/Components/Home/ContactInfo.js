import React from 'react';
import { Paper, Typography, Box, Link } from '@mui/material';
import JoinButton from './JoinButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const imagePath = process.env.NODE_ENV === 'production'
  ? '/ICRS-Website-2023/images/'
  : './images/'

const ContactInfoBox = () => {
  return (
    <Paper sx={{backgroundColor:'darkgray', paddingX:'20px',justifyContent:'center'}} >
      <Typography variant="h4" component="div" sx={{ padding: 2, color: 'white' }} align='center'>
        Get in touch!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ padding: 2, color: 'white' }} align='center'>
          We are most active on our discord server! 
        </Typography>
        <Link href="https://discord.gg/5Y3Z9XZ" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} size="3x" color='white'/>
        </Link>
      </Box>
      <Typography variant="h6" component="div" sx={{ padding: 2, color: 'white' }} align='center'>
        But you can also find us on our email: contact@icrs.io
      </Typography>
      <Box sx={{width:'100%', margin:'auto', justifyContent:'center', display:'flex'}}>
        <img src={`${imagePath}/map.jpg`} style={{width: '100%', maxWidth: '400px', height: '100%', marginBottom:'20px'}} alt='map of campus leading to 505'></img>
      </Box>
      <JoinButton></JoinButton>
    </Paper>
  );
};

export default ContactInfoBox;
