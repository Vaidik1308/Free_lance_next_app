'use client'
import React, { useCallback } from 'react'
import { Button } from '../ui/button';
import { Category } from '../../../types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';



const SingleCategory = ({label,catSlug,id}: Category) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const param = new URLSearchParams(searchParams)
  console.log(pathname);
  
  const handlePush = (label:string) =>{
    console.log(label);
    param.set("category",catSlug)
    console.log(param);
    router.push(`/explore?categories=${label}`)
  }
  
  
  
  return (
    <button onClick={() =>{
      handlePush(catSlug)
    }} className='bg-[#242431] w-fit px-6 py-2 text-[15px] rounded-lg font-semibold '>
      {label}
    </button>
  )
}

export default SingleCategory