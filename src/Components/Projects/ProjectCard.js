import React from 'react';
import Grid from '@mui/material/Grid';

const ProjectCard = ({props}) => {
    console.log(props)
    return (
        <Grid container
            style={{ backgroundColor: '#0084FF', borderRadius: '10px', marginBottom: '5%' }}
        >
            <Grid item md={3} xs={6}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                height:'auto',
                width:'100%',
                
            }}>
                <img src={props.imageURL} alt={props.name} style={{ width:'100%', height:'100%', objectFit: 'fill', overflow:'hidden',  borderRadius: '5px 0px 0px 5px',}} />
            </Grid>
            <Grid item xs={6} md={9}>
                    <h3 style={{color:'white'}}>{props.name} - {props.leader}</h3>
                    <p style={{color:'white'}}>{props.description}</p>
            </Grid>
            
        </Grid>
    )
}

export default ProjectCard;