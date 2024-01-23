import React from 'react';
import Grid from '@mui/material/Grid';

const ProjectCard = ({props}) => {
    console.log(props)
    return (
        <Grid container
            style={{ backgroundColor: '#0084FF', borderRadius: '10px'  }}
        >
            <Grid item xs={3} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                height:'100%',
            }}>
                <img src={props.imageURL} alt={props.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Grid>
            <Grid item xs={9}>
                <div>
                    <h3>{props.name} - {props.leader}</h3>
                    <p>{props.description}</p>
                </div>
            </Grid>
            
        </Grid>
    )
}

export default ProjectCard;