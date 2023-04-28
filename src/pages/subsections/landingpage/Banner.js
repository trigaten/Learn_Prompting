import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";


function Banner() {
  return (
    <div className='banner p-4 pt-6 flex items-center flex-col md:flex-row md:justify-center'>
        <div className='text-center text-xs text-white opacity-80'>Get ready for the HackAPrompt Competition starting on May 5</div>
        <div className='flex cursor-pointer hover:underline transition-all items-center text-white font-bold tracking-tight mt-2 md:mt-0 ml-0 md:ml-2 text-sm'>Register Now <span><RxArrowTopRight className="inline-block text-white ml-1" /></span></div>
    </div>
  )
}

export default Banner