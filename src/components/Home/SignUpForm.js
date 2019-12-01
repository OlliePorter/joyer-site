import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
  title: {
    color: theme.palette.secondary.dark,
    fontWeight: 300,
    paddingTop: '100px',
    padding: '10px',
  },
  subtitle: {
    color: theme.palette.secondary.dark,
    padding: '8px',
    fontWeight: 300,
  },
});

export default function SignUpForm() {
  const classes = useStyles();

    return (
    <>
      <Typography component="h2" variant="h4" className={classes.title} align="center">
      Become a Joyager
      </Typography>
      <Typography component="p" className={classes.subtitle} align="center">
      Subscribe for the latest updates.
      </Typography>
    <form action="https://joyerapp.us20.list-manage.com/subscribe/post?u=9c4cca26d3bea1021320b9967&id=10b0082a7c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
        <div className="mc-field-group">
          <input type="text" name="FNAME" className id="mce-FNAME" placeholder="First name"/>
          <input type="text" name="LNAME" className id="mce-LNAME" placeholder="Last name"/>
        </div>
          <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Email"/>
      <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button"/>
    </form>
    </>
    );
}
