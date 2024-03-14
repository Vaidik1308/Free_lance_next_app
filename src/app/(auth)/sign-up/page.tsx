import SignUpForm from '@/components/auth/SignUpForm'
import AuthGallery from '@/components/gallery/AuthGallery'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const SignIn = (props: Props) => {
  return (
    <div className='w-[85%]   flex  justify-center min-h-screen overflow-hidden'>
        <div className='w-1/2 flex flex-col justify-center gap-32 items-center relative'>
            <div className='w-[70%] flex justify-start  relative z-10'>
                <Button variant={"secondary"} asChild> 
                    <Link href={"."}>
                        <ArrowLeft/>
                    </Link>
                </Button>
            </div>
            {/* login inputs */}
            <h1 className=' absolute  text-[12rem] font-bold text-gray-800 rotate-45 opacity-[0.4] uppercase'>SignUp</h1>
            <div className='relative z-10 w-full'>
                <SignUpForm/>
            </div>
        </div>
        <AuthGallery/>
    </div>
  )
}

export default SignIn