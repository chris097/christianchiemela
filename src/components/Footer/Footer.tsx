import React from 'react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { IoMailUnreadOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className='h-24 border-t border-gray-700/70 bg-black absolute left-0 bottom-0 w-full z-40'>
          <div className='flex flex-col h-full items-center justify-center'>
            <div className='flex gap-6 items-center justify-center'>
            <Link href=""><IoMailUnreadOutline size={20} /></Link>
            <Link href=""><AiFillLinkedin size={20} /></Link>
            <Link target='_blank' href="https://github.com/chris097"><BsGithub size={20} /></Link>
            <Link href=""><AiFillTwitterCircle size={24} /></Link>
          </div>
            <p className='text-center text-xs mt-2'>Chris097 © 2023 . All Rights Reserved Christian Chiemela</p>
          </div>
        </div>
  )
}

export default Footer