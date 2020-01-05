import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
        <Typography component="p" className={classes.aboutText}>
          We live in a hyperconnected world driven by endless chimes and beeps of continuously arriving text messages, Tweets and Facebook updates. This interconnectivity has revolutionised the way we communicate, but today many of us find it difficult to maintain close relationships with everyone in our social circle. This is because of the busyness of our daily lives, extensive social media connections and no standardised tool to promote face-to-face contact.
        </Typography>
        <Typography component="p" className={classes.aboutText}>
          We believe in a world where social still has a soul. Where the quality of our interpersonal relationships are valued higher than extensive social circles.
        </Typography>
        <Typography component="p" className={classes.aboutText}>
          JOYER is a social app which promotes the authenticity of connection through memorable offline interactions, relationship cultivation and contextual reminders. We hope you love it as much as we do.
        </Typography>
        <Button variant="contained" className={classes.button}>Find out more</Button>
      </div>
    </>
    );
}
