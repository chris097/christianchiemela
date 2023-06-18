import Image from 'next/image'
import React from 'react'
import esca from "@/assets/images/esca.jpeg";

const Esca = () => {
  return (
    <div className='lg:w-[100px] lg:h-[100px] w-[40px] h-[40px] flex justify-center items-center'>
      <Image className='object-fill bg-no-repeat lg:w-[100px] lg:h-[100px] w-[40px] h-[40px]' src={esca} alt='esca' />
    </div>
  )
}

export default Esca