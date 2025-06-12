import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import { ProjectDetailsProps } from "@/data/ProjectDetailsList";

const ProjectDetails = ({
  backgroundImg,
  projectName,
  mainTechs,
  projectDetails,
  demoUrl,
  codeUrl,
  techStacks,
}: ProjectDetailsProps) => {
  return (
    <div className="w-full">
      <div className="w-screen h-[300px] relative">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={backgroundImg}
          alt={projectName}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{projectName}</h2>
          {mainTechs.map((tech, index) => (
            <span key={index}>
              {tech}
              {index !== mainTechs.length - 1 && ","}{" "}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="py-2">Project Overview</h2>
          <p>{projectDetails}</p>

          <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 cursor-pointer">Demo</button>
          </Link>

          <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 cursor-pointer">Code</button>
          </Link>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {techStacks.map((stack, index) => (
                <p key={index} className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  {stack}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
