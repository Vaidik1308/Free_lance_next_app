'use client'
import React, { useEffect, useState } from 'react'
import SearchContainer from './SearchContainer'
import { useSearchParams } from 'next/navigation'

type Props = {}

const Search = (props: Props) => {

    const [jobName,setJobName] = useState("")
    const [countryName,setCountryName] = useState("")
    const searchParams = useSearchParams()

    useEffect(() => {
        const jobName = searchParams.get("jobName")
        const countryName = searchParams.get("countryName")
            // console.log(jobName);
            
        if(jobName) setJobName(jobName)
        if(countryName) setCountryName(countryName)
        
        
    },[searchParams])
  return (
    <div>
        <SearchContainer 
            jobName={jobName}
            countryName={countryName}
            setCountryName={setCountryName}
            setJobName={setJobName}
        />
    </div>
  )
}

export default Search