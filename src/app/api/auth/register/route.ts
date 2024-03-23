import { connectToDatabase } from "@/lib/db"
import { NextResponse } from "next/server"
import prisma from "../../../../../prisma"
import bcrypt from 'bcrypt'



export const POST = async (request:Request) => {
    try {
        const {email,name,password} = await request.json()
        if(!name || !email || !password) NextResponse.json({
            message:"Invalid Data"
        },{status:402})
        await connectToDatabase()
        const hashedPassword = await bcrypt.hash(password,10) 
        const newUser = await prisma.user.create({
            data:{
                name,email,hashedPassword
            }
        })
        return NextResponse.json(newUser,{status:201})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"unable to create the user"},{status:500})
        
    } finally{
        await prisma.$disconnect();
    }
}