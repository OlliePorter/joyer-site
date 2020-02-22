import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import TeamCard from './TeamCard';

const useStyles = makeStyles({
  teamBackground: {
    backgroundColor: theme.palette.primary.altLight,
    padding: '3em',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  title: {
    color: theme.palette.primary.altDark,
    fontWeight: 300,
    margin: '20px',
    paddingTop: '2em',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingTop: '1.5em',
    paddingBottom: '3.5em',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
});

export default function Team() {
  const classes = useStyles();

    return (
    <div className={classes.teamBackground}>
      <Typography component="h2" variant="h4" align="center" className={classes.title}>
        Our Team
      </Typography>
      <div className={classes.cardContainer}>
        <TeamCard image_url={process.env.PUBLIC_URL + '/ollie.jpg'} name="Ollie Porter" title="Co-Founder & CEO" bio="Ollie is a certified Product Manager with three years experience within EdTech startups. He led the Onboarding process for Makers Academy, Europe’s leading web developer bootcamp, helped to implement Gett Inc.'s aggressive European growth strategy and graduated from NEF, the UK's most prestigious business course. He’s an avid meditator and mindfulness evangelist." twitter_link="https://twitter.com/heyolpo" linked_in_link="https://www.linkedin.com/in/ollieporter/"/>
        <TeamCard image_url={process.env.PUBLIC_URL + '/yas.jpg'} name="Yas Green" title="Co-Founder & CTO" bio="Yas is a full stack Software Developer at Hex Digital with previous experience writing clean and beautiful production code for The Economist. She’s a graduate of Makers Academy, with a degree in Forensic Science. She lives and breathes problem solving through code and forming creative solutions to some of the toughest problems. She’s excited about crafting the future of social through JOYER." twitter_link="" linked_in_link="https://www.linkedin.com/in/yasmin-green-b21a84110/"/>
        <TeamCard image_url={process.env.PUBLIC_URL + '/ben.jpg'} name="Ben Depla" title="Co-Founder & COO" bio="Ben is a Project Leader and Entrepreneur by trade, with a background in sales, finance, and real estate. He’s an efficiencies aficionado who's bringing fresh insight on how to best deliver on the JOYER vision. He studied languages at the University of Bristol and is a stickler for small details. He's looking for exponential growth through optimal processes and a gratified team. Bring on the joy!" twitter_link="" linked_in_link="https://www.linkedin.com/in/benedict-depla-720a4a7b/"/>
      </div>
    </div>
    );
}
