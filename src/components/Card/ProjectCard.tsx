import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Card = ({ project }:any) => {

    return (
        <>
            <div className='mt-6 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                    {project?.map((project:{name: string, id: number, link: string, url: string}, index:number) => (
                        <div key={project.id} className='border border-gray-600 p-3 hover:scale-105 transition-all rounded bg-black h-auto z-40'>
                        <Image className='w-full h-48 object-center bg-no-repeat bg-cover object-fill' src={project.url} alt={project.name} />
                        <div>
                            <div className='flex justify-between items-center mt-2'>
                                    <p className='text-xl'>{project.name}</p>
                            <Link rel='noopener noreferrer' target='_blank' href={project.link} className='text-xs border-b hover:opacity-60'>Visit App</Link>
                            </div>
                        <div className='flex justify-between items-center mt-2'>
                            <Link href={`/projectDetails/${index}`} className='text-xs bg-gray-800/60 text-center hover:opacity-60 w-full py-2'>Learn More</Link>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
        </>
    )
};


export default Card