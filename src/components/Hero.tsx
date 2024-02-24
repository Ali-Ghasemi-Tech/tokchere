import React from "react";
import hero from "../assets/images/hero.jpg"
function Hero(){
  return(
    <div className="relative">
      <img className="w-full opacity-90" src={hero} alt="" />
      <span className="font-lalezar h-full flex items-center justify-center text-white absolute top-0 left-0 right-0 text-hero">طعم سالم زندگی</span>
    </div>
  );
}

export default Hero;