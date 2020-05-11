import React from 'react';
import Typography from '@material-ui/core/Typography';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
    aboutText: {
      color: theme.palette.primary.altDark,
      padding: '1.3em',
      paddingTop: '1.6em',
      fontWeight: 300,
      width: '42%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    button: {
      width: '179px',
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      height: '52px',
      fontSize: '17px',
      borderRadius: '50px',
      textTransform: 'none',
      boxShadow: 'none',
      fontWeight: '300',
      "&:hover": {
        background: theme.palette.primary.dark,
        boxShadow: 'none',
      },
    },
    missionBackground: {
      backgroundColor: theme.palette.primary.altLight,
      paddingTop: '5em',
      paddingBottom: '5em',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        padding: '3em',
        paddingTop: '5em',
      },
    },
    circleBackground: {
      width: '100px',
      height: '100px',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    speechIcon: {
      color: theme.palette.primary.light,
      transform: 'scale(1.3)',
    }
});

export default function MissionBio() {
  const classes = useStyles();

    return (
    <>
      <div className={classes.missionBackground}>
        <div className={classes.circleBackground}>
          <ChatBubbleOutlineIcon className={classes.speechIcon}/>
        </div>
        <Typography component="p" className={classes.aboutText} align="center">
        We live in unprecedented times. In a matter of days, a global pandemic turned the world upside down and fundamentally altered our daily lives. Naturally, governments around the world enacted a social distancing policy to reduce the spread of the virus, but these new measures have already begun to adversely affect the mental health of the global population. Enter JOYER, a wellbeing app for building high quality social connections. It’s the best way to maintain strong relationships and bring balance to your headspace. We developed JOYER to become the greatest tool in everyone’s social arsenal — a personal CRM which brings us all closer to those who matter.
        </Typography>
      </div>
    </>
    );
}