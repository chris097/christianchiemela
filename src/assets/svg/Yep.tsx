import React from 'react'
import Image from 'next/image'
import yep from "@/assets/images/yep.png";

const Yep = () => {
  return (
      <div className='bg-white rounded-full w-[100px] h-[100px] flex justify-center items-center'>
          <Image className='object-fill bg-no-repeat w-[80px] h-[80px]' src={yep} alt='yep' />
    </div>
  )
}

export default Yep;