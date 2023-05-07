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
            <BackgroundSvg />
            <div className='w-[80%] mx-auto z-40 relative'>
                <h2 className='text-3xl'>Portfolio</h2>
                <div className='mt-6 grid grid-cols-3 gap-5'>
                    {projectInfo.map((project) => (
                        <div className='border border-gray-600 p-3 hover:scale-105 transition-all rounded bg-black  h-auto'>
                        <Image className='w-full h-48 object-fill bg-no-repeat bg-cover' src={project.image} alt='soccerwiz' />
                        <div>
                            <div className='flex justify-between items-center mt-2'>
                                    <p className='text-xl'>{project.name}</p>
                            <Link href={project.url} className='text-xs border-b hover:opacity-60'>Visit App</Link>
                            </div>
                        <div className='flex justify-between items-center mt-2'>
                            <button className='text-xs bg-gray-800/60 hover:opacity-60 w-full py-2'>Learn More</button>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className='flex justify-end mt-4'>
                    <Link href="/portfolio"><span className='border-b hover:opacity-60 text-xs'>View More</span></Link>
                </div>
            </div>
        </>
    )
};

export default Card