import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

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
    backgroundImage: 'url(/airship.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '45vh',
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
    "&:hover": {
    background: theme.palette.primary.dark,
    },
  },
  downIcon: {
    color: 'white',
    transform: 'scale(1.5)',
    position: 'relative',
    top: '200px',
  },
});

export default function About() {
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
    </>
    );
}
