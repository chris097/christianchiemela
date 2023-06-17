import { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

interface EProps {
    name: string
    logo: ReactNode
    startDate: string
    endDate: string
    description: string
    position: string
}

const Experience = ({ name, logo, startDate, endDate, description, position }: EProps) => {
  return (
    <div className='lg:flex block justify-between mt-20 gap-4 items-center'>
          <div className='flex flex-1 items-center gap-4'>
              <div className='w-[100px] h-[100px]'>{logo}</div>
            {/* <svg width="80" height="80" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7797 5.86548C17.81 6.07062 17.8254 6.27758 17.826 6.48484C17.8315 7.05222 17.7206 7.61491 17.4999 8.13962C17.2791 8.66433 16.953 9.14039 16.5408 9.53963C16.1286 9.93886 15.6387 10.2532 15.1001 10.4639C14.5615 10.6747 13.9851 10.7776 13.4051 10.7666C12.8319 10.7666 12.2644 10.6555 11.7353 10.4397C11.2063 10.2238 10.7262 9.90755 10.3229 9.50913C9.91964 9.1107 9.60109 8.63803 9.3857 8.11844C9.17032 7.59885 9.06235 7.04265 9.06809 6.48201C9.06784 6.27576 9.08234 6.06975 9.11146 5.86548H0.0239296C-0.144681 8.8658 0.755626 11.8305 2.57141 14.2542C4.38719 16.678 7.00608 18.4109 9.98176 19.1576C11.0863 19.4404 12.237 19.5592 13.4514 19.7656V27C13.8121 26.879 14.163 26.7315 14.501 26.5588C15.9466 25.6651 17.5051 24.8789 18.838 23.8212C24.3952 19.3697 26.8731 13.4957 26.8875 6.55271C26.8875 6.3208 26.8817 6.09173 26.8702 5.86548H17.7797Z" fill="#F8A912"/>
<path d="M11.7305 6.57253C12.0659 5.21221 12.2885 3.85754 12.7367 2.5764C13.3814 0.718333 15.8449 -0.421404 17.6896 0.147046C17.6896 0.166843 17.7214 0.192305 17.7156 0.209274C17.3368 1.58657 17.0737 3.00909 16.559 4.33265C15.8854 6.02952 13.6677 7.02218 11.8461 6.60928C11.8067 6.59974 11.7681 6.58747 11.7305 6.57253Z" fill="#F8A912"/>
            </svg> */}
            <div>
              <span className='text-white font-font-clash text-2xl font-medium'>{name}</span>
              <div className='flex items-center gap-5'>
                <div className='text-white font-font-satoshi text-md font-medium'>{startDate}</div>
                <svg width="150" height="15" viewBox="0 0 238 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M237.052 13.0696C237.642 12.4889 237.65 11.5392 237.07 10.9484L227.605 1.32157C227.025 0.73082 226.075 0.722737 225.484 1.30352C224.893 1.8843 224.885 2.83401 225.466 3.42476L233.879 11.9819L225.322 20.3947C224.731 20.9755 224.723 21.9252 225.304 22.516C225.884 23.1067 226.834 23.1148 227.425 22.534L237.052 13.0696ZM0.987235 11.4999L235.987 13.4999L236.013 10.5001L1.01277 8.50005L0.987235 11.4999Z" fill="white"/>
                </svg>
                      <div className='text-white font-font-satoshi text-md font-medium'>{endDate}</div>
            </div>
            </div>
            </div>
            <div className='text-white flex-1 font-font-clash'>
              <h3 className='text-2xl font-medium'>{position}</h3>
              <p className='text-base mt-2'>{description}</p>
            </div>
          </div>
  )
}

export default Experience