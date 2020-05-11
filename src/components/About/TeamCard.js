import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import theme from '../../theme';

const useStyles = makeStyles({
  card: {
    boxShadow: "0 0 20px -2px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    [theme.breakpoints.down('sm')]: {
      marginBottom: '40px',
      width: '90vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: '50vw',
    },
    [theme.breakpoints.up('md')]: {
      width: 290,
    },
    [theme.breakpoints.up('lg')]: {
      width: 380,
    },
  },
  media: {
    [theme.breakpoints.down('sm')]: {
      height: 350,
    },
    [theme.breakpoints.up('md')]: {
      height: 300,
    },
    [theme.breakpoints.up('lg')]: {
      height: 420,
    },
  },
  cardIcon: {
    opacity: 0.3,
    width: '20px',
    "&:hover": {
      opacity: 1,
      color: theme.palette.primary.main
    },
  },
  nameStyle: {
    color: theme.palette.primary.main,
  },
  titleStyle: {
    fontWeight: '300',
  },
  bioStyle: {
    fontWeight: '300',
  }
});

export default function TeamCard(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image_url}
          title="Team profile icon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.nameStyle}>
            {props.name}
          </Typography>
          <Typography gutterBottom component="p" className={classes.titleStyle}>
            {props.title}
          </Typography>
          <Typography color="textSecondary" component="p" className={classes.bioStyle}>
            {props.bio}
          </Typography>
        </CardContent>
        <CardActions>
          <TwitterIcon className={classes.cardIcon} onClick={()=> window.open(`${props.twitter_link}`, "_blank")}/>
          <LinkedInIcon className={classes.cardIcon} onClick={()=> window.open(`${props.linked_in_link}`, "_blank")}/>
        </CardActions>
      </Card>
    );
  }