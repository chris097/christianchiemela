import Image from 'next/image'
import React from 'react'
import esca from "@/assets/images/esca.jpeg";

const Esca = () => {
  return (
          <Image className='object-fill bg-no-repeat' src={esca} alt='esca' />
  )
}

export default Esca