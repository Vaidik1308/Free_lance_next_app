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
  // console.log(pathname + param);
  
  const handlePush = (catSlug:string) =>{
    param.set("category",catSlug)
    router.push(pathname+ '?' + param)
  }
  
  
  
  return (
    <Button onClick={() =>{
      handlePush(catSlug)
    }} className='bg-[#242431] w-fit px-6 py-2 text-[15px] rounded-lg font-semibold '>
      {label}
    </Button>
  )
}

export default SingleCategory