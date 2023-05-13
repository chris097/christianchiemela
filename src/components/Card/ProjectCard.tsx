import React from 'react';
import BackgroundSvg from '@/assets/svg/BackgroundSvg';
import soccerwiz from '@/assets/images/soccerwiz.png';
import Image from 'next/image';
import Link from 'next/link';

const projectInfo = [
    {id: 1, name: 'Soccerwiz', image: soccerwiz, url: 'https://soccerwiz-frontend.vercel.app/'},
    {id: 2, name: 'Soccerwiz', image: soccerwiz, url: 'https://soccerwiz-frontend.vercel.app/'},
    {id: 3, name: 'Soccerwiz', image: soccerwiz, url: 'https://soccerwiz-frontend.vercel.app/'},
]

const Card = () => {
    return (
        <>
            <div className='mt-6 grid grid-cols-3 gap-5'>
                    {projectInfo.map((project) => (
                        <div key={project.id} className='border border-gray-600 p-3 hover:scale-105 transition-all rounded bg-black h-auto z-40'>
                        <Image className='w-full h-48 object-fill bg-no-repeat bg-cover' src={project.image} alt='soccerwiz' />
                        <div>
                            <div className='flex justify-between items-center mt-2'>
                                    <p className='text-xl'>{project.name}</p>
                            <Link href={project.url} className='text-xs border-b hover:opacity-60'>Visit App</Link>
                            </div>
                        <div className='flex justify-between items-center mt-2'>
                            <Link href='/projectDetails' className='text-xs bg-gray-800/60 text-center hover:opacity-60 w-full py-2'>Learn More</Link>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
        </>
    )
};


export default Card