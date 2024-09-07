import Image from "next/image";
import localFont from "next/font/local";
import { HeroSection } from "@/components/HeroSection";
import { Poppins } from '@next/font/google';
import './globals.css';


// const menlo = localFont({
//   src: "../../public/assets/fonts/Menlo-Regular.ttf",
//   display: "swap"
// });


export default function Home() {
  return (
    // <main className={menlo.className}>
    //   <h1 className="bg-blue-700 text-white text-3xl p-2">Hemang-patel-9</h1>
    // </main>
    <div className="poppins.className w-[100%]">
      <HeroSection />
    </div>
  );
}
