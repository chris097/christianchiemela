import React from 'react';
import BackgroundSvg from '@/assets/svg/BackgroundSvg';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Head from 'next/head';
import Image from 'next/image';
import soccerwiz from '@/assets/images/soccerwiz.png';
import { projects } from '@/helpers/data';
import { useRouter } from 'next/router';

const projectDetails = () => {

  const {id}:any = useRouter().query;

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
          <div className='flex gap-8 items-center'>
            <div className='flex-1'>
              <div className='flex flex-col h-[500px] justify-center font-font-clash'>
                <h2 className='text-3xl font-medium'>{projects[id]?.name}</h2>
                <p className='mt-2 text-xl'>{projects[id]?.description}</p>
                <div className='mt-6 flex gap-4 flex-wrap'>
                  {projects[id]?.metadata?.map((data, index) => (
                    <div
                      key={index}
                      className='border w-32 flex bg-gray-800/60 border-gray-600 justify-center'>{data}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex-1 border h-[300px] bg-black z-40'>
              <Image className='w-full h-full bg-cover object-fill ' src={soccerwiz} alt="project image" />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>

  )
}

export default projectDetails