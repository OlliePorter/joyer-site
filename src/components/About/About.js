import React from 'react';
import Typography from '@material-ui/core/Typography';
import Cover from './Cover'
import MissionBio from './MissionBio'
import Stats from './Stats'
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

export default function About() {
    return (
    <>
      <Cover/>
      <MissionBio/>
      <Stats/>
    </>
    );
}
