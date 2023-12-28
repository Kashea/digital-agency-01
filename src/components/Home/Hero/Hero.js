'use client'
import Image from "next/image"
import './Hero.css'
import image from "@/constant/Images/image"
import Link from "next/link"
import {motion } from 'framer-motion'


const Home = () => {
  return (
    <section className="app__hero relative">
    <div className="mx-auto max-w-7xl p-6 lg:px-8 z-2">
    <div className="flex items-center justify-between py-32 md:py-36">
    <motion.div
    initial={{ opacity: 0, y:15 }}
    animate={{ opacity: 1, y:0 }}  
    exit={{opacity: 0, y:15}}
    transition={{delay: 0.25}}
    className="flex-1">
    <h1 className="text-4xl lg:text-6xl text-white font-extrabold mb-4 capitalize">You speak and we help you execute it in your own way!! Welcome To WebDev!</h1>
    <p className="text-base text-white mb-4">WebDev have experts who are experienced and knows how and what specification of a company or a product are to be showcased.</p>
    <div className="flex gap-5">
    <Link href="/contact" className="primary-btn shadow-lg">Get Started</Link>
    <Link href="/about" className="secondary-btn shadow-lg">Know More</Link>
    </div>
    </motion.div>
    <div className=" flex-1 hidden lg:block">
    <Image src={image.webdev} alt="dm"/></div>
    </div>
    </div>

    <div className="absolute circle-animation rounded-full animate-[spin_4s_linear_infinite] z-1">
    <div className="circle-animation-child rounded-full"></div>
    </div>
    <div className="absolute half-circle-animation rounded-full animate-[spin_3s_linear_infinite] z-1">
    <div className="half-circle-animation-child rounded-full"></div>
    </div>
    <div className="absolute square-animation animate-[spin_3s_linear_infinite] z-1">
    <div className="square-animation-child"></div>
    </div>
    <div className="absolute bubble-animation flex h-3 w-3 z-1">
    <span className="animate-[ping_1s_linear_infinite] absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
    </div>
    <div className="absolute square-animation-2 animate-[spin_2s_linear_infinite] z-1">
    <div className="square-animation-child-2"></div>
    </div>
    <div className="absolute square-animation-3 animate-[spin_3s_linear_infinite] z-1">
    <div className="square-animation-child-3"></div>
    </div>
    </section>
  )
}

export default Home