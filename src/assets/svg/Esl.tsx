import React from 'react';
import Image from 'next/image';
import esoft from "@/assets/images/esoft.jpeg";

const Esoft = () => {
  return (
          <Image className='object-fill w-[100px] h-[100px] bg-no-repeat' src={esoft} alt='yep' />
  )
}

export default Esoft