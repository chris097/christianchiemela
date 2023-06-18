import React from 'react'
import Image from 'next/image'
import yep from "@/assets/images/yep.png";

const Yep = () => {
  return (
      <div className='bg-white rounded-full lg:w-[100px] lg:h-[100px] w-[40px] h-[40px] flex justify-center items-center'>
          <Image className='object-fill bg-no-repeat w-[80px] h-[80px] p-3' src={yep} alt='yep' />
    </div>
  )
}

export default Yep;