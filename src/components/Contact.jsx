import React,{useState,useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import {SectionWrapper} from '../hoc'
import { slideIn } from '../utils/motion'
import { astro, cvIcon, emIcon, lnIcon, whIcon } from '../assets'
import ContactImg from './ContactImg'


const Contact = () => {
  const formRef=useRef()
  const isSmallDevice = window.innerWidth <= 768; // Adjust the breakpoint as needed
  const height=window.innerHeight

  const [form, setForm]=useState({name:'',email:"",message:''})
  const [loading, setLoading]=useState(false)
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {//when the user submits the form
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_s3mmosq',
        'template_x35m9zc',
        {
          from_name: form.name,
          to_name: "Thomas",
          from_email: form.email,
          to_email: "thomasnika97@gmail.com",
          message: form.message,
        },
        'pJsgzKTjZvUx1NUhJ'      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 ' style={{flexDirection:isSmallDevice?'column-reverse':'inherit',paddingTop:isSmallDevice?height*0.1:0}}>
      <motion.div variants={slideIn('left','tween',0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-6 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>
            <input type='text' name='name' value={form.name} 
            onChange={handleChange} placeholder="What's your name?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none
            border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>
            <input type='email' name='email' value={form.email} 
            onChange={handleChange} placeholder="What's your email?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none
            border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>
            <textarea rows="3"  name='message' value={form.message} 
            onChange={handleChange} placeholder="What do you want to say?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none
            border-none font-medium'/>
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div //custom astro svg
              animate={{
                y: [0, 40, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
               className='pt-[10%] pl-[3rem] h-40 w-40 lg:h-80 lg:w-80'
            > <ContactImg/></motion.div>
    
      
    </div>
  )
}

export default SectionWrapper (Contact, "contact")