import React from 'react'
import BackgroundSvg from '@/assets/svg/BackgroundSvg'
import Card from '@/components/Card/ProjectCard'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Head from 'next/head'

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Christian Chiemela | Homepage</title>
        <meta name="description" content="Christian Chiemela portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,301,701,300,501,401,400&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap" rel="stylesheet" />
      </Head>
      <main className='relative font-font-clash'>
        <Header />
        <div className='relative font-font-satoshi'>
          <BackgroundSvg />
          <div className='h-screen pt-36'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-3xl'>Christian Chiemela</h1>
            </div>
            <Card />
          </div>
        <Footer />
        </div>
      </main>
    </>
  )
}

export default Portfolio