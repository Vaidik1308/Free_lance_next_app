import { z } from "zod";


const requiredString = z.string().min(1,{message:"this is required field"})
export const searchBarSchema = z.object({
    jobName:requiredString.max(50),
    countryName:z.string().max(50,{message:"maximum length reached"}).optional()
})

export type SearchBarSchemaType = z.infer<typeof searchBarSchema>


export const loginSchema = z.object({
    username:requiredString.max(50),
    password:requiredString.max(50)
})

export type LoginSchemaType = z.infer<typeof loginSchema>

export const signUpSchema = z.object({
    email:requiredString.email({message:"Email is required"}),
    password:requiredString.max(50,{message:"password should be less than 50 words"}),
    username:requiredString.max(50,{message:"username is required"})
})

export type SignUpSchemaType = z.infer<typeof signUpSchema>