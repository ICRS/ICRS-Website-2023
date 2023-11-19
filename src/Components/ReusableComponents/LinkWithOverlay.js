import React, { useState } from 'react';
import { ListItemButton, ListItemText, Paper, Typography } from '@mui/material';


const LinkWithOverlay = ({src, description, key, title}) => {
  const [isPanelVisible, setPanelVisible] = useState(false);
  const handleMouseEnter = () => {
    setPanelVisible(true);
  };
  const handleMouseLeave = () => {
    setPanelVisible(false);
  };

  return (
          <ListItemButton
            key={key} 
            style={{backgroundImage: `url(${src})`,
                height:'40vw',
                backgroundSize:'cover',
                position:'relative',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isPanelVisible && (
                <Paper style={{
                    position: 'absolute',
                    top: 0, 
                    left: 0,
                    width:'100%',
                    height:'100%',
                    backgroundColor: 'rgba(0, 132, 255, 0.6)',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    zIndex: 1,
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'column'
                }}>
                    <Typography variant='h6' sx={{color:'lightgray'}}>{title.toUpperCase()}</Typography>
                    <Typography variant='h5' sx={{color:'white'}}>{description}</Typography>
                </Paper>
            )}
          </ListItemButton>
        )}

export default LinkWithOverlay;
