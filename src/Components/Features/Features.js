import React from "react";
import Title from "../layouts/Titel";
import Card from "./Card";
import { featuresData } from "../../Data/Data";
import Line from "../Line/Line";

const Features = () => {
  return (
    <section
      id="features"
      className="bg-gray-200 w-full py-5"
    >
      <div className="flex justify-center items-center text-center">
      <Title des="What I Do" />
      </div>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20" style={{margin:40}}>
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
   
      <Line />
 
    
      
      
    </section>
    
  );
   
};

export default Features;
