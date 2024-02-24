
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function SpecialOffers(){
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(
    <div className='h-20'>
      <Carousel className='' responsive={responsive} swipeable ={true} draggable ={true} removeArrowOnDeviceType={"mobile"}>
        <div>Item 1</div>
        
    </Carousel>
    </div>
  );
}

export default SpecialOffers;