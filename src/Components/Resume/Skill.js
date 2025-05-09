// import React from "react";


// const Skill = () => {
//   const skills = [
//     { name: "Node.js", level: "80%" },
//     { name: "React.js", level: "85%" },
//     { name: "MongoDB", level: "75%" },
//     { name: "Git", level: "70%" },
//     { name: "Spring Boot", level: "65%" },
//     { name: "Bootstrap", level: "90%" },
//     { name: "Next.js", level: "65%" },
//   ];

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "/Piyamantha_CV.pdf"; 
//     link.download = "Piyamantha_CV.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
  
//   return (
//     <section>
//       <h2 className="text-2xl font-semibold text-gray-700 mb-4">Skills</h2>
//       {skills.map((skill, index) => (
//         <div key={index} className="mb-4">
//           <div className="flex justify-between">
//             <span className="text-lg font-medium">{skill.name}</span>
//             <span className="text-gray-500">{skill.level}</span>
//           </div>
//           <div className="w-full bg-gray-300 rounded-full h-2.5">
//             <div
//               className="bg-gray-700 h-2.5 rounded-full"
//               style={{ width: skill.level }}
//             ></div>
//           </div>
//         </div>
//       ))}

//       {/* Download Resume Button */}
//       <div className="mt-4 flex justify-left">
//         <button
//           onClick={handleDownload}
//           className="bg-blue-400 text-gray-100 px-6 py-2 rounded-lg text-lg font-small hover:bg-blue-200 transition duration-300"
//         >
//           Download Resume
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Skill;
import React from "react";
import { toast } from "react-hot-toast";

const Skill = () => {
  const skills = [
    { name: "Node.js", level: "80%" },
    { name: "React.js", level: "85%" },
    { name: "MongoDB", level: "75%" },
    { name: "Git", level: "70%" },
    { name: "Spring Boot", level: "65%" },
    { name: "Bootstrap", level: "90%" },
    { name: "Next.js", level: "65%" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Piyamantha_CV.pdf"; // File should be directly inside the "public" folder
    link.download = "Piyamantha_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Check if the file is accessible
    fetch(link.href)
      .then(response => {
        if (!response.ok) {
          throw new Error('File not found');
        }
        toast.success('Download started successfully! 🎉');
      })
      .catch(error => {
        toast.error('Failed to download file 😢');
        console.error('Download error:', error);
      });
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between">
            <span className="text-lg font-medium">{skill.name}</span>
            <span className="text-gray-500">{skill.level}</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2.5">
            <div
              className="bg-gray-700 h-2.5 rounded-full"
              style={{ width: skill.level }}
            ></div>
          </div>
        </div>
      ))}

      {/* Download Resume Button */}
      <div className="mt-8 flex justify-left">
        <button
          onClick={handleDownload}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-400 transition duration-300 shadow-md"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Skill;
