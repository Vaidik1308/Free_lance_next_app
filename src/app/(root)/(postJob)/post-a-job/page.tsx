import AddJobForm from '@/components/forms/AddJobForm'
import React from 'react'

type Props = {}

const PostJob = (props: Props) => {
  return (
    <div className=' text-white w-full'>
      <div className='w-[80%] mx-auto my-4'>
        <h1 className='text-3xl font-bold'>
          Post A Job
        </h1>
      </div>
      <div className='w-[80%] mx-auto'>
        {/* form */}
        <AddJobForm/>
      </div>
    </div>
  )
}

export default PostJob