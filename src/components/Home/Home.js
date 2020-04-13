import React from 'react';
import Cover from './Cover';
import CoreFeature from './CoreFeature';
import SignUpForm from './SignUpForm';
import Footer from './Footer';

export default function Home() {
    return (
    <>
      <Cover/>
      <CoreFeature
      title="1. Goal Setting"
      body="See more friends each week by setting a personalised social goal called a Joyage.
      For introverts, extroverts & not-a-lot-of-time-troverts, choose a cadence that works for you."
      imageLink="iphone_joyage.svg"
      />
       <CoreFeature
      title="2. Reminders"
      body="We'll send you tailored reminders to prompt you to meet your Joyage goal. This enables
      you to see more of the people you care about for activities you'll never forget."
      imageLink="iphone_notifications.svg"
      />
      <SignUpForm/>
      <Footer/>
    </>
  );
}
