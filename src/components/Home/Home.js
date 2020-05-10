import React from 'react';
import Cover from './Cover';
import TitleInfo from './TitleInfo';
import CoreFeature from './CoreFeature';
import SignUpForm from './SignUpForm';
import Message from './Message';
import Footer from './Footer';
import joyage from '../../assets/joyage.png';
import notifications from '../../assets/notifications.png';
import discounts from '../../assets/discounts.png';

export default function Home() {
  return (
    <>
      <Cover/>
      <TitleInfo/>
      <CoreFeature
        title={'1. Goal Setting'}
        body={'Connect digitally with more friends each week by setting a personalised social goal called a Joyage. For introverts, extroverts & not-a-lot-of-time-troverts, choose a cadence that works for you.'}
        imageSrc={joyage}
        imageAlt={'goals'}
        direction={'left'}
      />
      <CoreFeature
        title={'2. Reminders'}
        body={"We'll send you tailored reminders to prompt you to meet your Joyage goal. This enables you to see more of the people you care about for conversations you'll love to remember."}
        imageSrc={notifications}
        imageAlt={'notifications'}
        direction={'right'}
      />
      <CoreFeature
        title={'3. Discounts'}
        body={"Check in to each activity through a 'Moment' and start earning reward points for big discounts with our partners. Save on artisinal cocktails, delicious coffee and top quality dining."}
        imageSrc={discounts}
        imageAlt={'discounts'}
        direction={'left'}
      />
      <Message/>
      <SignUpForm/>
      <Footer/>
    </>
  );
}