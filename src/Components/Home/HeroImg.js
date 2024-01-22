import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

const imagePath = process.env.NODE_ENV === 'production'
  ? '/ICRS-Website-2023/images/'
  : './images/'

console.log(imagePath)
const images = [
  `${imagePath}SlideShowImg1.JPG`,
  `${imagePath}SlideShowImg2.JPG`,
  `${imagePath}SlideShowImg3.JPG`,
];
console.log(images[0])
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
          alt={`${index + 1}`}
          className={classes.heroImage}
          style={{ opacity: index === currentImage ? 1 : 0 }}
        />
      ))}
    </div>
  );
};

export default HeroImage;
