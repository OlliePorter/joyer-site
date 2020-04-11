import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import SpeechBubble from './SpeechBubble'

const useStyles = makeStyles({
    title: {
      color: theme.palette.primary.light,
      fontWeight: 300,
      margin: '20px',
      [theme.breakpoints.down('md')]: {
        margin: '30px',
        paddingTop: '15px',
      },
    },
    subtitle: {
      color: theme.palette.primary.light,
      padding: '8px',
      fontWeight: 300,
      width: '60%',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      },
    },
    heroContent: {
      backgroundImage: 'url(/joyer-group.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '80vh',
      [theme.breakpoints.down('sm')]: {
        minHeight: '95vh',
      },
    },
    heroOverlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        minHeight: '95vh',
      },
    },
});

export default function Cover() {
  const classes = useStyles();

    return (
    <>
      <div className={classes.heroContent}>
        <div className={classes.heroOverlay}>
          <Typography component="h2" variant="h3" align="center" className={classes.title}>
            The Personal CRM. Reimagined.
          </Typography>
          <Typography component="h2" variant="h6" align="center" className={classes.subtitle}>
            JOYER is a wellbeing app for building high quality social connections. It’s the best way to maintain strong relationships and bring balance to your headspace.
          </Typography>
          <SpeechBubble title={"'I feel so much closer to my friends after using this app.'"} imageLink={"'/deanna.jpeg'"}/>
          <SpeechBubble/>
          <SpeechBubble/>
        </div>
      </div>
    </>
    );
}
