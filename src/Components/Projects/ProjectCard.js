import React from 'react';
import Grid from '@mui/material/Grid';

const ProjectCard = (props) => {
    console.log(props)
    return (
        <Grid container>
            <Grid item xs={3}>
                <img src={props.imageURL} alt={props.name} />
            </Grid>
            <Grid item xs={9}>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
            </Grid>
            
        </Grid>
    )
}

export default ProjectCard;