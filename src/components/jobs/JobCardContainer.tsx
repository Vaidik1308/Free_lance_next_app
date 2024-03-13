import React from 'react'
import SingleCard from './SingleCard'

type Props = {}

const JobCardContainer = (props: Props) => {
  return (
    <div className='w-full py-4 gap-3 flex flex-col'>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
    </div>
  )
}

export default JobCardContainer