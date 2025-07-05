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

// Skill icons array for reuse
const skillIcons = [
  { icon: <RiReactjsLine />, color: "text-cyan-400" },
  { icon: <SiMongodb />, color: "text-green-500" },
  { icon: <SiMysql />, color: "text-blue-500" },
  { icon: <FaNodeJs />, color: "text-green-500" },
  { icon: <SiSpringboot />, color: "text-green-500" },
  { icon: <SiTailwindcss />, color: "text-blue-500" },
  { icon: <SiFigma />, color: "text-red-500" },
  { icon: <SiNextdotjs />, color: "text-black" },
];

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "UI Designer.", "MERN Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <>
      {/* Mobile View */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4 lg:hidden text-center text-gray-950">
        <br/>
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-3xl font-bold mt-2">
          Hi, I'm <span className="text-gray-600">Piyamantha Weerasinghe</span>
        </h1>
         <h2 className="text-2xl lg:text-4xl font-bold">
            a <span>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="blue" />
          </h2>

        {/* Banner Image */}
        <img
          src={bannerImage}
          alt="Profile"
          className="w-[250px] h-[250px] mt-6 rounded-full object-cover border-2 border-gray-100 shadow-xl"
        />

        {/* Description */}
        <p className="text-base mt-6 px-4 leading-relaxed">
          I am Piyamantha Weerasinghe, a Software Engineering graduate from
          Cardiff Metropolitan University. With a strong passion for technology,
          I specialize in full-stack development, databases, and software
          solutions. I am a responsible, hardworking, and team-oriented
          individual, always eager to take on challenging roles that allow me to
          apply my technical expertise while learning about the latest trends
          in the IT industry. My goal is to contribute to innovative projects
          and continuously grow as a developer.
        </p>

        {/* Best Skills */}
        <h2 className="text-base uppercase font-titleFont mt-6 mb-2">
          BEST SKILL ON
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {skillIcons.map((item, index) => (
            <span
              key={index}
              className={`bannerIcon text-3xl ${item.color} p-4 bg-gray-800 rounded-md hover:scale-110 transition-transform`}
            >
              {item.icon}
            </span>
          ))}
        </div>
      </section>

      {/* Desktop View */}
      <section className="hidden lg:flex w-full min-h-screen flex-row items-center justify-center bg-gray-200 p-8 text-gray-950">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 p-4">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold">
            Hi, I'm{" "}
            <span className="text-gray-600">Piyamantha Weerasinghe</span>
          </h1>
         <h2 className="text-2xl lg:text-4xl font-bold">
            a <span>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="blue" />
          </h2>

          <p className="text-base leading-relaxed">
            I am Piyamantha Weerasinghe, a Software Engineering graduate from
            Cardiff Metropolitan University. With a strong passion for
            technology, I specialize in full-stack development, databases, and
            software solutions. I am a responsible, hardworking, and
            team-oriented individual, always eager to take on challenging roles
            that allow me to apply my technical expertise while learning about
            the latest trends in the IT industry. My goal is to contribute to
            innovative projects and continuously grow as a developer.
          </p>

          {/* Skills */}
          <h2 className="text-base uppercase font-titleFont mb-2">
            BEST SKILL ON
          </h2>
          <div className="flex flex-wrap gap-4">
            {skillIcons.map((item, index) => (
              <span
                key={index}
                className={`bannerIcon text-3xl ${item.color} p-4 bg-gray-800 rounded-md hover:scale-110 transition-transform`}
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section - Banner Image */}
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <img
            src={bannerImage}
            alt="Profile"
            className="w-[370px] h-[370px] rounded-full object-cover border-2 border-gray-100 shadow-xl"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center items-center bg-gray-200 m-0 p-0">
        <div className="w-full max-w-7xl h-[2px] bg-gray-500"></div>
      </div>
    </>
  );
};

export default Banner;
