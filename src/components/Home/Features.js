import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TodayIcon from '@material-ui/icons/Today';
import RestoreIcon from '@material-ui/icons/Restore';
import Grid from '@material-ui/core/Grid';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { ReactComponent as Iphone } from '../../assets/iphone.svg';
import theme from '../../theme';

const useStyles = makeStyles({
    title: {
      color: theme.palette.secondary.dark,
      fontWeight: 300,
      padding: '10px'
    },
    subtitle: {
      color: theme.palette.secondary.dark,
      padding: '8px',
      fontWeight: 300,
    },
    featureContainer: {
      backgroundColor: theme.palette.secondary.light,
      padding: '100px',
      overflowX: 'hidden',
    },
    featurePadding: {
      paddingBottom: '20px',
    },
    featureIcon: {
      color: 'black',
      transform: 'scale(1.5)',
      paddingTop: '20px',
      paddingLeft: '20px',
    },
    featureRow: {
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: '10px',
    }
});

export default function Features() {
  const classes = useStyles();

    return (
    <>
      <div className={classes.featureContainer}>
        <Grid container spacing={10} align="center" className={classes.featureGrid}>
          <Grid item xs={12}>
            <Typography component="h2" variant="h4" className={classes.title}>
            It's simple...
            </Typography>
            <Typography component="p" className={classes.subtitle}>
            Just Optimise Your Everyday Relationships.
            </Typography>
          </Grid>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.featureRow}>
              <div>
                <Typography component="h2" variant="h5" className={classes.title} align="right">
                Start your Joyage
                </Typography>
                <Typography component="p" className={classes.subtitle} align="right">
                It all starts with your personalised social journey (or 'Joyage'). Navigate weekly challenges in your Joyage to see more friends & earn rewards.
                </Typography>
              </div>
              <div>
                <DirectionsBoatIcon className={classes.featureIcon}/>
              </div>
            </div>
            <div className={classes.featureRow}>
              <div>
                <Typography component="h2" variant="h5" className={classes.title} align="right">
                Reminders, notes & scheduling
                </Typography>
                <Typography component="p" className={classes.subtitle} align="right">
                Never miss a beat with notes, reminders and scheduling. You'll get a nudge when you need to check in with friends or meet up with someone special.
                </Typography>
              </div>
              <div>
                <TodayIcon className={classes.featureIcon}/>
              </div>
            </div>
            <div className={classes.featureRow}>
              <div>
                <Typography component="h2" variant="h5" className={classes.title} align="right">
                Expert recall
                </Typography>
                <Typography component="p" className={classes.subtitle} align="right">
                Stay on top of every small detail, from important conversation topics to the name of that new acquaintance.
                </Typography>
              </div>
              <div>
                <RestoreIcon className={classes.featureIcon}/>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} align="center">
            <Iphone/>
          </Grid>
          <Grid item xs={3}>
          <div className={classes.featureRow}>
            <div>
              <Typography component="h2" variant="h5" className={classes.title} align="right">
              Curated Moments
              </Typography>
              <Typography component="p" className={classes.subtitle} align="right">
              We'll propose tailor made activities for you and your friends based upon your interests and what's nearby. Make your Moments unforgettable.
              </Typography>
            </div>
            <div>
              <FavoriteIcon className={classes.featureIcon}/>
            </div>
          </div>
          <div className={classes.featureRow}>
            <div>
              <Typography component="h2" variant="h5" className={classes.title} align="right">
              Earn Joy Coin
              </Typography>
              <Typography component="p" className={classes.subtitle} align="right">
              Collect reward points after every social interaction through JOYER to access discounts with our partners. Take your pick from a magical coffee or an artisan cocktail.
              </Typography>
            </div>
            <div>
              <MonetizationOnIcon className={classes.featureIcon}/>
            </div>
          </div>
          <div className={classes.featureRow}>
            <div>
              <Typography component="h2" variant="h5" className={classes.title} align="right">
              For everyone
              </Typography>
              <Typography component="p" className={classes.subtitle} align="right">
              For introverts, extroverts & not-a-lot-of-time-troverts. JOYER is the greatest tool in anyone's social arsenal.
              </Typography>
            </div>
            <div>
              <SupervisorAccountIcon className={classes.featureIcon}/>
            </div>
          </div>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
      </div>
    </>
    );
}