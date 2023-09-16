import React from 'react'
import { reactB,reactPhone } from '../assets'
const Border = () => {//the boarde showed in the about com
  const isSmallDevice = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
<div className="h-[21.8rem] flex justify-center gap-4 pt-24 sm:contents" style={{display:isSmallDevice?'contents':'flex'}}>
  <div className="w-[28rem] h-[21.8rem] left-0 top-8 lg:top-0 bg-slate-950 border border-neutral-400 relative" 
  style={{width:isSmallDevice?'18rem':'28rem', height:isSmallDevice?'17rem':'21.8rem'}}>
    <div className="left-[49px] top-[25px] absolute flex-col justify-start items-start gap-[47px] inline-flex"
    style={{left:isSmallDevice?'5%':49}}>
      <div className="justify-start gap-2.5 flex flex-row items-start">
        <img src={reactB} alt='icon1' className='w-16 h-16 object-contain' />

        <div className="relative">
          <div className="w-[178px] h-[0px] left-0 top-[31px] absolute border-2 border-blue-700"></div>
          <div className="w-[189px] h-[72px] left-0 top-0 absolute text-white text-[26px] font-normal">Frontend Dev <br />React, NextJS</div>
        </div>
      </div>

      <div className="items-center inline-flex ">
        {!isSmallDevice?<div className="flex-col justify-start items-center gap-2 inline-flex">
          <div className="text-zinc-600 text-sm font-normal borderH1">{'<h1>'}</div>
          <div className="w-[5rem] h-[0px]  rotate-90 border border-zinc-600"></div>
          <div className="text-zinc-600 text-sm font-normal borderH12">{'</h1>'}</div>
        </div>:null}
        
        <div className="w-[265px] text-white text-base font-normal">Enthusiastic about UI/UX with a focus on development expertise in HTML, CSS, JavaScript, React, and Next.js frameworks.</div>
      </div>
    </div>
  </div>
  <div className="w-[18rem] h-[17rem] lg:w-[28rem] lg:h-[21.8rem] top-14 lg:top-0 bg-slate-950 border border-neutral-400 relative">
    <div className="left-[5%] lg:left-[49px] top-[25px] absolute flex-col justify-start items-start gap-[47px] inline-flex">
      <div className="justify-start gap-2.5 flex flex-row items-start">
        <img src={reactPhone} alt='icon1' className='w-16 h-16 object-contain' />

        <div className="relative">
          <div className="w-[178px] h-[0px] left-0 top-[31px] absolute border-2 border-pink-600"></div>
          <div className="w-[189px] h-[72px] left-0 top-0 absolute text-white text-[26px] font-normal">App Dev <br />React Native</div>
        </div>
      </div>

      <div className="items-center inline-flex ">
        {!isSmallDevice?<div className="flex-col justify-start items-center gap-2 inline-flex">
          <div className="text-zinc-600 text-sm font-normal borderH1">{'<h2>'}</div>
          <div className="w-[5rem] h-[0px]  rotate-90 border border-zinc-600"></div>
          <div className="text-zinc-600 text-sm font-normal borderH12">{'</h2>'}</div>
        </div>:null}
        
        <div className="w-[265px] text-white text-base font-normal">Experienced in developing mobile applications and cross-platform solutions utilizing the React Native framework.</div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Border