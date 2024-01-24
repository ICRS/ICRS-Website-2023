import React from 'react';
import { Link, Box, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', height: '100px', backgroundColor:'lightgray' }}>
                <Grid container justifyContent="space-around">
                    <Grid item  size="3x">
                        <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faDiscord} size="3x" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook}  size="3x" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram}  size="3x" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXTwitter}  size="3x" />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    );
};

export default Footer;