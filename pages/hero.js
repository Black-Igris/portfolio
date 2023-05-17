import React from 'react'
import {Cursor ,useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";
const Hero = () => {
    const [text,count] = useTypewriter({
        words:["Hi my name's Nitish Rathi",
                "Guy-who-loves-Anime ",
                "<But-Loves-To-Code_more ///>",
    ],
    loop: true,
    delaySpeed:1000
    })
  return (
    <div>
    <motion.div
    initial = {{
      x: 500,
      opacity:0,
      scale:0.5,
    }}
    animate = {{
      x:0,
      opacity:1,
      scale:1,
    }}
    transition={{
      duration:1.2,
    }}
    >
        <h1>
        <span className='text-teal-600 font-large text-3xl'>{text}</span>
        <Cursor cursorColor='red'/>
        </h1>
    </motion.div>
    </div>
  )
}

export default Hero;