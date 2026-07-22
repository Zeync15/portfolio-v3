import Image from "next/image";
import { AboutItemsList } from "@/data/AboutItemsList";

const About = () => {
  return (
    <section
      id="about"
      className="px-8 py-[90px] border-t border-term-border-soft"
    >
      <div className="max-w-[1180px] mx-auto grid lg:grid-cols-[1.6fr_1fr] gap-12 items-start">
        <div>
          <div className="text-[13px] text-term-green tracking-[0.16em]">
            $ cat about.md
          </div>
          <h2 className="font-display text-4xl sm:text-[44px] font-bold tracking-[-0.02em] mt-3.5 mb-[34px]">
            Who am I
          </h2>

          <div className="flex flex-col gap-5">
            {AboutItemsList.map((para, index) => (
              <p
                key={index}
                className="text-[14.5px] leading-[1.8] text-term-muted pl-5 border-l-2 border-term-border"
              >
                {para}
              </p>
            ))}
            <a
              href="#projects"
              className="text-[13px] text-term-green mt-1.5 transition-colors hover:text-term-fg"
            >
              → check out some of my latest projects
            </a>
          </div>
        </div>

        <div className="lg:mt-[34px] border border-term-border rounded-[14px] overflow-hidden bg-term-panel">
          <div className="h-10 flex items-center gap-2 px-4 border-b border-term-border text-xs text-term-dim">
            <span className="w-2.5 h-2.5 rounded-full bg-term-line" />
            <span className="w-2.5 h-2.5 rounded-full bg-term-line" />
            <span className="ml-2">profile.jpg</span>
          </div>
          <Image
            src="/assets/work-photo.jpg"
            alt="Chai Ze Yen"
            width={600}
            height={600}
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
