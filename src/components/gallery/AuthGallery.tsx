'use client'
import Image from 'next/image'
import React from 'react'

import bgPic from '../../../public/login_page_1.jpg'
import pic2 from '../../../public/login_page_2.jpg'
import pic3 from '../../../public/login_page_3.jpg'
import pic4 from '../../../public/login_page_4.jpg'
import { gsap } from 'gsap'
import {useGSAP} from '@gsap/react'

type Props = {}

const AuthGallery = (props: Props) => {

    useGSAP(() => {
        gsap.from(".pic1",{
            xPercent:"-60",
            duration:1,
            opacity:0,
            stagger:1,
            smoothOrigin:true
        })
        gsap.from(".pic2",{
            yPercent:"-60",
            duration:1,
            opacity:0,
            stagger:1,
            smoothOrigin:true
        })
        gsap.from(".pic3",{
            // xPercent:"60",
            duration:1,
            opacity:0,
            scale:0.2,
            stagger:1,
            smoothOrigin:true
        })
        gsap.from(".pic4",{
            yPercent:"60",
            duration:1,
            opacity:0,
            stagger:1,
            smoothOrigin:true
        })
    })
  return (
    <div className='grid grid-cols-2 gap-2 grid-rows-3 w-[55%]  py-4'>
            <div className='w-full h-full relative overflow-hidden pic1'>
                <Image src={bgPic} alt='' fill className='object-cover hover:scale-[1.09]  duration-500' />
            </div>
            <div className='pic2 w-full row-span-2 relative h-full overflow-hidden'>
            <Image src={pic2} alt='' fill className='object-cover hover:scale-[1.09]  duration-500' />
            </div>
            <div className='pic3 w-full min-h-[220px] h-full relative overflow-hidden'>
            <Image src={pic3} alt='' fill className='object-cover hover:scale-[1.09]  duration-500' />
            </div>
            <div className='pic4 w-full col-span-2 h-full relative overflow-hidden'>
            <Image src={pic4} alt='' fill className='object-cover hover:scale-[1.09]  duration-500' />
            </div>
        </div>
  )
}

export default AuthGallery