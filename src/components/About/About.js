import React from 'react';
import Cover from './Cover';
import MissionBio from './MissionBio';
import Stats from './Stats';
import Team from './Team';
import Footer from '../Home/Footer';

export default function About() {
    return (
    <>
      <Cover/>
      <MissionBio/>
      <Stats/>
      <Team/>
      <Footer/>
    </>
    );
}
