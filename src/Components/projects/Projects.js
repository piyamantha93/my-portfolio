
import React, { useState } from "react";
import Title from "../layouts/Titel";
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";


const projectData = [
  {
    id: 1,
    title: "Stress Detection Web Project",
    des: "The Stress Detection Web Project is a full-stack application that combines machine learning with web development to predict user stress levels based on health and lifestyle data. The frontend is built with React.js, utilizing Material-UI and custom CSS for a seamless user experience, while the backend is powered by Node.js, Express.js, and MongoDB for secure data management. The project integrates a machine learning model trained on the Sleep Health and Lifestyle Dataset to analyze key factors such as sleep duration, BMI category, heart rate, daily steps, and blood pressure to generate stress predictions. Users can access a dashboard where they input relevant health parameters to receive real-time stress analysis. The system ensures secure authentication with JWT tokens, encrypted passwords, and MongoDB storage.",
    src: projectOne,
    githubLink: "https://github.com/piyamantha93/Stress_Detection",
    websiteLink: "https://stress-detection.com",
  },
  {
    id: 2,
    title: "ABC Lab System",
    des: "The ABC Lab System is a comprehensive laboratory management solution designed to streamline and automate various operational tasks. Built using Spring Boot as the backend framework, the system ensures scalability, reliability, and robust performance. The front-end interface is developed with Bootstrap, offering a clean, responsive, and user-friendly design for seamless interaction. At its core, the system leverages MySQL for database management, ensuring secure and efficient handling of data. Key features of the system include user registration and authentication, test management, appointment scheduling, result tracking, and billing.",
    src: projectTwo,
    githubLink: "https://github.com/piyamantha93/AbcLabSystem",
    websiteLink: "https://stress-detection.com",
  },
  {
    id: 3,
    title: "My Portfolio",
    des: "This React-based portfolio website is designed to showcase my skills, projects, and experience as a full-stack developer. Built with React.js and Tailwind CSS, the site provides a modern, responsive, and visually appealing interface. It includes key sections like Home, About, Projects, Resume, and Contact, allowing visitors to explore my expertise in technologies such as React.js, Node.js, MongoDB, MySQL, and machine learning. The website also features interactive elements, animations, and smooth navigation to enhance the user experience. Additionally, it includes GitHub and LinkedIn integrations, making it easy to connect with me and explore my work.",
    src: projectThree,
    githubLink: "https://github.com/piyamantha93/my-portfolio",
    websiteLink: "https://stress-detection.com",
  },

  {
    id: 4,
    title: "Ecommerce Website",
    des: "A fully responsive front-end e-commerce web application built using React.js and Tailwind CSS. This modern shopping platform features a clean and intuitive user interface, allowing users to explore products across multiple categories such as Men, Women, Kids, Accessories, and more. .",
    src: projectFour,
    githubLink: "https://github.com/piyamantha93/E-commerce",
    websiteLink: "https://stress-detection.com"
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


