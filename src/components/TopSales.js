import React, {useEffect, useRef, useState} from 'react'
import Pouch_Wavy_Curly_01 from "../assets/Pouch_Wavy_Curly_01.png";
import Smooth_Service_Shampoo_XXL_01 from "../assets/Smooth_Service_Shampoo_XXL_01.png";
import HydrationfixationconditionerNEW_Square1920 from "../assets/HydrationfixationconditionerNEW_Square1920.png";
import {Link} from "react-router-dom";
import productData from '../data/Products.json';
import {useBasket} from "../hooks/CartContext";
import rect from "../assets/Rectangle.svg";
import rect1 from "../assets/Rectangle1.svg";
import rect2 from "../assets/Rectangle2.svg";
import rect3 from "../assets/Rectangle3.svg";
import rect4 from "../assets/Rectangle4.svg";
import rect5 from "../assets/Rectangle5.svg";
import Parallax from "./Parallax";
import ball from "../assets/583f133fa0b6e672a83f306d1dd47507 44 1.png";
import FlyingBalls from "./FlyingBalls";

const TopProduct = ({title, description, imageSrc, price}) => {
  const [productId, setProductId] = useState({});
  const { addItem } = useBasket();
  
  const handleScrollTop = () => {
    window.scroll(0, 0);
  };
  
  const handleAddProduct = (e) => {
    e.preventDefault();
    addItem({ id: productId, quantity: 1 });
  };
  
  
  useEffect(() => {
    setProductId(productData.find(p => p.name === title)?.id);
  }, [title]);
  
  return (
    <div className="flex max-md:flex-col items-center mt-16 max-md:max-md:gap-0">
      <div className="flex flex-col w-[52%] max-md:w-full max-md:ml-0">
        <h4 className="text-5xl font-bold max-md:w-full max-md:text-3xl">
          {title}
        </h4>
        <div className="w-[83%] max-md:w-full">
          <div className="text-xl mt-7 max-md:w-full">
            {description}
          </div>
          <div className="flex justify-between gap-5 my-6 items-center max-md:w-full max-md:flex-wrap max-md:pr-5">
            <Link to={`/info/${productId}`}
                  onClick={handleScrollTop}
                  className="text-base font-light">
              more info
            </Link>
            <p className="text-base font-extralight Oxanium">
              {price}
            </p>
          </div>
          <button onClick={handleAddProduct}
                  className="justify-center w-full text-slate-50 text-center text-sm bg-neutral-500 px-3.5 py-4 rounded-lg hover:bg-[#000709]">
            Add to cart
          </button>
        </div>
      </div>
      <div
        className="relative flex flex-col overflow-hidden w-[48%] min-h-[600px] max-md:w-full max-md:min-h-[500px] max-md:ml-0">
        <img loading="lazy" src={imageSrc} className="absolute h-full w-full object-cover object-center" alt=''/>
      </div>
    </div>
  )
}

export default function TopSales() {
  
  return (
    <div className="flex relative flex-col py-20 px-16 max-md:px-8">
      <div className="self-center w-full">
        <h1 className="gradient-text text-6xl font-bold max-md:text-5xl"
            aria-label="Top Sales">
          Top Sales
        </h1>
        
        <div className="flex flex-col z-[2] relative">
          <TopProduct
            title="Wavy and Curly Hair Controller"
            description="Achieve hair submission with our revolutionary, long-lasting innovation that exerts control over any texture without causing harm. No safe words required - Hair Controller ensures the safety of color or chemically-treated hair. Exclusively for professional use."
            imageSrc={Pouch_Wavy_Curly_01}
            price="$100"
          />
          <TopProduct
            title="Smooth Service Shampoo XXX-L"
            description="A deeply-moisturizing shampoo that smooths while making hair feel softer and stronger. Get a build-up free clean that smooths and nourishes your hair after just one use. Hair looks healthier, softer, and shinier."
            imageSrc={Smooth_Service_Shampoo_XXL_01}
            price="$90"
          />
          <TopProduct
            title="Hydration Fixation Conditioner"
            description="Our Hydration Fixation Conditioner is designed to quench the thirstiest hair, leaving it looking healthier and shinier."
            imageSrc={HydrationfixationconditionerNEW_Square1920}
            price="$42"
          />
        </div>
      </div>
    </div>
  )
}
