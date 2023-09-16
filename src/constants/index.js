import {
    
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    figma,
   
    Onboarding,
    ThessParkingScreen,
    mui,
    amiibo,
    nextJs,
    firebase, 
    sanity, 
    grafbase,
    beatshop,
    figmaP
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {

      name:"NextJs",
      icon:nextJs
    },
    {
      name:"Firebase",
      icon:firebase
    },
    { name:"Sanity",
      icon:sanity
    },
    { name:"Grafbase",
      icon:grafbase
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name:"Mui",
      icon:mui
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
   
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  
  
  const projects = [
    {
      name: "Amiibo Hub",
      description:
        "A website designed to assist users in discovering the ideal Amiibo figure tailored to their preferences, while also providing a convenient option to purchase it directly through Amazon.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "nextJs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: amiibo,
      source_code_link: "https://github.com/thnikas/amiiboHub",
      page_site:"https://amiibo-hub.vercel.app/"
    },
    {
      name: "BeatHub",
      description:
        "Discover premium audio gear at BeatShop - your hub for headphones, speakers, and smartwatches. Our user-friendly site, powered by Next.js, Sanity, and Stripe, ensures a secure and smooth shopping journey.",
      tags: [
        {
          name: "sanity",
          color: "blue-text-gradient",
        },
        {
          name: "nextJs",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
      ],
      image: beatshop,
      source_code_link: "https://github.com/thnikas/eccomerce_sanity",
      page_site:"https://beatshop.vercel.app/"
      
    },
    {
      name: "TreffU",
      description:
        "TreffU is an innovative dating application developed using the React Native framework and powered by Firebase. Its primary objective is to empower users to take the initiative in meeting new people.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Onboarding,
      source_code_link: "https://github.com/thnikas/treffU",
      page_site:'https://appetize.io/app/vzkt5kmpksyf4gm62oxayfef4i?device=pixel6&osVersion=12.0&scale=75'
    },
    {
      name: "ThessParking",
      description:
        "ThessParking solves urban parking issues by helping users find nearby parking spots with information on hours, prices, and capacity. It also provides navigation guidance and the option to save favorite spots.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ThessParkingScreen,
      source_code_link: "https://github.com/thnikas/Thessparking",
      page_site:'https://appetize.io/app/nuwy7ymvfbtrkqujq6mmnhwghq?device=pixel6&osVersion=12.0&scale=75&fbclid=IwAR0zsurzTH8UWVeS_kMPum5xJTTGDvkBzaQiQQRef_Xrc7hMji3bxSZrj1s'
    },
    {
      name: "ShopPulse",
      description:
        "Figma design for an e-commerce app. It's a user-friendly and visually appealing concept that enhances the online shopping experience.",
      tags: [
        {
          name: "figma",
          color: "green-pink-text-gradient",
        },
        
      ],
      image: figmaP,
      // source_code_link: "https://github.com/thnikas/Thessparking",
      page_site:'https://www.figma.com/proto/z3raAhySazC0Hd4zqkkpwA/Design-System?page-id=26596%3A942&node-id=45908-75433&starting-point-node-id=45908%3A75433&scaling=scale-down&show-proto-sidebar=1&t=rsMdaZ5AVEHudVXG-1&fbclid=IwAR1vQ5KEupSxXVuIqA6TNwBlJZEIz4ZvrsDzoWLVMBrQqyncCWKzdYYyjOo'
    },
  ];
  
  export {  technologies,   projects };