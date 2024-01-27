import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import AspectRatio from "@mui/joy/AspectRatio";

const Image = styled('img')({
  width: '100%',
  height: 'auto',
});

function Facilities() {
  const facilities = [
    {
      title: "Robotics lab",
      image: "./images/labBenches.jpg",
      description: "In the lab we have 7 workstations and free access to many different hardware components like resistors wires, nuts and bolts."
    },{
      title: "3D printers",
      image: ["./images/printStation.jpg","./images/morePrinters.jpg"],
      description: "We have many 3D printers that are available for use by members. It is free to use the printers, but we just ask that if you want to print something that takes longer than 3 hours then consult a member of committee."
    },{
      title: "Laser Cutter",
      image: "./images/deadLaserCutter.jpg",
      description: "Currently our Laser Cutter is out of action but were hoping to get that fixed soon\u2122."
    },
  ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % facilities[1].image.length);
    }, 5000);
        console.log(currentImageIndex)
    return () => clearInterval(interval);
    }, [currentImageIndex]);

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

                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Typography variant="h4" component="div" fullWidth align="center" sx={{textDecoration:'underline'}}>
                            {facility.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ backgroundColor:'white' }}>
                    <AspectRatio sx={{ backgroundColor:'white' }}>

                            <Image src={
                                Array.isArray(facility.image) ? facility.image[currentImageIndex] : facility.image
                            } alt={facility.title} sx={{ borderRadius: '10px', backgroundColor: 'white' }} />
                    </AspectRatio>
                    </Grid>
                    <Grid item xs={12} sm={8}>
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