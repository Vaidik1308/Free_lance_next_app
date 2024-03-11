'use client'
import { navigationTags } from '@/lib/navigationTags'
import { ShipWheel } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {

    const pathname = usePathname()
  return (
    <nav className='bg-[#1D1C26] h-[14vh] w-full text-white flex justify-between items-center px-6 py-2'>
        <div className='flex w-[1/4] items-center gap-1.5'>
            {/* icon to do */}
            <ShipWheel color='#9C98F2' size={44}/>
            <h2 className='flex flex-col leading-6 tracking-widest text-2xl'>
                <span>FREE-</span>
                <span className='font-bold'>LANCE</span>
            </h2>
        </div>
        <div className='flex justify-between w-[60%] '>
            <div className='flex gap-8 items-center'>
                {navigationTags.map((item) => (
                    <Link className={pathname === item.path ? "text-white": "text-gray-500"} key={item.label} href={item.path}>{item.label}</Link>
                ))}
            </div>
            <div className='flex gap-8 items-center'>
                <Link href={"/log-in"}>Log in</Link>
                <Link href={"/sign-up"}>Sign Up</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar