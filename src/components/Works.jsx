import { github,open } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"
import {motion} from 'framer-motion'
import { styles } from "../styles"
import { Tilt } from "react-tilt"
import { useState } from "react"

const ProjectCard=({index,name,description, tags, image, source_code_link,page_site})=>{
  const [show,setShow]=useState(false)
  return(
    <motion.div variants={fadeIn("up", "spring",index*0.5*0.75)} onMouseOver={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
       <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ' 
      >
        <div className="relative w-full h-[230px]">
  <a href={page_site} target="_blank" rel="noopener noreferrer">
    <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl z-10 cursor-pointer relative" />
  </a>
  <div className="absolute inset-0 flex justify-end m-3 gap-2">
    
      {/* <a  href={page_site} target="_blank" className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-20">
        <img src={open} alt='open' className="w-1/2 h-1/2 object-contain" />
      </a> */}
    
    {source_code_link ? (
      <a href={source_code_link} target="_blanck"  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-20">
        <img src={github} alt={github} className="w-1/2 h-1/2 object-contain" />
      </a>
    ) : null}
  </div>
</div>
        <div className='mt-5 h-[10rem]'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
} 

const Works = () => {
  return (
   <a >
      <motion.div variants={textVariant()} >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I've compiled a set of projects in my portfolio to demonstrate my skills and experience. 
          These projects are described briefly and come with links to their respective code repositories and live demos. 
          They serve as tangible examples of my ability to address complex 
          challenges, work with a variety of technologies, and effectively oversee project execution.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
   </a>
  )
}

export default SectionWrapper(Works,"work")