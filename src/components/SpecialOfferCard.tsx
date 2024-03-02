import '../index.css'
interface Appprops {
  image : string;
  price: number;
  off: number;
  style: string;

}

const SpecialOfferCard : React.FC<Appprops> = ({image , price , off , style })=>{
  return (
    <div className={`w-[90%] h-fit pb-[1vw] sm:my-[1vw] my-[3vw] flex flex-col m-auto justify-between items-center bg-white border-2 ${style}`}>
      <div className="flex justify-center items-center">
        <img className="p-[1vw] h-[25vw] xs:h-[20vw] sm:h-[13vw] md:h-[12vw] object-cover" src={image} alt="" />
      </div>
      <div className="flex flex-row-reverse gap-[1vw] text-nowrap">
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

export default SpecialOfferCard;