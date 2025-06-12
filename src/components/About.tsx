"use client";
import Link from "next/link";
import Image from "next/image";
import { AboutItemsList } from "@/data/AboutItemsList";

const About = () => {
  const workPhoto = "/assets/work-photo.jpg";

  return (
    <div id="about" className="w-full lg:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>

          <div>
            <h2 className="py-4">Who Am I</h2>

            {AboutItemsList.map((items, index) => (
              <p className="py-2 text-gray-600" key={index}>
                {items}
              </p>
            ))}
          </div>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out some of my latest projects.</Link>
          </p>
        </div>

        <div className="relative h-auto flex justify-center items-center mt-4 lg:mt-0">
          <Image
            src={workPhoto}
            width={400}
            height={0}
            alt="Work Photo"
            className="rounded-xl shadow-xl shadow-gray-400 p-4"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
