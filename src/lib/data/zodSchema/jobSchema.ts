import { z } from "zod";


const detailsSchema = z.object({
    duration:z.string().min(1,{message:"please specify the minimum duration"}),
    description:z.string().optional(),
    location:z.string().min(1,{message:"location is required"}),
    skills: z.array(z.string()).min(1, { message: "Specify at least one skill" }),
})
export const jobSchema = z.object({
    jobName:z.string().min(2).max(50),
    description:z.string().min(2,{message:" required and must be > 2 words"}).max(200,{message:"exceeding the 200 words limit"}),
    domain:z.string().min(1,{message:" Domain is require"}),
    jobType: z.array(z.string()).min(1, { message: "Specify at least one job type" }),
    // jobLogo: typeof window === "undefined" ? z.any() :z
    // .instanceof(FileList)
    // .refine((file) => file?.length == 1, "logo is required").optional(),
    priceRange: z.string().optional(),
    // adminEmail:z.string().email().min(1,{message:"email is required"}),
    details:detailsSchema,
})

export const JobSchemaType =  typeof jobSchema