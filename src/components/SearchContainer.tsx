'use client'
import { SearchBarSchemaType, searchBarSchema } from '@/lib/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Earth, MapPin, Search } from 'lucide-react'
import { Button } from './ui/button'

type Props = {}

const SearchContainer = (props: Props) => {
  const form = useForm<SearchBarSchemaType>({
    resolver:zodResolver(searchBarSchema)
  })

  const {
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    setFocus,
    formState:{isSubmitting}
  } = form
  return (
    <div className=' w-[90%] rounded-full mx-auto min-h-[10vh] pl-6 bg-[#29293a] flex justify-center items-center'>
      <Form {...form}>
        <form className='flex justify-center items-center w-full  gap-2 ' action="">
            <FormField
            control={control}
            name="jobName"
            render={({field}) => (
                <FormItem className='flex-[1.5] border-r-2 border-gray-600 flex justify-center items-center'>
                    <FormControl className='flex justify-center items-center'>
                        <Input
                            className='text-white border-none flex justify-center items-center focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-ring'
                            icon={<Search color='white'/>}
                            placeholder="e.g Frontend Developer"
                            {...field}
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
          />  
            <FormField
            control={control}
            name="countryName"
            render={({field}) => (
                <FormItem className='flex-[3] border-none'>
                    <FormControl>
                        <Input
                        icon={<MapPin color='white'/>}
                            className='border-none text-white focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-ring'
                            placeholder="e.g India"
                            {...field}
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
          />  
          <Button className='bg-[#f88160]  m-1   h-12 w-36 rounded-full'>Search</Button>
        </form>
      </Form>
    </div>
  )
}

export default SearchContainer