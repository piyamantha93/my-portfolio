import React from 'react';
import Education from './Education';
import Skill from './Skill';

const Resume = () => {
  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 p-4">
          <Education />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Skill />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="flex justify-center items-center bg-gray-200 m-5 p-0 ">
        <div className="w-full max-w-7xl h-[2px] bg-gray-500"></div>
      </div>
    </div>
  );
};

export default Resume;
