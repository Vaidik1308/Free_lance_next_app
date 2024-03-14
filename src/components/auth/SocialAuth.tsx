'use client'
import React from 'react'
import {FcGoogle } from 'react-icons/fc'
import { Button } from '../ui/button'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'

type Props = {}

const SocialAuth = (props: Props) => {
  return (
    <div className='w-full flex flex-col gap-6'>
        <Button onClick={() => signIn('google')} variant={"secondary"} className='flex items-center justify-center gap-4 w-full'>
            <FcGoogle size={24}/>
            <span className='font-bold text-[16px]'>
                Log in with Google
            </span>
        </Button>
        <Button variant={"secondary"} className='flex items-center justify-center gap-4 w-full'>
            <FaGithub  size={24}/>
            <span className='font-bold text-[16px]'>
                Log in with Github
            </span>
        </Button>
    </div>
  )
}

export default SocialAuth