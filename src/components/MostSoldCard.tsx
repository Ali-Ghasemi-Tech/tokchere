import React from "react";

interface MostSoldProducts {
  name: string;
  price: number;
  image: string;
  style: string;
}

const MostSoldCard: React.FC<MostSoldProducts> = ({
  style,
  image,
  name,
  price,
}) => {
  return (
    <div
      className={`w-[90%] h-fit pb-[1vw] sm:my-[1vw] my-[3vw] flex flex-col m-auto justify-between items-center bg-white border-2 ${style}`}
    >
      <div className="flex justify-center items-center">
        <img
          className="p-[1vw] h-[25vw] xs:h-[20vw] sm:h-[13vw] md:h-[12vw] object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="flex w-full px-[1vw] flex-col  text-nowrap">
        <div className="text-default flex w-full justify-end font-lalezar">
          {name}
        </div>
        <div className="flex w-full text-price font-lalezar">
          <span className="flex flex-row-reverse gap-[0.5vw]">
            <span>تومان</span> {price}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MostSoldCard;
