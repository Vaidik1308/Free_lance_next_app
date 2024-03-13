import React from 'react'

type Props = {
    params: {
        id:string
    }
}

const JobPage = ({params}: Props) => {
  return (
    <div>{params.id}</div>
  )
}

export default JobPage