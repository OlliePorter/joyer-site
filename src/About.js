import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';

const useStyles = makeStyles({
    title: {
      color: theme.palette.primary.light,
    },
    heroContent: {
      backgroundImage: 'url(/joyer-group.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroOverlay: {
      backgroundColor: 'blue',
      minHeight: '77vh',
    },
    button: {
      width: '179px',
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      height: '52px',
      fontSize: '17px',
      borderRadius: '50px',
      margin: '40px',
  }
});

export default function About() {
  const classes = useStyles();

    return (
    <>
      <div className={classes.heroContent}>
        <Typography component="h2" variant="h3" align="center" className={classes.title}>
          Love Your Clan.
        </Typography>
        <Typography component="h1" variant="subtitle1" align="center" className={classes.title}>
        JOYER is a wellbeing app which cultivates relationships. It's the best way to maintain strong connections and bring balance to your social headspace.
        </Typography>
        <Button variant="contained" color="secondary" className={classes.button}>Coming Soon</Button>
        <Icon>star</Icon>
      </div>
    </>
    );
}
