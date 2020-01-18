import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
  coverBackground: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '40vh',
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      minHeight: '40.1em',
    },
  },
  coverPadding: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '200px',
      marginRight: '200px',
    },
  },
  statsColumnContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3em',
    [theme.breakpoints.down('md')]: {
      padding: '2em',
    },
  },
  statsText: {
    color: 'black',
    fontWeight: 300,
    [theme.breakpoints.down('md')]: {
      paddingLeft: '30px',
      paddingRight: '30px',
      textAlign: 'center',
    },
  },
  statsTextTitle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 300,
    paddingTop: '2em',
  },
  statsTextSubtitle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 300,
    paddingTop: '0.5em',
  },
  testimonialImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    justifyContent: 'center',
  },
  statsIcon: {
    color: theme.palette.primary.main,
    transform: 'scale(2.3)',
  },
  statsGrid: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'row',
    },
  }
});

export default function Stats() {
    const classes = useStyles();

    return (
      <>
        <div className={classes.coverBackground}>
            <div className={classes.coverPadding}>
              <Grid container spacing={6} className={classes.statsGrid}>
                <Grid item xs={4}>
                  <div className={classes.statsColumnContainer}>
                    <ScheduleIcon className={classes.statsIcon}/>
                    <Typography className={classes.statsTextTitle} component="h2" variant="h5">
                      9 hours
                    </Typography>
                    <Typography className={classes.statsTextSubtitle} variant="body1">
                      The time people spend consuming media on social platforms each day.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.statsColumnContainer}>
                    <SentimentDissatisfiedIcon className={classes.statsIcon}/>
                    <Typography className={classes.statsTextTitle} component="h2" variant="h5">
                      1 in 4
                    </Typography>
                    <Typography className={classes.statsTextSubtitle} variant="body1">
                      People experience mental health problems each year.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.statsColumnContainer}>
                    <SupervisedUserCircleIcon className={classes.statsIcon}/>
                    <Typography className={classes.statsTextTitle} component="h2" variant="h5">
                      Quantity > Quality
                    </Typography>
                    <Typography className={classes.statsTextSubtitle} variant="body1">
                      Apps today promote extensive friend lists over of high quality relationships.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
        </div>
      </>
    );
}