'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import twitter from '../../../public/logos/twitter.svg'
import { ArrowRight, HandCoins } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

type Props = {}

const SingleCard = (props: Props) => {

  return (
    <div className='w-full min-h-[40vh] flex border-t-[1px]   py-8 border-gray-700  ' >
        <div className='flex-[4] flex flex-col  justify-between'>
            <div className='flex gap-5 items-center '>
                <div className='bg-[#2a2b38] size-12 flex justify-center items-center rounded-lg'>
                    <Image
                        src={twitter}
                        alt='twitter_logo'
                        width={40}
                        height={40}
                    />
                </div>
                <h2 className='text-3xl font-bold  tracking-tight'>Senior UI Designer</h2>
            </div>
            <div className='w-full flex flex-col gap-4'>
                <div className='flex flex-wrap gap-2 w-full'>
                    <div className='bg-[#2a2b38] shadow-lg  p-2 px-4 rounded-lg flex justify-center items-center'>
                        <p className='font-semibold text-sm'>Part-time</p>
                    </div>
                    <div className='bg-[#2a2b38] shadow-lg  p-2 px-4 rounded-lg flex justify-center items-center'>
                        <p className='font-semibold text-sm'>Full-time</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400'>
                        Twitter promotes and protects the public conversation. Twitter is the town square of the internet. At Twitter, we work with one good in mind: to improve Twitter for our customers, partners
                    </p>
                </div>
                <div>
                    <div className='flex items-center justify-start gap-2 text-sm'>
                        {/*  icon*/}
                        <span className='bg-[#2a2b38] rounded-lg size-9 flex justify-center items-center'>
                            <HandCoins size={20} />
                        </span>
                        <p>$45k <span> - </span> $65k</p>
                    </div>
                    <div>
                        {/* stars feature */}
                    </div>
                </div>
            </div>
        </div>
        <div  className='flex-1 flex justify-center pt-4 px-2  '>
            <Button variant={"default"} asChild className='bg-[#F98161]  px-4 h-[8vh] rounded-full flex justify-center gap-3 items-center w-[65%] overflow-hidden  group'>
                <Link href={`/explore/2`} className='flex justify-center gap-2 relative'>
                    {/* <div className='group-hover:w-10 group-hover:flex  group-hover:h-[2px] group-hover:left-20 group-hover:bg-white hidden duration-300 absolute'/> */}
                    <ArrowRight className=' group-hover:translate-x-20 duration-300 '/>
                    <span className=' group-hover:translate-x-5 group-hover:opacity-0 duration-300' >Apply Now</span>
                </Link>
            </Button>
        </div>
    </div>
  )
}

export default SingleCard