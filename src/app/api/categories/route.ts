import { NextResponse } from "next/server"
import prisma from "../../../../prisma"
import { Category } from "../../../../types"

export const GET = async(req:Request) => {
    try{    
        const categories:Category[] = await prisma.category.findMany()
        return NextResponse.json(categories,{status:200})

    }catch(error){
        return NextResponse.json({
            error:"failed to fetch the categories"
        })
    }
}