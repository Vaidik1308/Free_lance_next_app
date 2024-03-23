import Link from 'next/link'
import React from 'react'
import { auth } from '../../auth'

type Props = {}

const LoginSignUp =async (props: Props) => {
    const session = await auth()
    if(session){
        return
    }
  return (
    <div className='flex gap-8 items-center'>
        <Link href={"/login"}>Log in</Link>
        <Link href={"/sign-up"}>Sign Up</Link>
    </div>
  )
}

export default LoginSignUp