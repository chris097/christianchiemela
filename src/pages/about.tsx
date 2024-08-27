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
import taxtech from '@/assets/images/taxtech.png';

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
        <span className="absolute bg-gray-500 -left-28 -top-28 rounded-full opacity-[20%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
        <div className='relative py-36 w-[80%] mx-auto'>
          <div className='font-font-clash'>
            <h1 className='text-2xl'>Hello,</h1>
            <p className='xl:text-6xl lg:text-5xl text-4xl mt-4 font-medium'>My Journey in Tech Community</p>
            <p className='lg:text-2xl text-lg mt-10 leading-normal'>With extensive experience as a software developer, I’ve honed my skills in JavaScript, HTML5, CSS3, ReactJS, TypeScript, NodeJS, NextJS, Goland, React Native, and TailwindCSS. I excel in problem-solving, project management, and driving initiatives with a high level of expertise. In my previous roles, I have significantly contributed to team success and business growth through effective problem-solving, teamwork, and Agile methodologies.

              I stay attuned to the latest industry advancements, with a strong track record of leadership and collaboration. I thrive in collaborative environments, where I lead and coordinate efforts to achieve shared goals.</p>
            {/* <Image className='w-full h-[600px] object-fill bg-no-repeat' src={me} alt="personal" /> */}
            <p className='lg:text-2xl mt-5 leading-normal text-lg'>I am forward-thinking and stay attuned to the latest advancements in my field, with a strong track record of leadership and collaboration. I thrive in collective brainstorming sessions, where I coordinate activities to achieve shared goals.</p>
          </div>
          <h3 className='xl:text-6xl lg:text-5xl text-2xl mt-16 font-medium font-font-clash'>Highlights Experiences</h3>
          <Experience
            logo={<Image className='mt-7 w-80 h-12' width={400} height={400} src={taxtech} alt='taxtech' />}
            name='Taxtech'
            startDate='SINCE JAN 2024'
            endDate='PRESENT'
            position='Lead Mobile and Frontend Developer'
            description={`
              Collaborate with a team of developers, product managers, and designers to build the OredoPay web and mobile applications, a comprehensive taxpayer platform for Oredo Local Government in Nigeria.
•Contribute to strategic planning and decision-making processes, leveraging technical expertise and industry insights to drive product innovation and business growth.
•Conduct code reviews, testing, and debugging to maintain high-quality code standards and optimize application performance.
•Contribute to ongoing development and refinement of OredoPay, incorporating user feedback and industry best practices to drive innovation and excellence in the product offering.
            `}
          />
          <Experience
            logo={<Yep />}
            name='Yep! Pay'
            startDate='SINCE MARCH 2022'
            endDate='APRIL 2023'
            position='Mid Frontend Developer'
            description={`
              Collaborated with Yep! team to develop apayment wallet solution for businesses, incorporating user-friendlyinterfaces and seamless payment functionalities.
Defined project goals, timelines, and deliverables, ensuring alignment with business objectives and client requirements. Developed and implemented fronted architecture and coding standards, promoting best practices and maintaining code quality and consistency across the application.
•Contributed to strategic planning and decision-making processes, leveraging technical expertise and industry insights to drive product innovation and business growth
            `}
          />
          <Experience
            logo={<Esoft />}
            name='esoft Responses'
            startDate='SINCE APRIL 2021'
            endDate='MARCH 2022'
            position='Junior Frontend Developer'
            description={`
            Spearheaded the development of a comprehensive church application from inception to deployment, incorporating features such a s event calendars,s e r m o n archives, and online donations.
olmolemented user-friendly interfaces using modern front-end technologies such as Reactis and tailored the application to
              Spearheaded the development of a comprehensive church application from inception to deployment, incorporating features such a s event calendars, sermon archives, and online donations.
•Implemented user-friendly interfaces using modern front-end technologies such as React.js and tailored the application to provide seamless experiences across devices.
•Conducted thorough testing and debugging throughout the development lifecycle to identify and address issues promptly, ensuring a reliable and high-performance application.
•Collaborated closely with stakeholders, including church leadership and members, to gather requirements and ensure alignment with the organization's mission and goals.
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