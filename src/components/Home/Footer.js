import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
  footerStyle: {
    backgroundColor: theme.palette.footer.dark,
    textAlign: "center",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
  },
  phantomStyle: {
    display: 'block',
    height: '60px',
  }
});

export default function Footer() {
  const classes = useStyles();

    return (
      <div className={classes.phantomStyle}>
        <div className={classes.footerStyle}>
        </div>
      </div>
    );
}
