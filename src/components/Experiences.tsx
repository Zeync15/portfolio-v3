import { ExperienceItemsList } from "@/data/ExperienceItemsList";

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="px-8 py-[90px] border-t border-term-border-soft"
    >
      <div className="max-w-[1180px] mx-auto">
        <div className="text-[13px] text-term-green tracking-[0.16em]">
          $ git log --experience
        </div>
        <h2 className="font-display text-4xl sm:text-[44px] font-bold tracking-[-0.02em] mt-3.5 mb-10">
          What I&apos;ve done
        </h2>

        <div className="flex flex-col">
          {ExperienceItemsList.map((job, index) => (
            <div
              key={index}
              className="grid grid-cols-[22px_1fr] gap-[22px] pb-11"
            >
              {/* timeline rail */}
              <div className="flex flex-col items-center">
                <span className="w-3.5 h-3.5 rounded-full border-2 border-term-green bg-term-bg mt-1" />
                <span className="flex-1 w-0.5 bg-term-border mt-1.5" />
              </div>

              <div>
                <div className="text-xs text-term-dim">
                  commit <span className="text-term-hash">{job.hash}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-term-fg mt-2 mb-0.5">
                  {job.position}
                </h3>
                <div className="text-sm text-term-green">{job.company}</div>
                <div className="text-[12.5px] text-term-dim italic mt-[3px]">
                  {job.duration}
                </div>

                <div className="mt-[18px] flex flex-col gap-4">
                  {job.projects.map((project, idx) => (
                    <div
                      key={idx}
                      className="border border-term-border rounded-[10px] bg-term-panel px-5 py-[18px]"
                    >
                      <div className="text-[14.5px] font-medium text-term-fg-soft mb-2.5">
                        <span className="text-term-dim"># </span>
                        {project.projectName}
                      </div>
                      {project.projectDetails.map((detail, i) => (
                        <div
                          key={i}
                          className="text-[13.5px] leading-[1.6] text-term-muted py-0.5 pl-5 -indent-5"
                        >
                          <span className="text-term-green">+</span> {detail}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
