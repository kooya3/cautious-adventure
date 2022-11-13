import React from 'react'
import Image from 'next/image'
import Picture from "../assets/picture.png";

function Hero() {
  return (
    <div className="py-4 px-6 md:p-5 md:px-26">
    <div className="">
      {/* Title */}
      <div className="flex flex-col items-center pt-3  md:pt-5 lg:pt-10 text-[25px] sm:text-[25px] lg:text-[38px] text-center">
        <p className="font-semibold">Elyees Tatua </p>
        <p className="font-semibold">Web Developer + UI/UX Interaction Designer</p>
        <p className="font-semibold"> Based in Kenya 🇰🇪</p>
</div>
</div>
<div className="flex items-center justify-center pt-8">
        {/* Main */}
      {/* Left */}
      <div className="hidden sm:flex w-[10rem]">
        <div className="">
          <p>Biography </p>  
          <p>Work for money and design for love!I'm Elyees, an UI/UX Interaction Designer based in Kenya</p>  
          <p>I have been coding for 4+ years</p>   
        </div>              
      </div>
      {/* Middle */}
      <div className="transform-gpu w-53 h-80 bg-red-400 overflow-hidden -mt-9 rounded-t-full rounded-b-full flex">
        <Image src={Picture } className="object-cover" />
      </div>
      {/* Right */}
</div>
    </div>
  )
}

export default Hero