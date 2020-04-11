import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
testimonialImage: {
    margin: '30px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px white solid',
    },
    speechContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    },
    speechSquare: {
    background: 'white',
    width: '300px',
    height: '80px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    },
    speechCircle: {
    background: 'white',
    width: '30px',
    height: '30px',
    borderRadius: '100%',
    marginTop: '-20px',
    },
    speechText: {
    padding: '10px',
    }
});

export default function SpeechBubble(props) {
const classes = useStyles();

    return (
    <div className={classes.speechContainer}>
        <div className={classes.speechSquare}>
            <Typography className={classes.speechText}>
                {props.title}
            </Typography>
        </div>
        <div className={classes.speechCircle}></div>
        <img src={'/deanna.jpeg'} alt="Image of female" className={classes.testimonialImage}/>
    </div>
    );
}