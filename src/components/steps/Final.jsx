import React from 'react'
import Button from '../Button'
export default function Final() {
  return (
    <div className='container md:mt-10'>
      <div className='flex flex-col items-center'>
         <div className='text-green-400 items-center'>
            <svg className='w-24 h-24'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/200/svg'>
            <path
            fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.23a1 1 0 00-1.414-1.414L9
            10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
            clipRule='evenodd'
            />
            </svg>
            <div className='mt-3 text-xl font-semibold uppercase text-green-500'>
              Congralutations!
            </div>
            <div className='text-lg font-semibold text-blue-gray-500'>
              Your Account has been created.
            </div>
            <a className='mt-10' href='/'>
            <Button url="/" text="Close"/>
            </a>
         </div>
      </div>
    </div>
  )
}
