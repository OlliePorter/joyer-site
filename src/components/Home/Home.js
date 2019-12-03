import React from 'react';
import Cover from './Cover';
import Features from './Features';
import Testimonials from './Testimonials';
import SignUpForm from './SignUpForm';
import Footer from './Footer';

export default function Home() {
    return (
    <>
      <Cover/>
      <Features/>
      <Testimonials/>
      <SignUpForm/>
      <Footer/>
    </>
    );
}
