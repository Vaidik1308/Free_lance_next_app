
import Banner from "@/components/Banner/Banner";
import CompanySection from "@/components/CompanySection";
import Hero from "@/components/Hero";
import PopularJob from "@/components/popularJob/PopularJob";
import Search from "@/components/search/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-[#1D1C26] py-4">
        <Hero/>
        <div className="my-8 w-[90%] mx-auto ">
          <Search/>
        </div>  
      </div>  
      <CompanySection/> 
      <div className="w-[90%] mx-auto">
        <PopularJob/>
      </div>
      <div className="my-4 w-full">
        <Banner/>
      </div>
    </main>
  );
}
