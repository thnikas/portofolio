import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'
import Border from './Border'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
        Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}>
      I'm really passionate about diving into new technologies and keeping up with the latest 
      rends in Web Development and Mobile Applications. This excitement fuels my continuous drive to 
      learn and enhance my skills, ensuring that I can 
      effectively meet the demands of our rapidly changing work landscape.
      </motion.p>
     
      <motion.div variants={fadeIn("","",0.1,3)} className='flex-col flex items-center'>
       <Border/>
      </motion.div>
     

      
        </>
  
  )
}

export default SectionWrapper(About,"about")