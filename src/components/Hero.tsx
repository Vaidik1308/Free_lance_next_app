import { ShipWheel, SmilePlus } from 'lucide-react'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='bg-[#1D1C26] text-white uppercase text-9xl  font-semibold flex flex-col justify-center items-center gap-4 '>
        <div className='flex items-center gap-6'>
            <div className='bg-[#bae4c2] w-40 rounded-full h-[5.5rem] flex justify-between px-2 items-center'>
                <div className='bg-white size-3   rounded-full'></div>
                <ShipWheel size={68}/>
                <div className='bg-white size-3   rounded-full'></div>
            </div>
            <h1 className='tracking-tighter'>find the job</h1>
        </div>
        <div className='w-[75%] flex justify-start'>
            <h1 className='tracking-tighter'>that fits your</h1>
        </div>
        <div className='flex items-center w-full justify-center'>
            <div className='flex  items-center justify-end w-[40%]'>
                <div className='bg-white size-12 rounded-md flex justify-center items-center'>
                    <div className='size-10 rounded-md bg-[#f68263] flex justify-center items-center'>
                        <SmilePlus/>
                    </div>
                </div>
                
                <div className='w-3/4 flex justify-center'>
                    <p className='text-sm text-gray-400 capitalize font-medium w-[80%]'>Discover the best remote job offers among the best flexible companies over the geographical area</p>
                </div>
            </div>
            <h1 className='tracking-tighter w-fit'>lifestyle</h1>
        </div>
    </div>
  )
}

export default Hero