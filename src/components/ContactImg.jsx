import React from 'react'
import { astro, cvIcon, emIcon, lnIcon, whIcon } from '../assets'
import resume from '../assets/thomas_nika.pdf'
const ContactImg = () => {//custom svg 
  const isSmallDevice = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <div className="w-80 h-80 relative lg:bottom-0 bottom-[10rem] ">

      <a href={resume}  download="thomas_nika" className="h-14 w-14 lg:w-28 lg:h-28 left-0 top-[35%] lg:top-[20%] absolute z-10">
          <img src={cvIcon} alt={cvIcon} className="h-14 w-14 lg:w-28 lg:h-28  object-contain" />
      </a>
  
   
      
      <a href='mailto:thomasnika97@gmail.com' target='_blank'  className="pt-[4rem] lg:pt-0 h-14 w-14 lg:w-28 lg:h-28 left-14 lg:left-[27%] top:[3rem] lg:top-[-3rem] absolute z-10">
          <img src={emIcon} alt={emIcon} className="h-14 w-14 lg:w-28 lg:h-28  object-contain" />
      </a>
  
      <a href='https://api.whatsapp.com/send?phone=0049016096271310' target='_blank'className='pt-[4rem] lg:pt-0 h-14 w-14 lg:w-28 lg:h-28 left-[40%] top:[3rem] lg:left-[73%] lg:top-[-3rem] absolute z-10'>
        
            <img src={whIcon} alt={whIcon} className="h-14 w-14 lg:w-28 lg:h-28  object-contain" />
      </a>
  
 
      <a href='https://www.linkedin.com/in/thomasnikasit1997/' target='_blank' className=" pt-[35%] lg:pt-0 h-14 w-14 lg:w-28 lg:h-28 left-[55%] lg:left-[100%] lg:top-[20%] absolute z-10">
          <img src={lnIcon} alt={lnIcon} className="h-14 w-14 lg:w-28 lg:h-28  object-contain" />
      </a>
  
      <img className="w-48 h-48 lg:w-96 lg:h-96 left-5 top-[35%] lg:left-[51px] lg:top-[51px] absolute" src={astro} />
    </div>
  )
}

export default ContactImg