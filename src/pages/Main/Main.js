import React, {useEffect} from "react";
import './Main.scss';
import TopSales from "../../components/TopSales";
import Ethos from "../../components/Ethos";
import JoinUs from "../../components/JoinUs";
import {Link} from 'react-router-dom';
import Lenis from "@studio-freight/lenis";

export default function Main() {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    lenis.scrollTo('#top');
  }, []);
  
  
  return (
    <div>
      <div>
        <div className="main_background relative h-[100vh] w-full object-cover object-center">
          <p className="center Playfair">
            Control hair texture for superior cuts, coloring, extensions and styling. From bouncy curls to silky
            straight
            hair.
          </p>
          <p className="logo text-white bottom-4 text-center text-6xl font-extrabold max-md:top-16 max-md:text-6xl">
            QiQi
          </p>
        </div>
      </div>
      
      <div className="bg-[#000] flex w-full flex-col justify-center items-center max-md:w-full">
        <div className="w-full relative">
          <div className="gap-5 flex mx-20 my-32 max-md:mx-8 max-md:flex-col max-md:max-md:gap-0">
            <div className="flex flex-col w-[47%] max-md:w-full max-md:ml-0">
              <h2
                className="justify-center text-slate-50 text-5xl font-bold max-md:w-full max-md:text-4xl">Sailing
                Through<br/>Time and Space</h2>
            </div>
            
            <div className="flex flex-col w-[53%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:w-full max-md:mt-10">
                <p className="justify-center text-slate-50 text-opacity-80 text-xl max-md:w-full">
                  At QiQi our mission is simple but profound: redefine hair care with a blend of advanced formulations
                  and aesthetics borrowed from the future. Our innovative approach weaves science, space, and a dash of
                  cosmic glow to launch you to stratospheric heights of beauty, confidence, individuality, and
                  self-expression.
                </p>
                <Link to="/about"
                      className="justify-center text-slate-50 text-opacity-80 text-center text-sm font-extralight whitespace-nowrap mr-10 mt-3 self-end max-md:mr-2.5">Learn
                  more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopSales/>
      <div className="text-center pb-20 px-16 max-md:pb-16 max-md:px-8">
        <Link to="/shop"
              className="hover-underline-animation text-center text-sm">
          View All Products
        </Link>
      </div>
      <Ethos/>
      <JoinUs/>
    </div>
  )
}
