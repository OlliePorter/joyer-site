import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
    innerContainer: {
      flexGrow: 1,
      textAlign: 'center',
      marginTop: '100px',
    },
    featureText: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    featureImage: {
      marginLeft: 'auto',
      marginRight: 'auto',
    }
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
      <div className={classes.innerContainer}>
      <Grid container>
         <Grid item xs>
           <Typography className={classes.featureText}>It's simple...</Typography>
         </Grid>
         <Grid item xs>
           <Iphone className={classes.featureImage} />
         </Grid>
         <Grid item xs>
           <Typography className={classes.featureText}>It's simple...</Typography>
         </Grid>
       </Grid>
       </div>
       <div>
         </div>
      </div>
    </>
    );
}
