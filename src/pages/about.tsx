import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import me from '@/assets/images/me.jpeg';
import Head from 'next/head';
import Image from 'next/image';

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
            <p className='text-6xl mt-4 font-medium'>My Journey in Tech Community</p>
            <p className='text-2xl mt-10 leading-normal'>Throughout the course of my career, I have perfected my Javascript, HTML5, CSS3, ReactJS, Typescript, NodeJS and TailwindCSS abilities. I am a capable and consistent problem-solver skilled at prioritising and managing projects with proficiency. In my previous role, I contributed problem-solving, teamwork, and Agile development toward team efforts and business improvements. I am progressive minded and in tune with new developments in my field. I have proven to be effective and collaborative with strong leadership talents. I enjoy collective brainstorming sessions which all me to coordinate activities to achieve a common goal.</p>
            {/* <Image className='w-full h-[600px] object-fill bg-no-repeat' src={me} alt="personal" /> */}
            <p className='text-2xl mt-5 leading-normal'>I'm Christian Chiemela a frontend developer with almost 3years of experience in building simple and complex application for companies and individuals, a Nigerian based in Lagos.</p>
            </div>
          </div>
        <Footer />
      </main>
    </>
  )
}

export default About;