import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import bannerImage from '../../assets/bannerImg.png'; // Adjust the path as needed
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiSpringboot } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';


const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  

  return (
    <section className="w-full h-[950px] flex items-center justify-center bg-gray-200 p-8">
      {/* Left Side - Text and Media Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6  text-gray-950">
        <h4 className="text-lg font-normal text-gray-950">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold">
          Hi, I'm <span className="text-gray-950">Piyamantha Weerasighe</span>
        </h1>
        <h2 className="text-4xl font-bold">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="red" />
        </h2>
        <p className="text-base leading-relaxed text-gray-950">
        I am an undergraduate student at Cardiff Metropolitan University pursuing a degree in Software engineering. I am currently in the 3rd year, 2nd semester of my program. I am a responsible and hardworking individual, and I believe that I am a good team player. I am looking for a challenging role in a respectable firm where I can put my technical, database, and management talents to good use while also learning about new and developing trends in the IT industry.
        </p>
        
        {/* Social Links and Skills Section */}
        
      
          <h2 className="text-base uppercase font-titleFont  gap-8 mb-6">
            BEST SKILL ON
          </h2>
          <div className=" flex gap-6">
         
<span className="bannerIcon text-3xl text-cyan-400 p-4 bg-gray-800 border border-transparent rounded-md transition-transform duration-200 hover:scale-110">
  <RiReactjsLine />
</span>
<span className="bannerIcon text-3xl text-green-500 p-4 bg-gray-800 border border-transparent rounded-md transition-transform duration-200 hover:scale-110">
  <SiMongodb />
</span>
<span className="bannerIcon text-3xl text-blue-500 p-4 bg-gray-800 border border-transparent rounded-md transition-transform duration-200 hover:scale-110">
  <SiMysql />
</span>
<span className="bannerIcon text-3xl text-green-500 p-4 bg-gray-800 border border-transparent rounded-md transition-transform duration-200 hover:scale-110">
  <FaNodeJs />
</span>

<span className="bannerIcon text-3xl text-green-500 p-4 bg-gray-800 border border-transparent rounded-md transition-transform duration-200 hover:scale-110">
  <SiSpringboot />
</span>
<span className="bannerIcon text-3xl text-blue-500 p-4 bg-gray-800 border border-transparent rounded-md transition-transform duration-200 hover:scale-110">
  <SiTailwindcss />
</span>

</div>





</div>



  


         
          

      {/* Right Side - Image Section */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
        <img
          src={bannerImage}
          alt="Profile"
          className="w-[500px] h-[600px] lgl:w-[500px] lgl:h-[680px] z-10"
        />
      </div>
    </section>
  );
}

export default Banner;
