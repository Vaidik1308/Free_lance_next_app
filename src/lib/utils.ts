import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const jobTypes = [
  {
    label:"Full-time",
    slug:"full_time",
  },
  {
    label:"Part-time",
    slug:"part_time",
  },
  {
    label:"internship",
    slug:"internship",
  },
  {
    label:"Hybrid",
    slug:"hybrid",
  },
]


