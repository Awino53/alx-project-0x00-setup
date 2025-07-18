import Image from "next/image";
import React from "react";
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg ">
      <Image
        className="rounded-lg"
        src="/assets/images/house.png"
        width={378.56}
        height={299.37}
        alt="house image"
      />
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-[22px]">Villa Arrecife Beach House</h3>
          <p className="font-medium text-[17px] text-[#929292]">
            Sideman, Bali, Indonesia
          </p>
        </div>
        <div className="flex items-center">
          <Image src="/assets/images/star.png" alt="star" width={16} height={16} />
          <p className="font-medium text-[17px] ml-2">4.76</p>
        </div>
      </div>

      {/* ...Rest of your component remains unchanged... */}
    </div>
  );
};

export default Card;
