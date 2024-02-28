import kiwi from "../assets/images/kiwi.png"
import '../index.css'

function ProductCard(){
  return (
    <div className=" w-[90%]    md:my-[1vw] my-[2vw] flexflex-col m-auto justify-center items-center bg-white border-2">
      <div className="flex justify-center items-center">
        <img className="p-[1vw]  w-[80%]" src={kiwi} alt="" />
      </div>
      <div className="flex flex-row-reverse justify-evenly px-[ 2vw] md:px-0 text-nowrap">
        <div className="flex flex-col items-start  text-price font-lalezar">
          <span className="flex flex-row-reverse gap-[0.5vw]"><span>تومان</span> 20000 </span>
          <span className=" line-through  opacity-70">30000</span>
        </div>
        <div className="bg-main h-fit rounded-full text-white font-bold text-numbers py-[0.1em] px-[0.5em] md:py-[0.1vw] md:px-[0.5vw]">
          12%
        </div>
      </div>
    </div>
  );
}

export default ProductCard;