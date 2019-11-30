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
  testimonialRowContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingRight: '120px',
    paddingTop: '20px',
  },
  testimonialColumnContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  testimonialText: {
    color: 'white',
    paddingLeft: '120px',
    paddingRight: '120px',
    textAlign: 'left',
    fontWeight: 300,
  },
  testimonialTextTitle: {
    color: 'white',
    textAlign: 'left',
    fontWeight: 400,
    paddingLeft: '15px',
  },
  testimonialTextSubtitle: {
    color: 'white',
    textAlign: 'left',
    fontWeight: 300,
    paddingLeft: '15px',
  },
  testimonialImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    marginLeft: '20px',
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
              <Typography className={classes.testimonialText} variant="h6">
                "I feel so much closer to my friends after downloading this app. Go JOYER!"
              </Typography>
              <div className={classes.testimonialRowContainer}>
                <img src={'/lucy_f.jpg'} alt="Female Image" className={classes.testimonialImage}/>
                <div className={classes.testimonialColumnContainer}>
                  <Typography className={classes.testimonialTextTitle} variant="body1">
                    Lucy F
                  </Typography>
                  <Typography className={classes.testimonialTextSubtitle} variant="body1">
                    Early Joyager
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.testimonialText} variant="h6">
                "I love being able to set reminders to catch up with my network."
              </Typography>
              <div className={classes.testimonialRowContainer}>
                <img src={'/frederick_s.jpg'} alt="Female Image" className={classes.testimonialImage}/>
                <div className={classes.testimonialColumnContainer}>
                  <Typography className={classes.testimonialTextTitle} variant="body1">
                    Frederick S
                  </Typography>
                  <Typography className={classes.testimonialTextSubtitle} variant="body1">
                    Early Joyager
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.testimonialText} variant="h6">
                "Joy Coins are great! Hands down the best way to earn money off food and drinks."
              </Typography>
              <div className={classes.testimonialRowContainer}>
                <img src={'/gabbie_h.jpg'} alt="Female Image" className={classes.testimonialImage}/>
                <div className={classes.testimonialColumnContainer}>
                  <Typography className={classes.testimonialTextTitle} variant="body1">
                    Gabbie H
                  </Typography>
                  <Typography className={classes.testimonialTextSubtitle} variant="body1">
                    Early Joyager
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
