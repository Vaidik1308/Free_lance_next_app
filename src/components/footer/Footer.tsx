import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import {  MoveUpRight, ShipWheel } from 'lucide-react'
import { CiTwitter } from 'react-icons/ci'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-[#1C1C25] text-white w-[100%] min-h-[80vh] border-t-[1px] border-gray-700 pt-8'>
        <div className='w-[90%] mx-auto my-8 mb-16'>
            <div className='flex min-h-[25vh]'>
                <div className='text-6xl font-semibold flex flex-col gap-3 justify-center w-1/2'>
                    <h1>
                        WE'D <span className='text-[#B7CEBE]'>LIKE</span> &
                    </h1>
                    <h1>
                        <span className='text-[#9B96F1]'>LOVE</span> TO HELP.
                    </h1>
                </div>
                <div className='w-1/2 flex flex-col justify-around'>
                    <p className='text-justify w-[65%] leading-8'>
                        Get to know our hiring process before you apply or find answers to any lingering questions, right here, right now
                    </p>
                    <Button asChild className='bg-[#F98161]  px-4 h-[8vh] rounded-full flex justify-center gap-3 items-center w-[35%]'>
                        <Link href={`/explore/2`}>
                            <span>Learn more</span>
                            <MoveUpRight />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
        <div className='pt-16 border-t-[1px] border-gray-800 grid grid-cols-7 w-[90%] mx-auto  gap-4 items-center justify-center min-h-fit'>
            <div className='col-span-2  min-h-10 p-2 gap-4 flex flex-col'>
                <Link href={"/"} className='flex w-fit items-center gap-1.5 '>
                    {/* icon to do */}
                    <ShipWheel color='#9C98F2' size={36}/>
                    <h2 className='flex flex-col leading-5 tracking-widest text-1.5xl'>
                        <span className='font-semibold'>FREE-</span>
                        <span className='font-bold'>LANCE</span>
                    </h2>
                </Link>
                <p className='text-sm w-[70%] '>Discover the best remote job offers among the best flexible components over the geographical area</p>
            </div>
            <div className='col-span-1  flex flex-col h-full p-2 justify-between text-gray-500'>
                <Link href={"/explore"}>Explore</Link>
                <Link href={"/hire-freelancer"}>Hire Freelancer</Link>
                <Link href={"/post-a-job"}>Post a Job</Link>
            </div>
            <div className='col-span-2  flex flex-col h-full p-2 justify-between text-gray-500'>
                <Link href={"/about"}>About</Link>
                <Link href={"/about"}>Contact Us</Link>
                <Link href={"/"}>Blog</Link>
            </div>
            <div className=' col-span-2 h-full grid grid-cols-2 w-[90%] mx-auto p-1'>
                <Link href={"/"} className='flex items-center gap-2'>
                    <FaTwitter /> 
                    <p className='text-sm text-gray-400'>Twitter</p>
                </Link>
                <Link href={"/"} className='flex items-center gap-2'>
                    <IoLogoInstagram  /> 
                    <p className='text-sm text-gray-400'>Instagram</p>
                </Link>
                <Link href={"/"} className='flex items-center gap-2'>
                    <FaLinkedin  /> 
                    <p className='text-sm text-gray-400'> LinedIn</p>
                </Link>
                <Link href={"/"} className='flex items-center gap-2'>
                    <FaFacebook  /> 
                    <p className='text-sm text-gray-400'>Facebook</p>
                </Link>
                <div className='col-span-2'>
                    {/* send email will come here */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer