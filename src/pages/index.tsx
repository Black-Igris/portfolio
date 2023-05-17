import Image from 'next/image'
import Head from 'next/head'
import Hero from '../../components/Hero'
import styles from "../styles/Home.module.css"
// import Header from '../../components/Header'
import Header from '../../components/Header'
export default function Home() {
  return (
    <div className='bg-gray-900 text-white h-screen w-screen'>
      <head>
        <title>Nitish Portfolio</title>
      </head>
      {/* Header */}
       <Header/> 
      {/* Hero */}
        <section id='hero'>
          <Hero/>
        </section>
      {/* About */}

      {/* Exp */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div> 
    
  )
}
