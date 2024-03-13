import SearchContainer from "@/components/SearchContainer"


export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="   min-h-screen bg-[#1C1C25] text-white w-[100%]">
      <div className="p-4">
        <SearchContainer/>
      </div>
      <div className="w-[90%] mx-auto">
        CATEGORY
      </div>
      <div className="w-[90%] mx-auto">
        {children}
      </div>
    </main>
  )
}
