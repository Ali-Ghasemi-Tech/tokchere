
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';

function SpecialOffers(){
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  return(
    <div className='h-auto my-[5vw] bg-main'>
      <Carousel rtl={true} responsive={responsive} swipeable ={true} draggable ={true} removeArrowOnDeviceType={"mobile"}>
        <div className='flex w-[90%] m-auto justify-center items-center h-full'>
          <span className='w-full  text-lalezar text-slider text-shadow-default shadow-slate-500 text-white font-bold text-center'>پیشنهاد‌های ویژه</span>
        </div>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </Carousel>
    </div>
  );
}

export default SpecialOffers;