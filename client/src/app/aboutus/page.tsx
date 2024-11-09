'use client'
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../../components/ui/Spotlight";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import hemang from '../../../public/assets/images/hemang.png';
import grisa from '../../../public/assets/images/grisa.jpg';
import profile from '../../../public/assets/images/aboutus.webp';
import hetvi from '../../../public/assets/images/Hetvi.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Aboutus() {
    useEffect(() => {
        AOS.init({duration:3000})
    })
    return (
        <div className="h-[60rem] w-full rounded-md md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-30"
                fill="white"
            />
            <Navbar/>
            <div className="mt-10 p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 data-aos="flip-up" aos-duration='3000' className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    The bright team of <br /> DevEchelon.
                </h1>
                <p data-aos="flip-down" aos-duration='3000' className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    {/* Spotlight effect is a great way to draw attention to a specific part
                    of the page. Here, we are drawing the attention towards the text
                    section of the page. I don&apos;t know why but I&apos;m running out of
                    copy. */}
                    Passionate group of developers dedicated to creating a platform that challenges and enhances coding skills. 
                    We are committed to building a user-friendly, engaging environment where programmers can sharpen their problem-solving abilities.
                </p>
                <div className="my-8">
                    <div className="flex justify-evenly mb-5"> 
                        <div data-aos="slide-right" aos-duration='3000' className="flex justify-center items-center">
                            <div className="flex items-center justify-center bg-white px-5 py-10 w-[600px] relative overflow-hidden shadow-lg">
                                <div className="absolute h-[300%] w-[173px] bg-[#262626] top-[-60px] left-[-125px] rotate-[17deg]"></div>
                                <div className="flex">
                                    <div className="z-10 me-5 flex justify-center items-center" style={{ borderRadius: "200px" }}>
                                        <Image
                                            src={hemang}
                                            alt=""
                                            className="w-[280px] h-[130px] object-cover" style={{ borderRadius: "300px" }}
                                        />
                                    </div>

                                    <div className="z-10">
                                        <h2 className="text-2xl mb-2 font-bold font-bebas tracking-wider">Hemang Baldha</h2>
                                        <p className="text-sm mb-1">
                                            <span className="font-bold mr-2">Email:</span> hemang9705@gmail.com
                                        </p>
                                        <p className="text-sm mb-1">
                                            <span className="font-bold mr-2">Occupation:</span> Web Developer
                                        </p>
                                        <p className="text-sm">
                                            <span className="font-bold mr-2">About me:</span> Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div data-aos="slide-left" aos-duration='3000' className="flex justify-center items-center">
                            <div className="flex items-center justify-center bg-white px-5 py-10 w-[600px] relative overflow-hidden shadow-lg">
                                <div className="absolute h-[300%] w-[173px] bg-[#262626] top-[-60px] left-[-125px] rotate-[17deg]"></div>
                                <div className="flex">
                                    <div className="z-10 me-5 flex justify-center items-center" style={{ borderRadius: "200px" }}>
                                        <Image
                                            src={hetvi}
                                            alt=""
                                            className="w-[280px] h-[130px] object-cover" style={{ borderRadius: "300px" }}
                                        />
                                    </div>

                                    <div className="z-10">
                                        <h2 className="text-2xl mb-2 font-bebas tracking-wider font-bold">Hetvi Deshani</h2>
                                        <p className="text-sm mb-1">
                                            <span className="font-bold mr-2">Email:</span> hetvideshani@gmail.com
                                        </p>
                                        <p className="text-sm mb-1">
                                            <span className="font-bold mr-2">Occupation:</span> Web Developer
                                        </p>
                                        <p className="text-sm">
                                            <span className="font-bold mr-2">About me:</span> Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    


                    <div data-aos="slide-up" aos-duration='2000' className="flex justify-center items-center">
                        <div className="flex items-center justify-center bg-white px-5 py-10 w-[600px] relative overflow-hidden shadow-lg">
                            <div className="absolute h-[300%] w-[173px] bg-[#262626] top-[-60px] left-[-125px] rotate-[17deg]"></div>
                            <div className="flex">
                                <div className="z-10 me-5 flex justify-center items-center" style={{ borderRadius: "200px" }}>
                                    <Image
                                        src={grisa}
                                        alt=""
                                        className="w-[280px] h-[130px] object-cover" style={{ borderRadius: "300px" }}
                                    />
                                </div>

                                <div className="z-10">
                                    <h2 className="text-2xl mb-2 font-bebas tracking-wider font-bold">Grisa Desai</h2>
                                    <p className="text-sm mb-1">
                                        <span className="font-bold mr-2">Email:</span> grishadesai78@gmail.com
                                    </p>
                                    <p className="text-sm mb-1">
                                        <span className="font-bold mr-2">Occupation:</span> Web Developer
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-bold mr-2">About me:</span> Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

