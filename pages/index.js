import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { SocialIcon } from "react-social-icons";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import Hero from "../components/hero";
import { motion } from "framer-motion";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      
      <Head>
        <title>Nitish portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <motion.div className="text-center p-10 py-10">
              <Hero/>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full stack devloper.
            </h3>
            {/* <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a Full stack devloper skilled in problem-solving and
              specializing in Front end devlopment . currently I'm focused on
              creating and devloping more beautiful and usefull
            </p> */}
            <motion.div
              className="text-center p-10 py-10"
              initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 2.5,
              }}
            >
              <blockquote class="text-xl py-5 font-semibold italic text-center text-slate-900 max-w-xl mx-auto dark:text-white">
                I am a ".
                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                  <span class="relative text-white">Full stack devloper</span>
                </span>
                ."skilled in problem-solving and specializing in Front end
                devlopment . currently I'm focused on creating and devloping
                more beautiful and usefull
              </blockquote>
            </motion.div>
            <motion.div
              className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 "
              initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
            >
              <SocialIcon
                url="https://www.instagram.com/nii.____19/"
                fgColor="gray"
                bgColor="transparent"
                className="hover:scale-150 transition-all duration-500 cursor-pointer hover:z-10"
              />
              <SocialIcon
                url="https://github.com/Black-Igris"
                fgColor="gray"
                bgColor="transparent"
                className="hover:scale-150 transition-all duration-500 cursor-pointer hover:z-10"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/nitish-rathi-321253196/"
                fgColor="gray"
                bgColor="transparent"
                className="hover:scale-150 transition-all duration-500 cursor-pointer hover:z-10"
              />
            </motion.div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </motion.div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a fullstack developer, I've
              done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white 
            flex-1 hover:scale-125 transition-all duration-500 cursor-pointer hover:z-10">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Framer</p>
              <p className="text-gray-800 py-1">Reactjs/Nextjs</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">Indesig</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-125 transition-all duration-500 cursor-pointer hover:z-10">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Framer</p>
              <p className="text-gray-800 py-1">Reactjs/Nextjs</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">Indesig</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-125 transition-all duration-500 cursor-pointer hover:z-10">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Framer</p>
              <p className="text-gray-800 py-1">Reactjs/Nextjs</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">Indesig</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a fullstack developer, I've
              done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <motion.div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            <div className="basis-1/3 flex-1 hover:scale-125 transition-all duration-500 cursor-pointer hover:z-10">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-125 transition-all duration-500 cursor-pointer hover:z-10">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-125 transition-all duration-500 cursor-pointer hover:z-10">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-125 transition-all duration-500 cursor-pointer hover:z-10">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-125 transition-all duration-500 cursor-pointer hover:z-10">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-125 transition-all duration-500 cursor-pointer hover:z-10">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
