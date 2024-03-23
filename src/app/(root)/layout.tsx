

import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className={"w-full min-h-screen "}>
        <div>
          <Navbar/>
        </div>
        {children}
        <div>
          <Footer/>
        </div>
      </main>
  );
}
