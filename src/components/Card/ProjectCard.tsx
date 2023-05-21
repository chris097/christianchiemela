import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/helpers/data';


const Card = () => {

    const [currentId, setCurrentId] = useState<number>();
    console.log(currentId)

    const handleId = (project:any) => {
        setCurrentId(project)
    }

    return (
        <>
            <div className='mt-6 grid grid-cols-3 gap-5'>
                    {projects.map((project) => (
                        <div onClick={() => handleId(project.id)} key={project.id} className='border border-gray-600 p-3 hover:scale-105 transition-all rounded bg-black h-auto z-40'>
                        <Image className='w-full h-48 object-fill bg-no-repeat bg-cover' src={project.url} alt='soccerwiz' />
                        <div>
                            <div className='flex justify-between items-center mt-2'>
                                    <p className='text-xl'>{project.name}</p>
                            <Link href={project.link} className='text-xs border-b hover:opacity-60'>Visit App</Link>
                            </div>
                        <div className='flex justify-between items-center mt-2'>
                            <Link href={`/projectDetails/${currentId}`} className='text-xs bg-gray-800/60 text-center hover:opacity-60 w-full py-2'>Learn More</Link>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
        </>
    )
};


export default Card