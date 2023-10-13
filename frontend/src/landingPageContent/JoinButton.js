import React from 'react';
import { Button, Typography } from '@mui/material';
const JoinButton = () => {
  return (
    <div style={{
        display:'flex',
        justifyContent:'center',
    }}>
        <Button 
            href={'https://www.imperialcollegeunion.org/activities/a-to-z/robotics'}
            sx={{
                padding:'10px',
                backgroundColor:'white',
                borderRadius:'30px',
                margin:'15px'
            }}
            padding={3}
            
        >
            <Typography>Join ICRS Now!</Typography>
                
        </Button>
    </div>
  );
};

export default JoinButton;