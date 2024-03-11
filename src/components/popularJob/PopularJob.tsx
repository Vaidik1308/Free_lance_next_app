import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import SingleJob from './SingleJob'

type Props = {}

const PopularJob = (props: Props) => {
  return (
    <div className='w-full my-8'>
        <div className='flex justify-between items-center'>
            <h2 className='text-5xl font-bold capitalize tracking-tighter'>most popular job</h2>
            {/* <div>
                <button>
                    <ArrowLeft/>
                </button>
                <button>
                    <ArrowRight/>
                </button>
            </div> */}
        </div>
        <div className='mt-8 grid grid-cols-4 gap-6 '>
            <SingleJob/>
            <SingleJob/>
            <SingleJob/>
            <SingleJob/>
        </div>
    </div>
  )
}

export default PopularJob