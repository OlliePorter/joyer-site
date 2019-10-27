import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
      minHeight: '959px',
      paddingTop: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
});


export default function Features() {
  const classes = useStyles();

    return (
    <>
      <div className={classes.featureContainer}>
      <Typography component="h1" variant="subtitle" align="center" className={classes.title}>
        It's simple...
      </Typography>
      <Typography component="p" align="center" className={classes.subtitle}>
        Just Optimise Your Everyday Relationships.
      </Typography>
      </div>
    </>
    );
}
