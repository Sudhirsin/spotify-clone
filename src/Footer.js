import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div class="footer">
           <div className="footer__left">
                <img
                    className="footer__albumLogo" 
                    src="https://images.pexels.com/photos/2820876/pexels-photo-2820876.jpeg?cs=srgb&dl=pexels-daria-usanova-2820876.jpg&fm=jpg" 
                    alt="" 
                />
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div> 

           <div className="footer__center">
               <ShuffleIcon className="footer__green" />
               <SkipPreviousIcon className="footer__icon" />
               <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
               <SkipNextIcon className="footer__icon" />
               <RepeatIcon className="footer__green" />
            </div> 
           <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div> 
        </div>
    )
}

export default Footer;
