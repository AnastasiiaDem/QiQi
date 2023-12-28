import React, {useEffect, useState} from 'react'
import Pouch_Wavy_Curly_01 from "../assets/Pouch_Wavy_Curly_01.png";
import Smooth_Service_Shampoo_XXL_01 from "../assets/Smooth_Service_Shampoo_XXL_01.png";
import HydrationfixationconditionerNEW_Square1920 from "../assets/HydrationfixationconditionerNEW_Square1920.png";
import {Link} from "react-router-dom";
import productData from '../data/Products.json';
import {useBasket} from "../hooks/CartContext";
import 'aos/dist/aos.css';
import AOS from 'aos';

const TopProduct = ({title, description, imageSrc, price}) => {
  const [productId, setProductId] = useState({});
  const {addItem} = useBasket();
  
  const handleScrollTop = () => {
    window.scroll(0, 0);
  };
  
  const handleAddProduct = (e) => {
    e.preventDefault();
    addItem({id: productId, quantity: 1});
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
                  className="justify-center w-full text-slate-50 bg-neutral-500 text-center text-sm px-3.5 py-4 rounded-lg hover:bg-[#030303]">
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
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="overflow-hidden relative">
      {/*<Parallax imageSrc={shape1} speed={0.05} height={200} className="sphere h-[200px] w-[200px] absolute top-[10px] right-[10%]"/>*/}
      {/*<Parallax imageSrc={shape2} speed={0.05} height={80} className="sphere h-[80px] w-[80px] absolute top-[300px] left-[1%]"/>*/}
      {/*<Parallax imageSrc={shape3} speed={0.03} height={100} className="sphere h-[100px] w-[100px] absolute top-[80px] left-[30%]" alt=''/>*/}
      {/*<Parallax imageSrc={shape4} speed={0.2} height={40} className="sphere blur-[1px] h-[40px] w-[40px] absolute top-[430px] left-[45%]"/>*/}
      {/*<Parallax imageSrc={shape6} height={100} className="sphere h-[100px] w-[100px] absolute top-[550px] right-[1%]"/>*/}
      {/*<Parallax imageSrc={ball} height={50} className="sphere z-10 h-[50px] w-[50px] absolute top-[450px] left-[20%]" alt=''/>*/}
      
      {/*<img src={shape5} className="sphere h-[80px] w-[80px] absolute top-[200px] right-[8%]" alt=''/>*/}
      {/*<img src={shape7} className="sphere blur-[2px] h-[30px] w-[30px] absolute top-[75px] left-[60%]" alt=''/>*/}
      {/*<img src={shape8} className="sphere h-[50px] w-[50px] absolute top-[100px] right-[1%]" alt=''/>*/}
      
      {/*<div*/}
      {/*  className='sphereAOS'*/}
      {/*  style={{*/}
      {/*    backgroundImage: `url(${shape1})`,*/}
      {/*    backgroundSize: 'cover',*/}
      {/*    backgroundPosition: 'top',*/}
      {/*    transition: 'transform 0.5s ease-out',*/}
      {/*    height: '200px',*/}
      {/*    width: '200px',*/}
      {/*    top: '10px',*/}
      {/*    right: '10%'*/}
      {/*  }}*/}
      {/*  data-aos="fade-up"*/}
      {/*  data-aos-offset="50"*/}
      {/*  data-aos-duration="1000"*/}
      {/*/>*/}
      
      {/*<div*/}
      {/*  className='sphereAOS'*/}
      {/*  style={{*/}
      {/*    backgroundImage: `url(${shape2})`,*/}
      {/*    backgroundSize: 'cover',*/}
      {/*    backgroundPosition: 'top',*/}
      {/*    transition: 'transform 0.5s ease-out',*/}
      {/*    height: '80px',*/}
      {/*    width: '80px',*/}
      {/*    top: '300px',*/}
      {/*    left: '1%'*/}
      {/*  }}*/}
      {/*  data-aos="fade-up"*/}
      {/*  data-aos-offset="50"*/}
      {/*  data-aos-duration="1000"*/}
      {/*/>*/}
      
      {/*<div*/}
      {/*  className='sphereAOS'*/}
      {/*  style={{*/}
      {/*    backgroundImage: `url(${shape3})`,*/}
      {/*    backgroundSize: 'cover',*/}
      {/*    backgroundPosition: 'top',*/}
      {/*    transition: 'transform 0.5s ease-out',*/}
      {/*    height: '100px',*/}
      {/*    width: '100px',*/}
      {/*    top: '80px',*/}
      {/*    left: '30%'*/}
      {/*  }}*/}
      {/*  data-aos="fade-up"*/}
      {/*  data-aos-offset="50"*/}
      {/*  data-aos-duration="1000"*/}
      {/*/>*/}
      
      {/*<div*/}
      {/*  className='sphereAOS'*/}
      {/*  style={{*/}
      {/*    backgroundImage: `url(${shape4})`,*/}
      {/*    backgroundSize: 'cover',*/}
      {/*    backgroundPosition: 'top',*/}
      {/*    transition: 'transform 0.5s ease-out',*/}
      {/*    height: '40px',*/}
      {/*    width: '40px',*/}
      {/*    top: '430px',*/}
      {/*    left: '45%'*/}
      {/*  }}*/}
      {/*  data-aos="fade-up"*/}
      {/*  data-aos-offset="50"*/}
      {/*  data-aos-duration="1000"*/}
      {/*/>*/}
      
      {/*<div*/}
      {/*  className='sphereAOS'*/}
      {/*  style={{*/}
      {/*    backgroundImage: `url(${shape6})`,*/}
      {/*    backgroundSize: 'cover',*/}
      {/*    backgroundPosition: 'top',*/}
      {/*    transition: 'transform 0.5s ease-out',*/}
      {/*    height: '100px',*/}
      {/*    width: '100px',*/}
      {/*    top: '550px',*/}
      {/*    right: '1%'*/}
      {/*  }}*/}
      {/*  data-aos="fade-up"*/}
      {/*  data-aos-offset="50"*/}
      {/*  data-aos-duration="1000"*/}
      {/*/>*/}
      
      {/*<div*/}
      {/*  className='sphereAOS'*/}
      {/*  style={{*/}
      {/*    backgroundImage: `url(${ball})`,*/}
      {/*    backgroundSize: 'cover',*/}
      {/*    backgroundPosition: 'top',*/}
      {/*    transition: 'transform 0.5s ease-out',*/}
      {/*    height: '40px',*/}
      {/*    width: '40px',*/}
      {/*    top: '450px',*/}
      {/*    left: '20%'*/}
      {/*  }}*/}
      {/*  data-aos="fade-up"*/}
      {/*  data-aos-offset="50"*/}
      {/*  data-aos-duration="1000"*/}
      {/*/>*/}
      
      
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
    </div>
  )
}
