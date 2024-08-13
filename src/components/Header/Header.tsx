import React, { useState } from 'react';
import Link from 'next/link';
import {FiMenu }from 'react-icons/fi';
import {TfiClose }from 'react-icons/tfi';
import Image from 'next/image';
import github from '@/assets/images/github.jpeg'

type ListProps = {
    name: string
    id: number
    path: string
}

const lists: ListProps[] = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Portfolio', path: '/portfolio' },
    { id: 3, name: 'About', path: '/about' },
    { id: 4, name: 'Blog', path: '/blog' },
];

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='border-b border-gray-700/70 text-gray-100/90 bg-black w-full fixed top-0 left-0 z-50'>
            <div className='w-[80%] mx-auto h-24 flex items-center justify-between'>
                <div className='font-medium text-4xl'>C.J.C</div>
                <div className='flex gap-20 items-center'>
                    <ul className='lg:flex hidden gap-10 text-base'>
                    {lists.map(list => (
                        <li key={list.id} className='cursor-pointer'>
                            <Link href={`${list.path}`}>{list.name}</Link>
                        </li>
                    ))}
                </ul>
                <Link className='lg:flex hidden' target='_blank' href="https://github.com/chris097">
                    <Image className='w-7 h-7 rounded-full' src={github} alt='github' />
                    </Link>
                </div>
                <div className='lg:hidden block'>
                    <div className='flex items-center gap-6'>
                    <Link target='_blank' href="https://github.com/chris097">
                    <Image className='w-5 h-5 rounded-full' src={github} alt='github' />
                    </Link>
                        <FiMenu size={20} onClick={() => setOpen(!open)} color='white' />
                    </div>
                    {open && <div className='fixed flex top-0 left-0 inset-0 bg-black/90 overflow-hidden flex-col z-50'>
                        <div onClick={() => setOpen(!open)} className='flex justify-end m-10 z-50'>
                            <TfiClose color='white' size={30} />
                        </div>
                         <ul className='gap-14 text-base z-50 relative opacity-100 flex justify-center -mt-20 flex-col items-center h-full w-full'>
                    {lists.map(list => (
                        <li key={list.id} className='cursor-pointer text-white z-50 text-2xl'>
                            <Link href={`${list.path}`}>{list.name}</Link>
                        </li>
                    ))}
                </ul>
                    </div>}
                </div>
            </div>
        </div>
    )
};

export default Header