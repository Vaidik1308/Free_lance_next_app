

import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
