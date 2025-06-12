import React from "react";
import { ExperienceItemsList } from "../data/ExperienceItemsList";

const Experiences = () => {
  return (
    <div id="experiences">
      <div className="invisible mb-5 lg:mb-10">Working Experience</div>
      <div className="w-full h-full p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto">
          <div>
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              Working Experience
            </p>

            <h2 className="py-4 mb-4">What I&apos;ve done</h2>
          </div>

          {ExperienceItemsList.map((items, index) => (
            <div key={index} className="lg:grid grid-cols-5 gap-12 mb-4">
              <div className="lg:col-span-2">
                <h2 className="font-2xl">{items.position}</h2>
                <p className="mt-3">{items.company}</p>
                <p className="mt-3 italic">{items.duration}</p>
              </div>

              <div className="col-span-3 mt-4 lg:mt-0">
                {items.projects.map((project, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="text-2xl">Project: {project.projectName}</h3>
                    {project.projectDetails.map((details, i) => (
                      <p key={i} className="py-2">
                        {details}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
