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
        fontSize: '37px',
        margin: '30px',
        paddingTop: '15px',
      },
    },
    subtitle: {
      color: theme.palette.primary.light,
      padding: '8px',
      fontWeight: 300,
      width: '60%',
      paddingBottom: '8em',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
        paddingBottom: '0',
      },
    },
    heroContent: {
      backgroundImage: 'url(/digital-chat-guy-alt.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '80vh',
      [theme.breakpoints.down('sm')]: {
        minHeight: '1200px',
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
        minHeight: '1200px',
      },
    },
    speechContainer: {
      width: '70%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: '10px',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
        bottom: '-60px',
      },
      [theme.breakpoints.down('md')]: {
        width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
      },
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
      },
    }
});

export default function Cover() {
  const classes = useStyles();

    return (
    <>
      <div className={classes.heroContent}>
        <div className={classes.heroOverlay}>
          <Typography component="h2" variant="h3" align="center" className={classes.title}>
            Stay Connected During Covid.
          </Typography>
          <Typography component="h2" variant="h6" align="center" className={classes.subtitle}>
            JOYER is a wellbeing app for building high quality social connections. It’s the best way to maintain strong relationships and bring balance to your headspace.
          </Typography>
          <div className={classes.speechContainer}>
            <SpeechBubble title={'"I feel so much closer to my friends after using this app."'} imageLink={"/deanna.jpeg"}/>
            <SpeechBubble title={'"I love being able to send discounted gifts to my Clan members."'} imageLink={"/francis.jpeg"}/>
            <SpeechBubble title={'"It\'s so easy to stay in touch thanks to personalised reminders. "'} imageLink={"/oleg.jpeg"}/>
          </div>
        </div>
      </div>
    </>
    );
}
