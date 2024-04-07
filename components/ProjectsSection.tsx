import React from "react";
import Image from "next/image";
import SlideUp from "./SlideUp";
import { BsGithub } from "react-icons/bs";
import { HiArrowDown } from "react-icons/hi";
import Link from "next/link";

const projects = [
  {
    name: "Explore Sri Lanka",
    description:
      "Explore Sri Lanka is a mobile app that provides necessary help to achieve tourist goals by offering guides to tourists with information on attractions in Sri Lanka.",
    image: "/home1.jpg",
    github: "https://github.com/DasuniNagodaVithana/Final-Project",
  },
  // Include other projects here if needed
];

const ProjectsSection = () => {
  const project = projects[0]; // Get the first project

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">Projects</h1>

      <div className="flex flex-col space-y-28">
        <div>
          <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
              <div className=" md:w-1/2">
                <Link href={{
                  pathname:"/ProjectInfo"
                }}>
                <Image
                  src={project.image}
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-xl shadow-xl hover:opacity-70"
                />
                </Link>
              </div>
              <div className="mt-8 md:w-1/2">
                <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <a href="#contact">
          <HiArrowDown size={35} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;