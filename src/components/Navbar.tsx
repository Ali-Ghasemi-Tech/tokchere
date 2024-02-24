import React, { useState } from "react";
import { ReactComponent as Menu } from "../assets/svgs/menu.svg";
import { ReactComponent as Close } from "../assets/svgs/right-arrow.svg";
function Navbar() {
  let [menuActice , setMenuActive] = useState(false);
  function menuToggle() {
    setMenuActive(!menuActice);
  }
  return(
    <nav className="flex flex-row w-full justify-between p-[2vw] h- sm:p-[1vw] font-lalezar  border-b border-black border-opacity-20 ">
      <div className="flex justify-center items-center text-main">
        <a className="hover:text-orange-600 text-title" href="">توک چره</a>
      </div>
      <div className="flex text-link flex-row w-[50%] lg:w-[30%] 2xl:w-[20%] justify-evenly items-center text-main gap-[2vw] text-nowrap">
        <a className="hover:text-orange-600" href="">فروشگاه</a> 
        <a className="hover:text-orange-600" href="">درباره ما</a>
        <a className="hover:text-orange-600" href="">بلاگ</a>
        <div onClick={menuToggle} className="w-[6vw] sm:w-[5vw]  lg:w-[3vw] h-auto flex justify-center items-center"><Menu className="hover:cursor-pointer" fill="#FA9457"/></div>
        
      </div>

      <div className={`pr-[1vw] transition-all ease-in-out duration-300 fixed top-0 right-0 bottom-0 flex flex-col pl-[12vw] pt-[10vw] border-l bg-white border-black border-opacity-30 text-default z-20 sm:pl-[5vw] sm:pt-[3vw] ${menuActice? 'translate-x-0': 'translate-x-full' } `}>
        <div onClick={menuToggle} className=" absolute top-0 right-0 w-[7vw] sm:w-[2vw] h-auto mt-[2vw] mr-[1vw] sm:mt-[1vw]"><Close className="hover:cursor-pointer" /></div>
        <ul className="flex flex-col text-gray-600">
          <li className=" border-b border-black  p-[2vw] flex justify-end border-opacity-50 sm:p-[1vw]"><a href="">ورود/ثبت نام</a></li>
          <li className=" border-b border-black p-[2vw] justify-end flex border-opacity-50 sm:p-[1vw]"><a href="">ثبت نظر</a> </li>
          <li className="flex justify-end p-[2vw] sm:p-[1vw]"><a href="">سبد خرید</a> </li>
        </ul>
      </div>
      <div onClick={menuToggle} className={`${menuActice ? 'translate-x-0' : "translate-x-full"} transition-all ease-in-out duration-100 fixed inset-0 bg-black bg-opacity-20 z-10`}></div>
    </nav>
  )
}
export default Navbar;