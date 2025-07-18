import React from "react";
import Card from "@/components/Card";
import Button from "@/components/button";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      
      <div className="flex flex-wrap gap-4">
        <Card />
        <Card />
        <Card />

        
      </div>
      <div className="flex gap-4 flex-wrap mt-8">
        <Button title="Small Button" size="sm" rounded="sm" />
        <Button title="Medium Button" size="md" rounded="md" />
        <Button title="Large Button" size="lg" rounded="full" />
      </div>
    </div>

    
  );
};

export default Landing;
