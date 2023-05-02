import React from 'react';
import Link from 'next/link';

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
    return (
        <div className='border-b border-gray-800/50 text-gray-100/90 bg-black w-full fixed top-0 left-0 z-50'>
            <div className='w-[80%] mx-auto h-24 flex items-center justify-between'>
                <div className='font-medium text-4xl'>C.J.C</div>
                <ul className='flex gap-10 text-base'>
                    {lists.map(list => (
                        <li key={list.id} className='cursor-pointer'>
                            <Link href={`${list.path}`}>{list.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Header