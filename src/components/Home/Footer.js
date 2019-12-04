import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from '../../theme';

const useStyles = makeStyles({
  footerStyle: {
    backgroundColor: theme.palette.footer.dark,
    textAlign: "center",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "auto",
    width: "100%",
  },
  phantomStyle: {
    display: 'block',
    height: 'auto',
    width: "100%",
  },
  testimonialColumnContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '20px',
    width: "100%",
  },
  testimonialTextTitle: {
    color: 'white',
    fontWeight: 400,
    padding: '15px',
    textAlign: 'left',
    paddingLeft: '60px',
  },
  testimonialTextSubtitle: {
    color: 'white',
    fontWeight: 300,
    paddingLeft: '15px',
  },
  testimonialBorder: {
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    width: '80%',
    alignSelf: 'center',
  }
});

export default function Footer() {
  const classes = useStyles();

    return (
      <div className={classes.phantomStyle}>
        <div className={classes.footerStyle}>
        <Grid container spacing={12} align="">
          <Grid item xs={4}>
            <div className={classes.testimonialColumnContainer}>
              <Typography className={classes.testimonialTextTitle} variant="body1">
                Connect
              </Typography>
              <div className={classes.testimonialBorder}></div>
              <Typography className={classes.testimonialTextSubtitle} variant="body1">
                Early Joyager
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.testimonialColumnContainer}>
              <Typography className={classes.testimonialTextTitle} variant="body1">
                Contact Info
              </Typography>
              <div className={classes.testimonialBorder}></div>
              <Typography className={classes.testimonialTextSubtitle} variant="body1">
                Early Joyager
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.testimonialColumnContainer}>
              <Typography className={classes.testimonialTextTitle} component="subtitle1">
                Legal
              </Typography>
              <div className={classes.testimonialBorder}></div>
              <Typography className={classes.testimonialTextSubtitle} variant="subtitle1">
                Early Joyager
              </Typography>
            </div>
          </Grid>
        </Grid>
        </div>
      </div>
    );
}
