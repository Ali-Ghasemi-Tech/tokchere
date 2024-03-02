import Carousel from "react-multi-carousel";
import MostSoldCard from "./MostSoldCard";

interface ProductListProps {
  productList: { name: string; imageUrl: string; price: number }[];
}

const MostSold: React.FC<ProductListProps> = ({ productList }) => {
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
    <div className="h-auto mb-[5vw] bg-main rounded-sm">
      <Carousel
        swipeable={true}
        rtl={false}
        draggable={true}
        removeArrowOnDeviceType={"mobile"}
        responsive={responsive}
      >
        <div className="flex w-[90%] m-auto justify-center items-center h-full">
          <span className="w-full  text-lalezar text-slider text-shadow-default shadow-slate-500 text-white font-bold text-center">
            پرفروش‌ها
          </span>
        </div>
        {productList.map((product, index) => {
          return (
            <MostSoldCard
              name={product.name}
              image={product.imageUrl}
              price={product.price}
              style={
                index === 0
                  ? "rounded-l-lg"
                  : index === productList.length - 1
                  ? "rounded-r-lg"
                  : ""
              }
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default MostSold;
