import { SkillsList } from "@/data/SkillsList";

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-8 py-[90px] border-t border-term-border-soft"
    >
      <div className="max-w-[1180px] mx-auto">
        <div className="text-[13px] text-term-green tracking-[0.16em]">
          $ ls skills/
        </div>
        <h2 className="font-display text-4xl sm:text-[44px] font-bold tracking-[-0.02em] mt-3.5 mb-[34px]">
          What can I do
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SkillsList.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group border border-term-border rounded-xl bg-term-panel p-5 flex items-center gap-3.5 transition-all duration-200 hover:border-term-green hover:-translate-y-1"
              >
                <Icon
                  size={42}
                  color={skill.color}
                  className="shrink-0"
                  aria-label={skill.skill}
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-term-fg">
                    {skill.skill}
                  </span>
                  <span className="text-[11px] text-term-dim">{skill.ext}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
