"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [showLogo, setShowLogo] = useState(true);

  const navLogo = "/assets/zeyen-logo-larger-outline.png";

  useEffect(() => {
    if (
      pathname === "/csv" ||
      pathname === "/context" ||
      pathname === "/campsite" ||
      pathname === "/unicloth"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
      setShowLogo(false);
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
      setShowLogo(true);
    }
  }, [pathname]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className={showLogo ? "" : "hidden"}>
          <Link href="/">
            <Image
              src={navLogo}
              alt="Ze Yen"
              width="200"
              height="200"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#home">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#experiences">Experiences</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
          </ul>

          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between -mt-12">
              <Link href="/#home">
                <Image
                  src={navLogo}
                  alt="Ze Yen"
                  width={150}
                  height={0}
                  className="cursor-pointer"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            {/* <div className="border-b border-gray-300 -mt-4 mb-4">
              <p className="w-[85%] md:w-[95%] py-4">
                Let&apos;s build something together
              </p>
            </div> */}
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/">Home</Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#about">About</Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#skills">Skills</Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#experiences">Experiences</Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#projects">Projects</Link>
              </li>
            </ul>
          </div>

          <div className="pt-40">
            <p className="uppercase tracking-widest text-gray-600">
              Let&apos;s Connect
            </p>

            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>

              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>

              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>

              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
