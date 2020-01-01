import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    title: {
      color: theme.palette.primary.light,
      fontWeight: 300,
      margin: '20px',
      [theme.breakpoints.down('sm')]: {
        margin: '30px',
        paddingTop: '30px',
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
    aboutText: {
      color: theme.palette.primary.altDark,
      padding: '8px',
      fontWeight: 300,
      width: '50%',
      paddingTop: '1.6em',
    },
    heroContent: {
      backgroundImage: 'url(/airship.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '45vh',
      [theme.breakpoints.down('sm')]: {
        minHeight: '80vh',
      },
    },
    heroOverlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '45vh',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        minHeight: '80vh',
      },
    },
    button: {
      width: '179px',
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      height: '52px',
      fontSize: '17px',
      borderRadius: '50px',
      margin: '30px',
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
      padding: '6em',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
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

export default function Cover() {
  const classes = useStyles();

    return (
    <>
      <div className={classes.heroContent}>
        <div className={classes.heroOverlay}>
          <Typography component="h2" variant="h3" align="center" className={classes.title}>
            Our Mission:
          </Typography>
          <Typography component="h2" variant="h6" align="center" className={classes.subtitle}>
          Promote collective wellbeing through stronger, healthier relationships.
          </Typography>
        </div>
      </div>
      <div className={classes.missionBackground}>
        <div className={classes.circleBackground}>
          <ChatBubbleOutlineIcon className={classes.speechIcon}/>
        </div>
        <Typography component="p" className={classes.aboutText}>
          We live in a hyperconnected world driven by endless chimes and beeps of continuously arriving text messages, Tweets and Facebook updates. This interconnectivity has revolutionised the way we communicate, but today many of us find it difficult to maintain close relationships with everyone in our social circle. This is because of the busyness of our daily lives, extensive social media connections and no standardised tool to promote face-to-face contact.

          We believe in a world where social still has a soul. Where the quality of our interpersonal relationships are valued higher than extensive social circles.
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
