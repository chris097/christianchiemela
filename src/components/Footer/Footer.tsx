import React from 'react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { IoMailUnreadOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className='h-24 border-t border-gray-700/70 bg-black fixed left-0 bottom-0 w-full z-40'>
          <div className='flex flex-col h-full items-center justify-center'>
            <div className='flex gap-6 items-center justify-center'>
            <Link rel='noopener noreferrer' target='_blank' href="mailto:chrisfidel.international@gmail.com"><IoMailUnreadOutline size={20} /></Link>
            <Link rel='noopener noreferrer' target='_blank' href="https://www.linkedin.com/in/chris097/"><AiFillLinkedin size={20} /></Link>
            <Link rel='noopener noreferrer' target='_blank' href="https://github.com/chris097"><BsGithub size={20} /></Link>
            <Link rel='noopener noreferrer' href="https://twitter.com/chris_chiemela"><AiFillTwitterCircle size={24} /></Link>
          </div>
            <p className='text-center text-xs mt-2'>Chris097 © 2024 . All Rights Reserved Christian Chiemela</p>
          </div>
        </div>
  )
}

export default Footer