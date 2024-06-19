'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { jobSchema } from '@/lib/data/zodSchema/jobSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

// Dynamically import the Editor component
const Editor = dynamic(() => import('./Editor'), { ssr: false });

type Props = {}

const AddJobForm = (props: Props) => {
  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      jobName: "",
      jobLogo: "",
      description: "",
      priceRange: "",
      domain: "",
      jobType: [],
      adminEmail: "",
      details: {
        duration: "",
        description: "",
        location: "",
        skills: [],
      },
    }
  });

  const {
    handleSubmit,control
  } = form

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-12 my-8">
        <div className='gap-4 grid grid-cols-2'>
          <FormField
            control={form.control}
            name="jobName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Name</FormLabel>
                <FormControl>
                  <Input placeholder="Job Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="jobLogo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Logo</FormLabel>
                <FormControl>
                  <Input placeholder="Logo Link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Domain</FormLabel>
                <FormControl>
                  <Input placeholder="Domain" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>
                <FormControl>
                  <Input placeholder="Job Type" {...field} onChange={(e) => field.onChange(e.target.value.split(','))} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priceRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price Range</FormLabel>
                <FormControl>
                  <Input placeholder="$200k-400k..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="details.duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job/ Internship Duration</FormLabel>
                <FormControl>
                  <Input placeholder="ex: 3 months..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="details.location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="details.skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <Input placeholder="Skills (comma separated)" {...field} onChange={(e) => field.onChange(e.target.value.split(','))} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Intro</FormLabel>
                <FormControl>
                  <Textarea className='bg-[#1C1C25] text-white' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="details.description"
            render={({ field }) => (
              <FormItem className='col-span-2 min-h-[75vh]'>
                <FormLabel>Description</FormLabel>
                <FormControl>
                    <Editor {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className='bg-[#F98161] w-1/3 shadow-lg' type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default AddJobForm;
