import React from 'react';
import Education from './Education';
import Skill from './Skill';
import Line from '../Line/Line';

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
      <br/>
      <Line />
    </div>
    
  );
};

export default Resume;
