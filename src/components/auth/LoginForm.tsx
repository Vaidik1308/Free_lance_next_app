'use client'
import React, { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { LoginSchemaType, loginSchema } from '@/lib/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import SocialAuth from './SocialAuth'
import Link from 'next/link'

type Props = {}

const LoginForm = (props: Props) => {

    const [showPassword,setShowPassword] = useState(false)



    const form = useForm<LoginSchemaType>({
        resolver:zodResolver(loginSchema)
    })

    const {
        handleSubmit,
        watch,
        trigger,
        control,
        setValue,
        formState:{isSubmitting}
    } = form
  return (
    <div className='w-[70%] mx-auto '>
        <Form {...form}>
            <form className='flex flex-col gap-4 justify-start' action="">
                <FormField
                        control={control}
                        name="username"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className='text-lg'>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g abc@1345"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                />
                <FormField
                        control={control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className='text-lg'>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type={showPassword ? "text" : "password"}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                />
                <Button type='submit' variant={"secondary"}>
                    Login
                </Button>
            </form>

        </Form>

        <span className='w-full flex justify-center items-center uppercase font-bold text-xl my-4'>
            or
        </span>
        <div>
            <SocialAuth/>
        </div>
        <div className='w-full justify-end'>
            <Link href={"/sign-up"} className='text-left w-fit text-blue-500'>Do not have an account. Create one</Link>
        </div>
    </div>
  )
}

export default LoginForm