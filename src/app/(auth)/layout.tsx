
import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import "../globals.css";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const session = await auth()
    // console.log(session?.user?.email);
    if(session){
        redirect("/explore")
    }
    
  return (
    <div className="   min-h-screen bg-[#1C1C25] text-white w-[100%] flex items-center justify-center">
        {children}
    </div>
  )
}
