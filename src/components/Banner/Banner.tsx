import { Puzzle, Target } from 'lucide-react'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='w-[90%] mx-auto flex flex-col justify-center items-center gap-8'>
        <div className='w-full flex gap-2 justify-center items-center my-10'>
            <div className='w-1/2'>
                <h2 className='font-bold text-5xl tracking-tighter  w-[75%]'>We help you to get your dream job</h2>
            </div>
            <div className='w-1/2'>
                <p className='text-muted-foreground w-[75%] '>Because the job market no longer knows borders and talent can work from anywhere we don't limit ourselves to comapnies in your country </p>
            </div>
        </div>
        <div className='w-full flex items-center justify-center gap-6'>
            <div className=' p-12 flex flex-col justify-between w-1/2 bg-[#9D98F5] min-h-[50vh] rounded-[20px]'>
                <div className='text-white'>
                    <Puzzle size={60}/>
                </div>
                <div className='text-white flex flex-col gap-4'>
                    <p className='text-xl uppercase font-bold'>flexibility</p>
                    <p className='text-3xl font-semibold tracking-tighter'>Discover the 2,000 most flexible companies in the world</p>
                    <div className='flex gap-3 items-center'>
                        <div className='w-[80px] h-[3px] bg-white'></div>
                        <p className='text-gray-50'>Learn More</p>
                    </div>
                </div>
            </div>
            <div className=' p-12 flex flex-col justify-between w-1/2 bg-[#CCE8D4] min-h-[50vh] rounded-[20px]'>
                <div className='text-black'>
                    <Target  size={60}/>
                </div>
                <div className='text-black flex flex-col gap-4'>
                    <p className='text-xl uppercase font-bold'>flexibility</p>
                    <p className='text-3xl font-semibold tracking-tighter'>Discover the 2,000 most flexible companies in the world</p>
                    <div className='flex gap-3 items-center'>
                        <div className='w-[80px] h-[3px] bg-black'></div>
                        <p className='text-black'>Learn More</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner