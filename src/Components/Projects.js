import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Typography";
import ProjectCard from "./Projects/ProjectCard"
function Projects() {
  var projectList = [
    {name: 'Project 1', leader:'', description: 'robotics 101', imageURL: 'http://'},
  ]
  return (
    <div className="Projects" sx={{margin:0}} >
      <Typography variant="h3" color="black" sx={{flexGrow:1}} align='center'>
        
      </Typography>
      <Grid container>
      {projectList.map((project, index) => (
          <Grid item xs={12} md={4}>
            <ProjectCard props={project} key={index} />
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
}

export default Projects;
