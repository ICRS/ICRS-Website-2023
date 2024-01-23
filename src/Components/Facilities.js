import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
const Image = styled('img')({
  width: '100%',
  height: 'auto',
});

function Facilities() {
  const facilities = [
    {
      title: "Robotics lab",
      image: "url_to_image_1",
      description: "how soldering stations and oscilloscopes"
    },{
      title: "3D printers",
      image: "url_to_image_1",
      description: "photo of printers and general use policy"
    },{
      title: "Laser Cutter",
      image: "url_to_image_1",
      description: "Description for facility 1"
    },
    // Add more facilities as needed
  ];

  return (
    <div>
        <Card sx={{ backgroundColor:'#0084FF', paddingY:'50px' }}>
            <Typography variant="h3" color="white" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} align="center">
            Facilities & Services

        </Typography>
            <hr style={{borderColor:'white', width:'20%',height:'5px', backgroundColor:'white', borderStyle:'none'}}/>

        </Card>
        
        <div style={{padding:"20px"}}>
        {facilities.map((facility, index) => (
            <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="h6" component="div" fullWidth>
                {facility.title}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={2}>
                <Image src={facility.image} alt={facility.title} />
                </Grid>
                <Grid item xs={12} lg={10}>
                <Typography>{facility.description}</Typography>
                </Grid>
            </Grid>
            </Box>
        ))}
        </div>
        <div>
            <Typography variant="h5" color="black" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} align="center">
                Services
            </Typography>
            <Typography variant="h6" color="black" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} align="center">
                In addition to the facilities, we also offer the following services to other societies:
            </Typography>
        </div>
    </div>
  );
}

export default Facilities;