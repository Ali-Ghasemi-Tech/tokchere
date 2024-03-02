import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SpecialOffers from "./components/SpecialOffers";
import ProductCard from "./components/ProductCard";
import { specialProducts } from "./products/specialProducts";
import { mostSoldProduct } from "./products/mostSoldProduct";
import MostSold from "./components/MostSold";

function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar />
      <div className="sm:w-[70%] w-full flex flex-col">
        <Hero />
        <div className="flex flex-col ">
          <SpecialOffers productList={specialProducts} />
          <MostSold productList={mostSoldProduct} />
        </div>
      </div>
    </div>
  );
}

export default App;
