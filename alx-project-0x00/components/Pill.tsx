import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center bg-[#9f2a2a] px-3 w-auto h-[27px] rounded-full">
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Pill;
