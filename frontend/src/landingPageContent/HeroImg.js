import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

const images = [
  'images/image1.jpeg',
  'images/image2.jpeg',
  'images/image3.jpeg',
];

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    position: 'relative',
    width: '100%',
    height: '400px', // Adjust the height as needed
    overflow: 'hidden',
  },
  heroImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 1s ease-in-out',
  },
}));

const HeroImage = () => {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes.heroContainer}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={classes.heroImage}
          style={{ opacity: index === currentImage ? 1 : 0 }}
        />
      ))}
    </div>
  );
};

export default HeroImage;
