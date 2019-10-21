import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';

const useStyles = makeStyles({
    title: {
      color: theme.palette.primary.main,
    }
});

export default function About() {
  const classes = useStyles();

    return (
    <div>
        <Typography component="h1" variant="h2" align="center" className={classes.title}>
          Love Your Clan.
        </Typography>
        <p>JOYER is a wellbeing app which cultivates relationships. It's the best way to maintain strong connections and bring balance to your social headspace.</p>
    </div>
    );
}
