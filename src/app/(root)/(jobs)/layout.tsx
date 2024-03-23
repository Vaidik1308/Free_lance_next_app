
import CategoriesComp from "@/components/category/CategoriesComp"
import Search from "@/components/search/Search"


export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <div className="   min-h-screen bg-[#1C1C25] text-white w-[100%]">
      <div className="p-4">
        <Search/>
      </div>
      <div className="w-[90%] mx-auto">
        <CategoriesComp/>
      </div>
      <div className="w-[90%] mx-auto">
        {children}
      </div>
    </div>
  )
}
