import kiwi from "../assets/images/kiwi.png"
import '../index.css'
function ProductCard(){
  return (
    <div className="w-[50%] flexflex-col justify-center items-center bg-white border-2">
      <div>
        <img className="p-[6vw]" src={kiwi} alt="" />
      </div>
      <div className="flex gap-[2vw] justify-center">
        <div className="flex flex-col items-end text-default font-lalezar">
          <span className="flex gap-[1vw]"><span>تومان</span> 20000 </span>
          <span className=" line-through  opacity-70">30000</span>
        </div>
        <div className="bg-main h-fit rounded-full text-white font-bold text-link py-[0.5vw] px-[1.5vw]">
          12%
        </div>
      </div>
    </div>
  );
}

export default ProductCard;