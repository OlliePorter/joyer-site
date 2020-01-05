import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
  teamBackground: {
    backgroundColor: theme.palette.primary.altLight,
    padding: '3em',
  },
  title: {
    color: theme.palette.primary.altDark,
    fontWeight: 300,
    margin: '20px',
  },
});

export default function Team() {
  const classes = useStyles();

    return (
    <div className={classes.teamBackground}>
      <Typography component="h2" variant="h4" align="center" className={classes.title}>
        Our Team
      </Typography>
    </div>
    );
}
