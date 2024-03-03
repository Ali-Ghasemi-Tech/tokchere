import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SpecialOffers from "./components/SpecialOffers";
import Contact from "./components/Contact";
import { specialProducts } from "./products/specialProducts";
import { mostSoldProduct } from "./products/mostSoldProduct";
import Content  from "./components/Content";
import MostSold from "./components/MostSold";

function App() {
  return (
    <div className="flex flex-col items-center h-fit pb-[10vw]">
      <Navbar />
      <div className="sm:w-[70%] w-full flex flex-col">
        <Hero />
        <section className="flex flex-col ">
          <SpecialOffers productList={specialProducts} />
          <MostSold productList={mostSoldProduct} />
        </section>
        <section className="w-full">
          <Content/>
        </section>
        <section>
          <Contact/>
        </section>

      </div>
      
    </div>
  );
}

export default App;
