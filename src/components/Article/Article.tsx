import Link from 'next/link';
import React from 'react';

const Article = () => {
  return (
     <div>
        <p className='lg:text-3xl md:text-2xl text-xl font-font-satoshi font-extrabold'>
        Generating and use of SSH key for Github permission denied (public-key) for window users.
        </p>
        <div className='md:text-md text-sm my-3 flex justify-between items-center'>
        <div><span className='mr-2'>2023-02-12</span> | <span className='ml-2'>5 mins Read</span></div>
        <div className='text-xs bg-gray-800/60 w-12 h-6 rounded-full flex justify-center items-center cursor-pointer hover:opacity-60'>
          <Link href="https://medium.com/@chrisfidel.international/generating-and-use-of-ssh-key-for-github-permission-denied-public-key-for-window-users-c19690d04ff0">View</Link>
        </div>
        </div>
    </div>
  )
}

export default Article;