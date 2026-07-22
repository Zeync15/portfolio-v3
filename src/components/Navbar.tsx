"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = ["home", "about", "skills", "experiences", "projects"];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] h-14 bg-term-bg/80 backdrop-blur-md border-b border-term-border">
      <div className="max-w-[1180px] mx-auto h-full flex items-center justify-between px-8">
        <Link
          href="#home"
          className="font-bold text-sm tracking-[0.04em]"
          onClick={() => setNav(false)}
        >
          <span className="text-term-green">~/</span>zeyen
        </Link>

        <nav className="hidden md:flex gap-[30px] text-[12.5px] tracking-[0.08em] text-term-nav lowercase">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="transition-colors hover:text-term-green"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setNav((prev) => !prev)}
          className="md:hidden text-term-nav"
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </div>

      {/* mobile menu */}
      {nav && (
        <nav className="md:hidden bg-term-bg/95 backdrop-blur-md border-b border-term-border">
          <div className="flex flex-col px-8 py-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setNav(false)}
                className="py-3 text-sm tracking-[0.08em] text-term-nav lowercase transition-colors hover:text-term-green"
              >
                <span className="text-term-green">$ </span>
                {link}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
