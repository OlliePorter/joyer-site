import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
  coverImage: {
    backgroundImage: 'url(/smiling.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '45vh',
  },
  coverImageOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '45vh',
    width: '100%',
    overflowX: 'hidden',
  },
  testimonialContainer: {
    // backgroundColor: 'red',
  },
  testimonialText: {
    color: 'white',
    paddingLeft: '120px',
    paddingRight: '120px',
    textAlign: 'left',
    fontWeight: 300,
  },
  testimonialImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
  }
});

export default function Testimonials() {
  const classes = useStyles();

  return(
    <>
      <div className={classes.coverImage}>
        <div className={classes.coverImageOverlay}>
          <Grid container spacing={10}>
            <Grid item xs={4}>
              <div className={classes.testimonialContainer}>
                <Typography className={classes.testimonialText} variant="h6">
                  "I feel so much closer to my friends after downloading this app. Go JOYER!"
                </Typography>
                <img src={'/lucy_f.jpg'} alt="Female Image" className={classes.testimonialImage}/>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.testimonialContainer}>
                <Typography className={classes.testimonialText} variant="h6">
                  "I love being able to set reminders to catch up with my network."
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.testimonialContainer}>
                <Typography className={classes.testimonialText} variant="h6">
                  "Blind get-togethers is such a good feature! A must download."
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
