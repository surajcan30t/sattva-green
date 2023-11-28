'use client'
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
const images = [
  '/ayur.jpg',
  '/ayur2.jpg',
  '/ayur3.jpg',
];
 
export function CarouselCustomNavigation() {
  return (
    <>
    <div className="relative w-[98.8vw] h-[90vh] flex flex-col">
      <Image src="/herbs.png" alt="Picture of the author" fill className="object-cover object-bottom" />

      <div className="absolute bottom-20 left-10">
      <h1 className="text-9xl font-extrabold text-light-green-500">platform for <br /><span className="text-5xl font-extrabold text-light-green-500">chemical free long life</span> </h1>
    </div>
    </div>
    
    </>
  );
}