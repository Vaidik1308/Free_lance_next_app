import React from 'react'
import microsoftIcon from '../../../public/logos/microsoft_icon.svg'
import Image from 'next/image'
type Props = {}

const SingleJob = (props: Props) => {
  return (
    <div className='border border-gray-300 rounded-[18px] py-6'>
        <div className='flex flex-col w-[80%] mx-auto justify-between min-h-[25vh]'>
            <div className='flex items-center justify-center gap-4 '>
                <div className='size-[72px] rounded-lg flex justify-center items-center bg-gray-200 p-1'>
                    <Image
                        src={microsoftIcon}
                        alt=''
                        width={50}
                        height={50}
                    />
                </div>
                <div className='w-fit'>
                    <h3 className='text-3xl font-bold tracking-tighter'>Google</h3>
                    <p className='text-muted-foreground' >28 Available Job</p>
                </div>
            </div>
            <div className='w-[100%] mx-auto flex flex-col gap-4'>
                <p className='text-muted-foreground leading-4 '>We don't want you to feel so overwhelmed at Google</p>
                <div className='flex flex-wrap gap-2 w-full'>
                    <div className='bg-gray-200  p-2 px-3 rounded-lg flex justify-center items-center'>
                        <p className='font-bold text-sm'>Part-time</p>
                    </div>
                    <div className='bg-gray-200  p-2 px-3 rounded-lg flex justify-center items-center'>
                        <p className='font-bold text-sm'>Full-time</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleJob