import React from 'react';
import Cover from './Cover';
import CoreFeature from './CoreFeature';
import SignUpForm from './SignUpForm';
import Footer from './Footer';
import joyage from '../../assets/joyage.png';
import notifications from '../../assets/notifications.png';

const data = [
  {
    title: '1. Goal Setting',
    body: 'See more friends each week by setting a personalised social goal called a Joyage. For introverts, extroverts & not-a-lot-of-time-troverts, choose a cadence that works for you.',
    imageSrc: joyage,
    imageAlt: 'goals',
  },
  {
    title: '2. Reminders',
    body: "We'll send you tailored reminders to prompt you to meet your Joyage goal. This enables you to see more of the people you care about for activities you'll never forget.",
    imageSrc: notifications,
    imageAlt: 'notifications',
  }
];

export default function Home() {
  return (
    <>
      <Cover/>
        {data.map((item, index) => (
          <CoreFeature
            key={index}
            title={item.title}
            body={item.body}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
         />
        ))}
      <SignUpForm/>
      <Footer/>
    </>
  );
}