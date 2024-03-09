'use client'

import React from 'react'
import adobeLogo from "../../public/logos/adobe_logo.svg"
import microsoft from "../../public/logos/microsoft_logo.svg"
import spotify from "../../public/logos/logo-spotify.svg"
import netflix from "../../public/logos/netflix_logo.svg"
import youtube from "../../public/logos/youtube_logo.svg"
import github from "../../public/logos/github_logo.svg"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {}

const CompanySection = (props: Props) => {
    const router = useRouter()
  return (
    <div className='w-full flex gap-5'>
        <div className='w-[90%] mx-auto flex justify-between items-start'>
            <button onClick={() => {
                router.push("?companyName=adobe")
            }} className='relative size-40 bg-[#F5F5F5]'>
                <Image
                    className=''
                    src={adobeLogo}
                    fill
                    alt='adobe_logo'
                />
            </button>
            <button  className='relative size-40 '>
                <Image
                    className=''
                    src={microsoft}
                    fill
                    alt='adobe_logo'
                />
            </button>
            <button  className='relative size-40 '>
                <Image
                    className=''
                    src={spotify}
                    fill
                    alt='adobe_logo'
                />
            </button>
            <button  className='relative size-40 '>
                <Image
                    className=''
                    src={netflix}
                    fill
                    alt='adobe_logo'
                />
            </button>
            <button  className='relative size-40 '>
                <Image
                    className=''
                    src={youtube}
                    fill
                    alt='adobe_logo'
                />
            </button>
            <button  className='relative size-40 '>
                <Image
                    className=''
                    src={github}
                    fill
                    alt='adobe_logo'
                />
            </button>
        </div>
    </div>
  )
}

export default CompanySection