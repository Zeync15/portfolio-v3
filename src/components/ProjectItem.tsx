import Image from "next/image";
import Link from "next/link";

type ProjectItemProps = {
  title: string;
  backgroundImg: string;
  tech: string;
  projectUrl: string;
};

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
}: ProjectItemProps) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
      <Link href={projectUrl} className="md:hidden">
        <Image
          className="rounded-xl"
          src={backgroundImg}
          width={600}
          height={0}
          alt={title}
        />
      </Link>

      <Image
        className="rounded-xl group-hover:opacity-10 hidden md:block"
        src={backgroundImg}
        width={600}
        height={0}
        alt={title}
      />
      <div className="hidden group-hover:md:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-2 mt-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>

    // <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl">
    //   <Link href={projectUrl}>
    //     <Image
    //       className="rounded-xl"
    //       src={backgroundImg}
    //       width={600}
    //       height={0}
    //       alt={title}
    //     />
    //   </Link>
    // </div>
  );
};

export default ProjectItem;
