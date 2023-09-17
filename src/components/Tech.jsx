import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {//the tech balls
  const isSmallDevice = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
      {isSmallDevice? technologies.map((technology,index) => (
        index<6?<div className='w-28 h-28' key={technology.name}>
        <BallCanvas icon={technology.icon} />
      </div>:null
        
      ))
      : technologies.map((technology,index) => (
        
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
     
    </div>
  );
};

export default SectionWrapper(Tech, "");