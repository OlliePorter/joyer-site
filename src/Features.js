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
import { ReactComponent as Iphone } from './assets/iphone.svg';
import theme from './theme';

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
      paddingTop: '100px',
      paddingBottom: '100px',
    },
    featureGrid: {
      width: '100%',
    },
    featurePadding: {
      paddingBottom: '20px',
    },
    featureIcon: {
      color: 'black',
      transform: 'scale(1.5)',
    },
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
    <Typography component="h2" variant="h5" className={classes.title} align="center">
    Start your Joyage
    </Typography>
    <DirectionsBoatIcon className={classes.featureIcon}/>
    <Typography component="p" className={classes.subtitle} align="center">
    It all starts with your personalised social journey (or 'Joyage'). Navigate weekly challenges in your Joyage to see more friends & earn rewards.
    </Typography>
    <Typography component="h2" variant="h5" className={classes.title}>
    Reminders, notes & scheduling
    </Typography>
    <TodayIcon className={classes.featureIcon}/>
    <Typography component="p" className={classes.subtitle}>
    Never miss a beat with notes, reminders and scheduling. You'll get a nudge when you need to check in with friends or meet up with someone special.
    </Typography>
    <Typography component="h2" variant="h5" className={classes.title}>
    Expert recall
    </Typography>
    <RestoreIcon className={classes.featureIcon}/>
    <Typography component="p" className={classes.subtitle}>
    Stay on top of every small detail, from important conversation topics to the name of that new acquaintance.
    </Typography>
  </Grid>
  <Grid item xs={4} align="center">
    <Iphone className={classes.featureImage} />
  </Grid>
  <Grid item xs={3}>
    <Typography component="h2" variant="h5" className={classes.title}>
    Curated Moments
    </Typography>
    <FavoriteIcon className={classes.featureIcon}/>
    <Typography component="p" className={classes.subtitle}>
    We'll propose tailor made activities for you and your friends based upon your interests and what's nearby. Make your Moments unforgettable.
    </Typography>
    <Typography component="h2" variant="h5" className={classes.title}>
    Earn Joy Coin
    </Typography>
    <MonetizationOnIcon className={classes.featureIcon}/>
    <Typography component="p" className={classes.subtitle}>
    Collect reward points after every social interaction through JOYER to access discounts with our partners. Take your pick from a magical coffee or an artisan cocktail.
    </Typography>
    <Typography component="h2" variant="h5" className={classes.title}>
    For everyone
    </Typography>
    <SupervisorAccountIcon className={classes.featureIcon}/>
    <Typography component="p" className={classes.subtitle}>
    For introverts, extroverts & not-a-lot-of-time-troverts. JOYER is the greatest tool in anyone's social arsenal.
    </Typography>
  </Grid>
  <Grid item xs={1}>
  </Grid>
</Grid>

      </div>
    </>
    );
}
