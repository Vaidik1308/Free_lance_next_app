import { z } from "zod";


const requiredString = z.string().min(1,{message:"this is required field"})
export const searchBarSchema = z.object({
    jobName:requiredString.max(50),
    countryName:z.string().max(50,{message:"maximum length reached"}).optional()
})

export type SearchBarSchemaType = z.infer<typeof searchBarSchema>