'use client'

import { navigationTags } from '@/lib/data/navigationTags'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const MainLinks = (props: Props) => {
    const pathname = usePathname()
  return (
    <div className='flex gap-8 items-center'>
        {navigationTags.map((item) => (
            <Link className={pathname === item.path ? "text-white": "text-gray-500"} key={item.label} href={item.path}>{item.label}</Link>
        ))}
    </div>
  )
}

export default MainLinks