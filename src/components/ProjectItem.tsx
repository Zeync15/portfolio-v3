import Image from "next/image";

type ProjectItemProps = {
  title: string;
  tech: string;
  slug: string;
  img: string;
  demo: string;
  code: string;
};

const linkClass =
  "border border-term-line text-term-muted text-[11.5px] px-4 py-2 rounded-[7px] transition-colors hover:border-term-green hover:text-term-green";

const ProjectItem = ({ title, tech, slug, img, demo, code }: ProjectItemProps) => {
  return (
    <div className="group border border-term-border rounded-[14px] bg-term-panel overflow-hidden transition-colors hover:border-term-green">
      <div className="overflow-hidden aspect-video bg-term-panel-dark">
        <Image
          src={img}
          alt={title}
          width={640}
          height={360}
          className="w-full h-full object-cover grayscale-[0.7] brightness-[0.7] transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100"
        />
      </div>
      <div className="px-[22px] py-5 flex flex-col gap-2.5">
        <div className="text-[11.5px] text-term-dim">~/projects/{slug}</div>
        <h3 className="font-display text-[22px] font-semibold text-term-fg">
          {title}
        </h3>
        <div className="text-[12.5px] text-term-muted">{tech}</div>
        <div className="flex gap-2.5 mt-1.5">
          <a href={demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
            ./demo
          </a>
          <a href={code} target="_blank" rel="noopener noreferrer" className={linkClass}>
            ./code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
