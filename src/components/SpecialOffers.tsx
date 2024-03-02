import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import SpecialOfferCard from "./SpecialOfferCard";
interface Appprops {
  imageUrl: string;
  price: number;
  off: number;
  style: string;
}

interface ProductListProps {
  productList: { name: string; imageUrl: string; price: number; off: number }[];
}

const SpecialOffers: React.FC<ProductListProps> = ({ productList }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <div className="h-auto sm:my-[5vw] my-[8vw] bg-main rounded-sm">
      <Carousel
        rtl={true}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        removeArrowOnDeviceType={"mobile"}
      >
        <div className="flex w-[90%] m-auto justify-center items-center h-full">
          <span className="w-full  text-lalezar text-slider text-shadow-default shadow-slate-500 text-white font-bold text-center">
            پیشنهاد‌های ویژه
          </span>
        </div>
        {productList.map((product, index) => {
          return (
            <SpecialOfferCard
              image={product.imageUrl}
              price={product.price}
              off={product.off}
              style={
                index === 0
                  ? "rounded-r-lg"
                  : index === productList.length - 1
                  ? "rounded-l-lg"
                  : ""
              }
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default SpecialOffers;
