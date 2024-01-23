import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Typography";
import ProjectCard from "./Projects/ProjectCard"
function Projects() {
  var projectList = [
    {name: 'Project 1', leader:'Hoatian', description: 'robotics 101', imageURL: 'images/image1.jpeg'},
    {name: 'Project 1', leader:'Hoatian', description: 'robotics 101', imageURL: 'images/image1.jpeg'},
    {name: 'Project 1', leader:'Hoatian', description: 'robotics 101', imageURL: 'images/image1.jpeg'},
    {name: 'Project 1', leader:'Hoatian', description: 'robotics 101', imageURL: 'images/image1.jpeg'},
  ]
  return (
    <div className="Projects" sx={{ margin:0 }} >
      <Typography variant="h3" color="black" sx={{flexGrow:1}} align='center'>
        All the cool projects going on in the society
      </Typography>
      <Grid container sx={{paddingX:'20%'}}>
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
