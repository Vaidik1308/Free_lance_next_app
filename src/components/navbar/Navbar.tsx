'use client'
import { navigationTags } from '@/lib/navigationTags'
import { ShipWheel } from 'lucide-react'
import React from 'react'
import LoginSignUp from './LoginSignUp'
import ProfileView from './ProfileView'
import MainLinks from './MainLinks'

type Props = {}

const Navbar = (props: Props) => {

    
  return (
    <nav className='bg-[#1D1C26] h-[14vh] w-full text-white flex justify-between items-center px-6 py-2'>
        <Link href={"/"} className='flex w-[1/4] items-center gap-1.5'>
            {/* icon to do */}
            <ShipWheel color='#9C98F2' size={44}/>
            <h2 className='flex flex-col leading-6 tracking-widest text-2xl'>
                <span>FREE-</span>
                <span className='font-bold'>LANCE</span>
            </h2>
        </Link>
        <div className='flex justify-between w-[60%] '>
            <MainLinks/>
            <ProfileView/>
            <LoginSignUp/>
        </div>
    </nav>
  )
}

export default Navbar