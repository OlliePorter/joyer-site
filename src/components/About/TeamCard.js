import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import theme from '../../theme';

const useStyles = makeStyles({
  card: {
    maxWidth: 380,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '40px',
    },
  },
  media: {
    height: 420,
    [theme.breakpoints.down('sm')]: {
      height: 280,
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