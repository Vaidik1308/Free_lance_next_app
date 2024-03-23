import Image from 'next/image'
import React from 'react'
import { auth } from '../../../auth'

type Props = {}

const ProfileView = async (props: Props) => {
  const session = await auth();
  const profileImg =  session?.user?.image as string
  const username =  session?.user?.name as string
  return (
    <div className='w-fit flex items-center justify-center gap-4'>
        <p>{username}</p>
        <div className=''>
            <Image
                src={profileImg}
                alt='profile_pic'
                width={30}
                height={30}
                className='rounded-full '
            />
        </div>
    </div>
  )
}

export default ProfileView