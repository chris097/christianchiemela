import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import me from '@/assets/images/me.jpeg';
import Head from 'next/head';
import Image from 'next/image';
import Experience from '@/components/sections/Experience';
import Yabacon from '@/assets/svg/Yabacon';
import Yep from '@/assets/svg/Yep';
import Esoft from '@/assets/svg/Esl';
import Esca from '@/assets/svg/Esca';

const About = () => {
  return (
    <>
       <Head>
        <title>Christian Chiemela | About page</title>
        <meta name="description" content="Christian Chiemela about page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/me.jpeg" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,301,701,300,501,401,400&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Header />
        <div className='relative py-36 w-[80%] mx-auto'>
            <div className='font-font-clash'>
              <h1 className='text-2xl'>Hello,</h1>
            <p className='xl:text-6xl lg:text-5xl text-4xl mt-4 font-medium'>My Journey in Tech Community</p>
            <p className='lg:text-2xl text-lg mt-10 leading-normal'>Throughout the course of my career, I have perfected my Javascript, HTML5, CSS3, ReactJS, Typescript, NodeJS and TailwindCSS abilities. I am a capable and consistent problem-solver skilled at prioritising and managing projects with proficiency. In my previous role, I contributed problem-solving, teamwork, and Agile development toward team efforts and business improvements. I am progressive minded and in tune with new developments in my field. I have proven to be effective and collaborative with strong leadership talents. I enjoy collective brainstorming sessions which all me to coordinate activities to achieve a common goal.</p>
            {/* <Image className='w-full h-[600px] object-fill bg-no-repeat' src={me} alt="personal" /> */}
            <p className='lg:text-2xl mt-5 leading-normal text-lg'>I'm Christian Chiemela a frontend developer with almost 3years of experience in building simple and complex application for companies and individuals, a Nigerian based in Lagos.</p>
          </div>
          <h3 className='xl:text-6xl lg:text-5xl text-4xl mt-16 font-medium font-font-clash'>Highlights Experiences</h3>
          <Experience
            logo={<Yabacon />}
            name='Yabacon'
            startDate='SINCE MAY 2023'
            endDate='PRESENT'
            position='Lead Frontend Developer'
            description={`
              Gained strong leadership skills by managing projects from start to finish.
              Managed time efficiently in order to complete all tasks within deadlines.
              Skilled at working independently and collaboratively in a team environment.
            `}
          />
          <Experience
            logo={<Yep />}
            name='Yep! Pay'
            startDate='SINCE MARCH 2022'
            endDate='APRIL 2023'
            position='Mid Frontend Developer'
            description={`
              Work closely with designers and project managers to implement the best UX possible.
              Actively participate in all processes of Agile development.
              Write clean and maintainable code by using best practices.
            `}
          />
          <Experience
            logo={<Esoft />}
            name='esoft Responses'
            startDate='SINCE APRIL 2021'
            endDate='MARCH 2022'
            position='Junior Frontend Developer'
            description={`
              Work in Agile development to meet deadlines.
              Build complex UI components in Agile Development.
            `}
          />
          <Experience
            logo={<Esca />}
            name='Esca Menu'
            startDate='SINCE SEPT 2020'
            endDate='MARCH 2021'
            position='Intern Frontend Developer'
            description={`
              Learnt code review by providing constructive feedback.
              Wrote clean and maintainable code by using best practices.
            `}
          />
          </div>
        <Footer />
      </main>
    </>
  )
}

export default About;