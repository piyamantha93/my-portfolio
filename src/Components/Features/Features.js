import React from "react";
import Title from "../layouts/Titel";
import Card from "./Card";
import { featuresData } from "../../Data/Data";

const Features = () => {
  return (
    <section
      id="features"
      className="bg-gray-200 w-full py-20"
    >
      <Title des="What I Do" />
      {/* <h1 className="text-4xl lg:text-6xl font-bold">
             <span className="text-gray-600">What I Do</span>
          </h1> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20" style={{margin:40}}>
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      
      <div className="flex justify-center items-center bg-gray-200 m-10 p-0">
  {/* Horizontal Line */}
  <div className="w-full max-w-7xl h-[2px] bg-gray-500"></div>
</div>
    </section>
  );
};

export default Features;
