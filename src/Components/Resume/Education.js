import React from 'react';

const Education = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education</h2>
      <div className="bg-gray-500 p-4 rounded shadow-md mb-4">
        <h3 className="text-xl font-semibold">Cardiff Metropolitan University</h3>
        <p className="text-gray-900">BSc in Software Engineering</p>
        <p className="text-gray-900">2023 - 2024</p>
        <p className="text-gray-700">Second Upper Class </p>
      </div>
      
      <div className="bg-gray-500 p-4 rounded shadow-md mb-4">
        <h3 className="text-xl font-semibold">Cardiff Metropolitan University</h3>
        <p className="text-gray-900">HD in Software Engineering</p>
        <p className="text-gray-900">2020 - 2022</p>
        <p className="text-gray-700">Second Lower Class </p>
      </div>
     
      <div className="bg-gray-500 p-4 rounded shadow-md mb-4">
        <h3 className="text-xl font-semibold">Welimada Central Collage</h3>
        <p className="text-gray-900">Secondary Education</p>
        <p className="text-gray-900">2011 - 2018</p>
      </div>
      {/* Add more educational entries here as needed */}
    </section>
  );
};

export default Education;
