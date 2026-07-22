import ProjectItem from "./ProjectItem";
import { ProjectsList } from "@/data/ProjectsList";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-8 py-[90px] border-t border-term-border-soft"
    >
      <div className="max-w-[1180px] mx-auto">
        <div className="text-[13px] text-term-green tracking-[0.16em]">
          $ ls projects/
        </div>
        <h2 className="font-display text-4xl sm:text-[44px] font-bold tracking-[-0.02em] mt-3.5 mb-[34px]">
          What I&apos;ve built
        </h2>

        <div className="grid md:grid-cols-2 gap-[22px]">
          {ProjectsList.map((project) => (
            <ProjectItem key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
