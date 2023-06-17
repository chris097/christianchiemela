import React from 'react';
import BackgroundSvg from '@/assets/svg/BackgroundSvg'
import Card from '@/components/Card/ProjectCard'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Head from 'next/head'

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Christian Chiemela | Portfolio</title>
        <meta name="description" content="Christian Chiemela portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/me.jpeg" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,301,701,300,501,401,400&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap" rel="stylesheet" />
      </Head>
      <main className='relative font-font-clash'>
        <Header />
        <div className='relative font-font-satoshi'>
          <BackgroundSvg />
          <div className='h-auto pt-36 w-[80%] mx-auto'>
            <div className='font-font-clash'>
              <h1 className='text-2xl'>Hello,</h1>
              <p className='xl:text-6xl lg:text-5xl text-4xl mt-4 font-medium'>Welcome to my project hub</p>
            </div>
            <div className='mt-10 mb-28'>
              <Card />
            </div>
          </div>
        <Footer />
        </div>
      </main>
    </>
  )
}

export default Portfolio