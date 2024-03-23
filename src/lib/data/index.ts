'use server'

import { Category } from "../../../types"

export const getAllCategories = async () => {
    const res = await fetch(`http://localhost:3000/api/categories`)
    const categories:Category[] = await res.json()
    return categories
    
}