
import "../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="   min-h-screen bg-[#1C1C25] text-white w-[100%] flex items-center justify-center">
        {children}
    </div>
  )
}
