import '../index.css'
import kiwi from '../assets/images/kiwi.png'
interface Appprops {
  image : string;
  price: number;
  off: number;
  style: string;

}

const ProductCard : React.FC<Appprops> = ({image , price , off , style })=>{
  console.log(image)
  return (
    <div className={`w-[90%] md:my-[1vw] my-[2vw] flex flex-col m-auto justify-between items-center bg-white border-2 ${style}`}>
      <div className="flex justify-center items-center">
        <img className="p-[1vw] w-[80%] " src={image} alt="" />
      </div>
      <div className="flex flex-row-reverse justify-evenly px-[ 2vw] md:px-0 text-nowrap">
        <div className="flex flex-col items-start text-price font-lalezar">
          <span className="flex flex-row-reverse gap-[0.5vw]"><span>تومان</span> {price * 1-(off/100)} </span>
          <span className=" line-through opacity-70">{price}</span>
        </div>
        <div className="bg-main h-fit rounded-full text-white font-bold text-numbers py-[0.1em] px-[0.5em] md:py-[0.1vw] md:px-[0.5vw]">
          {off}%
        </div>
      </div>
    </div>
  );
}

export default ProductCard;