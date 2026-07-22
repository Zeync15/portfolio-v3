import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import { ProjectDetailsProps } from "@/data/ProjectDetailsList";

const actionClass =
  "inline-block border border-term-line text-term-muted text-[12.5px] px-6 py-2.5 rounded-lg transition-colors hover:border-term-green hover:text-term-green";

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
    <div className="w-full min-h-screen">
      <div className="w-full h-[300px] relative">
        <div className="absolute inset-0 bg-term-bg/75 z-10" />
        <Image
          className="object-cover"
          fill
          src={backgroundImg}
          alt={projectName}
        />
        <div className="absolute bottom-6 max-w-[1180px] w-full left-1/2 -translate-x-1/2 z-20 px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-term-fg">
            {projectName}
          </h2>
          <div className="text-term-muted text-sm mt-2 tracking-wide">
            {mainTechs.join(" · ")}
          </div>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-8 grid md:grid-cols-5 gap-8 pt-12 pb-16">
        <div className="md:col-span-4">
          <div className="text-[13px] text-term-green tracking-[0.16em]">
            $ cat overview.md
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-term-fg mt-3 mb-4">
            Project Overview
          </h2>
          <p className="text-[14.5px] leading-[1.8] text-term-muted">
            {projectDetails}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClass}
            >
              ./demo
            </Link>
            <Link
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClass}
            >
              ./code
            </Link>
          </div>
        </div>

        <div className="md:col-span-1 border border-term-border rounded-[14px] bg-term-panel p-5 h-fit">
          <p className="text-center font-medium text-term-fg-soft pb-3">
            Technologies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-1">
            {techStacks.map((stack, index) => (
              <p
                key={index}
                className="text-term-muted text-[13.5px] py-1.5 flex items-center gap-1"
              >
                <RiRadioButtonFill className="text-term-green" />
                {stack}
              </p>
            ))}
          </div>
        </div>

        <Link
          href="/#projects"
          className="md:col-span-5 text-[13px] text-term-green transition-colors hover:text-term-fg"
        >
          ← cd ..
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
