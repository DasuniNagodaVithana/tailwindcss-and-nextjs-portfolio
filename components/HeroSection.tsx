"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import me from '/public/me.jpg'
const HeroSection = () => {
  return (
    <section id="home">
       <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-5 py-16 sm:py-16 md:py-40 lg:py-16 xl:py-56 md:flex-row md:justify-center md:space-x-4 md:text-left">
        <div className="lg:mt-20 lg:pt-16 md:mt-2 md:w-1/2 ">
      <Image
        src={me}
        alt=""
        width={800} 
        height={400}
        className="rounded-xl shadow-2xl"
      />
    </div>
  <div className="flex flex-col items-center justify-center text-center md:flex-row md:space-x-4 md:text-left">
    <div className="md:w-1/2 md:mt-10">
      <h1 className="text-4xl font-bold mt-6 md:mt-12 md:text-6xl">Hi, I'm Dasuni NagodaVithana!</h1>
      <p className="text-lg mt-4 mb-6 md:text-2xl ">
        I'm a{" "}
        <span className="font-semibold text-teal-600">Web Developer </span>
        based in Sri Lanka.Working towards creating websites that
        make life easier and more meaningful.
      </p>
      <Link
        to="projects"
        className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        Projects
      </Link>
    </div>
    </div>
    
  </div>

      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
