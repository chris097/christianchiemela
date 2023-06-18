import React from 'react';
import Image from 'next/image';
import esoft from "@/assets/images/esoft.jpeg";

const Esoft = () => {
  return (
    <div className='bg-white rounded-full lg:w-[100px] lg:h-[100px] w-[40px] h-[40px] flex justify-center items-center'>
      <Image className='object-fill lg:w-[100px] lg:h-[100px] w-[40px] h-[40px] bg-no-repeat' src={esoft} alt='yep' />
    </div>
  )
}

export default Esoft