import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import React from 'react'

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
        <Footer />
      </main>
    </>
  )
}

export default blog