import React from 'react';
import Cover from './Cover';
import Features from './Features';
import Testimonials from './Testimonials';
import SignUpForm from './SignUpForm';
import Footer from './Footer';
import NavBar from '../NavBar/NavBar';

export default function Home() {
    return (
    <>
      <NavBar/>
      <Cover/>
      <Features/>
      <Testimonials/>
      <SignUpForm/>
      <Footer/>
    </>
    );
}
