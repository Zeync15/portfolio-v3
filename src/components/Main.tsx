"use client";

// import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Main = () => {
  // const [isClicked, setIsClicked] = useState(false);

  const openLinkedIn = () =>
    window.open(
      "https://www.linkedin.com/in/chai-ze-yen/",
      "_blank",
      "noopener,noreferrer"
    );

  const openGitHub = () =>
    window.open("https://github.com/Zeync15", "_blank", "noopener,noreferrer");

  const openWhatsApp = () =>
    window.open("https://wa.me/601112881135", "_blank", "noopener,noreferrer");

  const openEmail = () =>
    window.open("mailto:zeyenchai@gmail.com?subject=Enquiry&body=Hi Ze Yen,");

  // const handleCopyEmail = () => {
  //   navigator.clipboard.writeText("zeyenchai@gmail.com");
  //   setIsClicked(true);
  //   setTimeout(() => setIsClicked(false), 500); // 0.5 seconds
  // };

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Chai Ze Yen</span>
          </h1>

          <h1 className="py-2 text-gray-700">A Frontend Web Developer</h1>

          <p className="py-4 text-gray-600 max-w-[60%] m-auto uppercase tracking-widest">
            Let&apos;s Connect
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              onClick={openLinkedIn}
            >
              <FaLinkedin className="h-6 w-6" />
            </div>

            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              onClick={openWhatsApp}
            >
              <FaWhatsapp className="h-6 w-6" />
            </div>

            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              onClick={openEmail}
            >
              <AiOutlineMail className="h-6 w-6" />
            </div>

            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              onClick={openGitHub}
            >
              <FaGithub className="h-6 w-6" />
            </div>

            {/* <div className="relative group">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 ">
                <AiOutlineMail className="h-6 w-6" />
              </div>

              <div
                className="absolute left-1/2 -top-8 transform -translate-x-1/2 bg-gray-800 text-white
                text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap cursor-pointer"
                onClick={handleCopyEmail}
              >
                {isClicked ? "Copied!" : "zeyenchai@gmail.com"}
              </div>
            </div> */}

            {/* <Link
              href="mailto:zeyenchai@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Chat on email
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
