import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size = "md", rounded = "md" }) => {
  // Size classes
  const sizeClasses = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  // Rounded classes
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    full: "rounded-full",
  };

  const combinedClass = `bg-blue-600 text-white ${sizeClasses[size]} ${roundedClasses[rounded]} hover:bg-blue-700 transition`;

  return <button className={combinedClass}>{title}</button>;
};

export default Button;
