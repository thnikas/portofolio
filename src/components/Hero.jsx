import { motion } from "framer-motion";

import { styles } from "../styles";
import Laptop from "./canvas/Laptop";
import { TypeAnimationCom } from "./Typeanimation";

const Hero = () => {
  return (
    <section className={`relative w-full  h-[120vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="gap-4 flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className='text-[#915EFF]'>Thomas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop and design <br className='sm:block hidden' />
            
          </p>
          {/*the text animation in hero screen*/}         
        <TypeAnimationCom/>
        </div>
      </div>
      

      
    
    

<Laptop/>





       <div className='absolute xs:bottom-1/4 bottom-1/4 w-full flex justify-center items-center'>
         <a href='#about'>
           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
             <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;