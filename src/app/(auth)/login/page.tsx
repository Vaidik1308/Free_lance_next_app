import Image from 'next/image'
import React from 'react'
import bgPic from '../../../../public/login_page_1.jpg'
import pic2 from '../../../../public/login_page_2.jpg'
import pic3 from '../../../../public/login_page_3.jpg'
import pic4 from '../../../../public/login_page_4.jpg'
import LoginForm from '@/components/auth/LoginForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import AuthGallery from '@/components/gallery/AuthGallery'

type Props = {}

const Login = (props: Props) => {
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
            <h1 className=' absolute  text-[15rem] font-bold text-gray-800 rotate-45 opacity-[0.4] uppercase'>Login</h1>
            <div className='relative z-10 w-full'>
                <LoginForm/>
            </div>
        </div>
        <AuthGallery/>
    </div>
  )
}

export default Login