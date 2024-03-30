"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll/modules"

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isDarkMode, setIsDarkMode] = useState(false); // Example dark mode state
  const { theme } = useTheme();

  // Listen for theme change and update isDarkMode accordingly
  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <section id="about" className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-center font-bold text-4xl">About Me</h1>
      <div className="flex flex-col md:flex-row space-y-10 items-center justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:text-left">
        <div className="md:w-1/2 md:order-last">
          <Image
            src="/hero-image.png"
            alt=""
            width={325}
            height={325}
            className="md:relative md:bottom-4 md:left-32 md:z-0"
          />
        </div>
        <div className="md:w-1/2 md:order-first">
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Get to know me!
          </h1>
          <p className="text-justify text-lg">
            I'm a passionate undergraduate student at the University of Sri Jayewardenepura, with a keen interest in <span className={`font-bold ${isDarkMode ? 'text-pink-500' : ''}`}>Web development</span> and <span className={`font-bold ${isDarkMode ? 'text-pink-500' : ''}`}>Business Intelligence</span>. I thrive on exploring the intersection between technology and business, constantly seeking to enhance my skills and knowledge in these fields. Through hands-on projects and academic endeavors, I aim to leverage web development tools and business intelligence techniques to create innovative solutions and drive impactful outcomes. Join me on this journey as I continue to learn, grow, and contribute to the dynamic world of technology and business.
          </p>
          
          {/* Tab Titles */}
          <div className="flex  mt-8 space-x-8"> {/* Increased space between tabs */}
            <p
              className={`tab-links cursor-pointer font-bold text-xl relative ${activeTab === "skills" ? "active-link" : ""}`} 
              onClick={() => handleTabClick("skills")}
            >
               <span className={` ${isDarkMode ? 'text-pink-500' : ''}`}>Skills</span>
              {activeTab === "skills" && <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-500 rounded-full transition-all"></span>} {/* Blue color line under active tab */}
            </p>
            <p
              className={`tab-links cursor-pointer font-bold text-xl relative ${activeTab === "education" ? "active-link" : ""}`} 
              onClick={() => handleTabClick("education")}
            >
              <span className={` ${isDarkMode ? 'text-pink-500' : ''}`}>Education</span>
              {activeTab === "education" && <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-500 rounded-full transition-all"></span>} {/* Blue color line under active tab */}
            </p>
            <p
              className={`tab-links cursor-pointer font-bold text-xl relative ${activeTab === "experience" ? "active-link" : ""}`} 
              onClick={() => handleTabClick("experience")}
            >
              <span className={` ${isDarkMode ? 'text-pink-500' : ''}`}>Experience</span>
              {activeTab === "experience" && <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-500 rounded-full transition-all"></span>} {/* Blue color line under active tab */}
            </p>
          </div>
          
          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "skills" && (
              <div>
                <ul>
                  <li>Web Development - Web app Development</li>
                  <li>App Development - Building Android apps</li>
                </ul>
              </div>
            )}
            {activeTab === "education" && (
              <div>
                <ul>
                  <li>2021-2025: University of Sri Jayewardenepura</li>
                  <li>2011-2020: Sanghamitta Vidyalaya</li>
                </ul>
              </div>
            )}
            {activeTab === "experience" && (
              <div>
                <ul>
                  <li>2024: Secretary ICTSA at universitu of Sri Jayewardenepura</li>
                  <li>2023-2024: Assistant Secretary ICTSA at universitu of Sri Jayewardenepura</li>
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="projects"
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
  );
};

export default AboutSection;
