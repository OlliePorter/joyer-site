import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';

const useStyles = makeStyles({
  title: {
    color: theme.palette.primary.light,
    fontWeight: 300,
    margin: '20px'
  },
  subtitle: {
    color: theme.palette.primary.light,
    padding: '8px',
    fontWeight: 300,
    width: '60%',
  },
  heroContent: {
    backgroundImage: 'url(/joyer-group.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '80vh',
  },
});

export default function About() {
  const classes = useStyles();

    return (
    <>
      <div className={classes.heroContent}>
        <Typography component="h2" variant="h3" align="center" className={classes.title}>
          Our Mission:
        </Typography>
        <Typography component="h2" variant="h6" align="center" className={classes.subtitle}>
        Promote collective wellbeing through stronger, healthier relationships.
        </Typography>
      </div>
    </>
    );
}
