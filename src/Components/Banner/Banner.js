import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import bannerImage from "../../assets/images/bannerImg.jpeg";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import "./banner.css";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer.",
      "UI Designer.",
      "MERN Stack Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <>
  
      <section className="w-full  min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-200 p-4 lg:p-8">
        {/* Left Side - Text and Media Section */}

         
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-gray-950 p-4">
          <h4 className="text-lg font-normal text-gray-950">
            WELCOME TO MY WORLD
          </h4>
          <h1 className="text-4xl lg:text-6xl font-bold">
            Hi, I'm <span className="text-gray-600">Piyamantha Weerasighe</span>
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold">
            a <span>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="blue" />
          </h2>
          <p className="text-base leading-relaxed text-gray-950">
          I am Piyamantha Weerasingha, a Software Engineering graduate from Cardiff Metropolitan University. With a strong passion for technology, I specialize in full-stack development, databases, and software solutions. I am a responsible, hardworking, and team-oriented individual, always eager to take on challenging roles that allow me to apply my technical expertise while learning about the latest trends in the IT industry. My goal is to contribute to innovative projects and continuously grow as a developer.
          </p>





          {/* Social Links and Skills Section */}
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4 flex-wrap">
            <span className="bannerIcon text-3xl text-cyan-400 p-4 bg-gray-800 rounded-md hover:scale-110 transition-transform">
              <RiReactjsLine />
            </span>
            <span className="bannerIcon text-3xl text-green-500 p-4 bg-gray-800 rounded-md hover:scale-110 transition-transform">
              <SiMongodb />
            </span>
            <span className="bannerIcon text-3xl text-blue-500 p-4 bg-gray-800 rounded-md hover:scale-110 transition-transform">
              <SiMysql />
            </span>
            <span className="bannerIcon text-3xl text-green-500 p-4 bg-gray-800 rounded-md hover:scale-110 transition-transform">
              <FaNodeJs />
            </span>
            <span className="bannerIcon text-3xl text-green-500 p-4 bg-gray-800 rounded-md hover:scale-110 transition-transform">
              <SiSpringboot />
            </span>
            <span className="bannerIcon text-3xl text-blue-500 p-4 bg-gray-800 rounded-md hover:scale-110 transition-transform">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon text-3xl text-red-500 p-4 bg-gray-800 rounded-md hover:scale-110 transition-transform">
              <SiFigma />
            </span>
            <span className="bannerIcon text-3xl text-black p-4 bg-gray-800 rounded-md hover:scale-110 transition-transform">
              <SiNextdotjs />
            </span>
          </div>
        </div>
{/* Right Side - Image Section */}
<div className="w-full lg:w-1/2 flex justify-center p-4 mt-6 lg:mt-0">
  <img
    src={bannerImage}
    alt="Profile"
    className="hidden lg:block w-[370px] h-[370px] rounded-full object-cover border-4 border-gray-700 shadow-xl"
  />
</div>



      </section>


      

      <div className="flex justify-center items-center bg-gray-200 m-0 p-0">
        {/* Horizontal Line */}
        <div className="w-full max-w-7xl h-[2px] bg-gray-500"></div>
      </div>

    
    </>
  );
};

export default Banner;



