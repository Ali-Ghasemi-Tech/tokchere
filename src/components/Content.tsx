import {ReactComponent as Home} from "../assets/svgs/home.svg"
import {ReactComponent as Health} from "../assets/svgs/health.svg"
import {ReactComponent as Money} from "../assets/svgs/money.svg"

const Content = () => {
  return (
    <div className="flex flex-col w-full rtl">
      <h3 className="font-lalezar text-slider w-full text-center sm:text-right pr-[2vw] sm:p-0">چرا توک چره؟</h3>
      <div className="h-fit flex flex-col sm:flex-row justify-evenly items-center sm:items-stretch gap-[3vw] mt-[2vw] sm:gap-[1vw] text-white font-lalezar">
        <div className=" bg-blue-900 w-[70%] sm:w-[30%] flex flex-col sm:p-[2vw] py-[5vw] justify-start items-center rounded-md p-[3vw]">
          <Money fill="white" className="lg:w-[5vw] sm:w-[6vw] w-[15vw]"/>
          <h4 className="text-contentTitle text-nowrap mt-[3vw] sm:mt-[1vw]">به صرفه</h4>
          <span className="text-contentText text-center font-lalezar">چون تمام محصولات ما از باغ های خودمونه</span>
        </div>
        <div className=" bg-blue-900 w-[70%] sm:w-[30%] flex flex-col  sm:p-[2vw] py-[5vw] justify-start items-center rounded-md p-[3vw]">
          <Home fill="white" className="lg:w-[5vw] sm:w-[6vw] w-[15vw]"/>
          <h4 className="text-contentTitle text-nowrap mt-[3vw] sm:mt-[1vw]">خوشمزه</h4>
          <span className="text-contentText text-center font-lalezar">چون بیشترشو خودمون مصرف میکنیم</span>
        </div>
        <div className=" bg-blue-900 w-[70%] sm:w-[30%] flex flex-col sm:p-[2vw] py-[5vw] justify-start items-center rounded-md p-[3vw]">
          <Health fill="white" className="lg:w-[5vw] sm:w-[6vw] w-[15vw]"/>
          <h4 className="text-contentTitle text-nowrap mt-[3vw] sm:mt-[1vw]">سالم</h4>
          <span className="text-contentText text-center font-lalezar">کافیه یه سر به بلاگمون بزنی تا تمام خواص میوه هارو ببینی</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
