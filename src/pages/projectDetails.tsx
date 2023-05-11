import BackgroundSvg from '@/assets/svg/BackgroundSvg';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Head from 'next/head';
import React from 'react';

const projectDetails = () => {
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
      <main>
        <Header />
        <div className='pt-36 mx-auto w-[80%] h-screen relative'>
          <BackgroundSvg />
          <div className='flex gap-8'>
            <div className='flex-1'>
              <div className='flex flex-col h-[500px] justify-center font-font-clash'>
                <h2 className='text-3xl font-medium'>Cov19Strain</h2>
                <p className='mt-2 text-xl'>ov19Strain tracker is an application that help you keep tracks of covid-19 situation locality and even beyond your locality. This application will teach/guide you to prevent yourself from been infected.</p>
                <div className='mt-6 flex gap-4 flex-wrap'>
                  <div className='border w-32 flex bg-gray-800/60 border-gray-600 justify-center'>Javasript</div>
                  <div className='border w-32 flex bg-gray-800/60 border-gray-600 justify-center'>React.Js</div>
                  <div className='border w-32 flex bg-gray-800/60 border-gray-600 justify-center'>TailwindCSS</div>
                  <div className='border w-32 flex bg-gray-800/60 border-gray-600 justify-center'>API</div>
                  <div className='border w-32 flex bg-gray-800/60 border-gray-600 justify-center'>Flutterwave</div>
                  <div className='border w-32 flex bg-gray-800/60 border-gray-600 justify-center'>CSS3</div>
                </div>
              </div>
            </div>
            <div className='flex-1 border h-[500px]'>blocka</div>
          </div>
        </div>
        <Footer />
      </main>
    </>

  )
}

export default projectDetails