
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';
import { specialProducts } from './specialProducts';

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
    <div className='h-auto my-[5vw] bg-main rounded-sm'>
      <Carousel rtl={true} responsive={responsive} swipeable ={true} draggable ={true} removeArrowOnDeviceType={"mobile"}>
        <div className='flex w-[90%] m-auto justify-center items-center h-full'>
          <span className='w-full  text-lalezar text-slider text-shadow-default shadow-slate-500 text-white font-bold text-center'>پیشنهاد‌های ویژه</span>
        </div>
        <ProductCard image={specialProducts[0].imageUrl} price={specialProducts[0].price} off={specialProducts[0].off} style={"rounded-r-lg"}/>
        <ProductCard image={specialProducts[1].imageUrl} price={specialProducts[1].price} off={specialProducts[1].off} style={"rounded-r-lg"}/>
        <ProductCard image={specialProducts[2].imageUrl} price={specialProducts[2].price} off={specialProducts[2].off} style={"rounded-r-lg"}/>
        <ProductCard image={specialProducts[3].imageUrl} price={specialProducts[3].price} off={specialProducts[3].off} style={"rounded-r-lg"}/>
        
    </Carousel>
    </div>
  );
}

export default SpecialOffers;