import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';

const useStyles = makeStyles({
});

export default function About() {
  const classes = useStyles();

    return (
    <>
      <p>This is the about-us page</p>
    </>
    );
}
