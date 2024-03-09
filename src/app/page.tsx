import CompanySection from "@/components/CompanySection";
import Hero from "@/components/Hero";
import SearchContainer from "@/components/SearchContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-[#1D1C26] py-4">
        <Hero/>
        <div className="my-8">
          <SearchContainer/>
        </div>  
      </div>  
      <CompanySection/> 
    </main>
  );
}
