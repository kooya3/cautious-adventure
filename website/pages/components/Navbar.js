import React from 'react';
import logo from "../assets/logo.png"
import Image from 'next/image';
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import dribble from "../assets/dribble.png";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-between items-center p-4 px-6 md:p-5 md:px-26">
      {/* Left */}
      <div className="space-x-12 flex items-center">
        <button className="font-bold sm:text-[19px] md:text-[22px] animate-pulse">works</button>
        <button className="font-bold hidden sm:flex sm:text-[19px] md:text-[22px] hover:animate-none">Contact</button>
      </div>
      {/* Middle */}
      <div className="w-14 h-14 sm:w-17 sm:h-17 md:w-[4.4rem] md:h-[4.4rem] lg:w-[6rem] lg:h-[6rem] hover:animate-spin">
        <Image src={logo} />
      </div>

      {/* Right */}
      <div className="hidden sm:flex">
        <ul className="flex space-x-4">
          <li>
            <div className="w-7 h-7 cursor-pointer md:w-9 md:h-9 animate-[wiggle_1s_ease-in-out_infinite]"> 
            <Image src={twitter} /> 
            </div>
            
            </li>
            <li>
            <div className="w-7 h-7 cursor-pointer md:w-9 md:h-9 animate-[wiggle_1s_ease-in-out_infinite]"> 
            <Image src={facebook} /> 
            </div>
            
            </li>
            <li>
            <div className="w-7 h-7 cursor-pointer md:w-9 md:h-9 animate-[wiggle_1s_ease-in-out_infinite]"> 
            <Image src={github} /> 
            </div>
            
            </li>
            <li>
            <div className="w-7 h-7 cursor-pointer md:w-9 md:h-9 animate-[wiggle_1s_ease-in-out_infinite] hover:animate-ping"> 
            <Image src={dribble} /> 
            </div>
            
            </li>
        </ul>
      </div>
      {/* Extra */}
      <div className="space-x-12 sm:hidden ">
        <button className="font-bold">Contact</button>
      </div>
</div>

  );
};

export default Navbar;