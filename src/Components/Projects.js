import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Typography";
import ProjectCard from "./Projects/ProjectCard";
import Paper from "@mui/material/Card";
function Projects() {
  var projectList = [
    {name: 'Line follower', leader:'ICRS', description: 'Build a line following robot in a team and compete in the winter! You will be judged on track completion, speed and cool factor, Open to beginners and especially encouraged for people that finished 101. 🙂', imageURL: 'images/image1.jpeg'},
    {name: 'Eurobot', leader:'Hoatian', description: 'Compete in Eurobot - making an autonomous robot that accomplishes many challenging tasks! Do well and get the ICRS name out into the competition!', imageURL: 'images/image1.jpeg'},
    {name: 'RoboCup', leader:'Martin, Ben', description: 'robotics 101', imageURL: 'images/image1.jpeg'},
    {name: 'Cubesolver', leader:'Hoatian', description: 'robotics 101', imageURL: 'images/image1.jpeg'},
    {name: 'MERC', leader:'Hoatian', description: 'robotics 101', imageURL: 'images/image1.jpeg'},
    {name: 'BattleBots', leader:'Etienne', description: 'robotics 101', imageURL: 'images/image1.jpeg'},
  ]
  return (
    <div className="Projects" sx={{ margin:0 }} >
      <Paper elevation={3} sx={{ backgroundColor: '#0084FF', paddingY:5 }}>
        <Typography variant="h4" component="div" align='center' marginBottom={1} color='white'>
          Projects
        </Typography>
        <hr style={{borderColor:'white', width:'20%',height:'5px', backgroundColor:'white', borderStyle:'none'}}/>
        <Typography variant="body1" color='white' align='center' padding={2}>
          We facilitate a wide range of ambitious student-led projects that are open to all members. These projects are a great way to learn new skills and meet like-minded people. We can also provide technical support to help you get your project off the ground.
        </Typography>
      </Paper>
      <Grid container sx={{padding:'5% 5% 0 5%'}} spacing={2}>
        {projectList.map((project, index) => (
          <Grid item key={index} xs={12}>
            <ProjectCard props={project}  />
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
}

export default Projects;
