import React from 'react'
import { Button } from '../ui/button';

type Props = {
  category:string;
}

const SingleCategory = ({category}: Props) => {
  return (
    <Button className='bg-[#242431] w-fit px-6 py-2 text-[15px] rounded-lg font-semibold '>
      {category}
    </Button>
  )
}

export default SingleCategory