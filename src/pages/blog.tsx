import BackgroundSvg from '@/assets/svg/BackgroundSvg'
import React from 'react';
import Article from '@/components/Article/Article'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import Image from 'next/image'
import me from "../assets/images/me.jpeg";

const blog = () => {
  return (
    <>
       <Head>
        <title>Christian Chiemela | Blog page</title>
        <meta name="description" content="Christian Chiemela blog page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/me.jpeg" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,301,701,300,501,401,400&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Header />
        <div className='font-font-clash pt-36 w-[80%] mx-auto'>
              <h1 className='text-2xl'>Hello,</h1>
              <p className='text-6xl mt-4 font-medium'>Welcome to my blog house</p>
            </div>
        <div className='w-[80%] mx-auto mt-24 relative z-40'>
        <h2 className='text-3xl'>Article</h2>
          <div className='mt-6 grid lg:grid-cols-2 grid-cols-1 gap-20 pb-10'>
           <Article />
        </div>
          </div>
        <Footer />
      </main>
    </>
  )
}

export default blog