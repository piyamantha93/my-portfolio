
import React, { useState } from "react";
import Title from "../layouts/Titel";
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";


const projectData = [
  {
    id: 1,
    title: "Stress Detection Web Project",
    des: "The Stress Detection Web Project is a full-stack app that uses a machine learning model trained on health and lifestyle data to predict stress levels. It features a React.js frontend with Material-UI and custom CSS, and a Node.js, Express.js, and MongoDB backend for secure data handling.",
    src: projectOne,
    githubLink: "https://github.com/piyamantha93/Stress_Detection",
 
  },
  {
    id: 2,
    title: "ABC Lab System",
    des: "The ABC Lab System is a laboratory management solution built with Spring Boot for a scalable backend and Bootstrap for a responsive frontend. It uses MySQL for secure data handling and offers features like user registration, authentication, test management, appointment scheduling, result tracking, and billing.",
    src: projectTwo,
    githubLink: "https://github.com/piyamantha93/AbcLabSystem",
   
  },
  {
    id: 3,
    title: "My Portfolio",
    des: "This React and Tailwind CSS portfolio highlights my full-stack skills with sections like Home, Projects, and Contact. It showcases expertise in modern web technologies and includes animations, smooth navigation, and GitHub/LinkedIn links for easy connection.",
    src: projectThree,
    githubLink: "https://github.com/piyamantha93/my-portfolio",

  },

  {
    id: 4,
    title: "Ecommerce Website",
    des: "A fully responsive front-end e-commerce web application built using React.js and Tailwind CSS. This modern shopping platform features a clean and intuitive user interface, allowing users to explore products across multiple categories such as Men, Women, Kids, Accessories, and more. .",
    src: projectFour,
    githubLink: "https://github.com/piyamantha93/E-commerce",
    
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  // Toggle function for a specific card
  const toggleText = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle only the clicked card
    }));
  };

  return (
    <section id="projects" className="bg-gray-200 w-full py-05 border-b-[1px]">
    {/* Title Section */}
    <div className="text-center mb-06">
      <Title  des="My Projects" />
    </div>
{/* 
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 mx-auto max-w-7xl">
        {projectData.map((project) => (
          <ProjectsCard
            key={project.id}
            id={project.id}
            title={project.title}
            des={project.des}
            src={project.src}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            isExpanded={expanded[project.id] || false} // Pass expanded state
            toggleText={toggleText} // Pass toggle function
          />
        ))}
      </div> 

      {/* Bottom Divider Line */}
      <div className="flex justify-center items-center bg-gray-200 my-10">
        <div className="w-full max-w-7xl h-[2px] bg-gray-500"></div>
      </div>
    </section>
  );
};

export default Projects;


