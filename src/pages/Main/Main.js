import React, {useEffect, useRef, useState} from "react";
import "./Main.scss";
import TopSales from "../../components/TopSales";
import Ethos from "../../components/Ethos";
import JoinUs from "../../components/JoinUs";
import {Link} from "react-router-dom";
import {motion, useScroll} from "framer-motion";
import useScrollToTop from "../../hooks/useScrollToTop";

export default function Main() {
  const [borderWidth, setBorderWidth] = useState(20);
  const [borderRadius, setBorderRadius] = useState(40);
  
  const container = useRef(null);
  
  const initialBorderWidth = 20;
  
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start", "end"],
  });
  
  const speedFactor = 2;
  
  useScrollToTop();
  
  useEffect(() => {
    const animate = () => {
      const borderWidthProgress = speedFactor * scrollYProgress.current;
      const newBorderWidth = initialBorderWidth - Math.round(borderWidthProgress * initialBorderWidth);
      
      const clampedBorderWidth = Math.max(newBorderWidth, 0);
      
      setBorderWidth(clampedBorderWidth);
      setBorderRadius(2 * clampedBorderWidth);
      
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }, [scrollYProgress]);
  
  
  return (
    <div>
      <div>
        <div ref={container} className="h-[200vh] relative">
          <motion.div
            animate={{borderWidth, borderRadius}}
            className="stickyMask"
          >
            <p className="center Playfair">
              Control hair texture for superior cuts, coloring, extensions, and
              styling. From bouncy curls to silky straight hair.
            </p>
            <p className="logo text-white bottom-4 text-center text-6xl font-extrabold max-md:top-16 max-md:text-6xl">
              QiQi
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="bg-[#000] flex w-full flex-col justify-center items-center max-md:w-full">
        <div className="w-full relative">
          <div className="gap-5 flex mx-20 my-32 max-md:mx-8 max-md:flex-col max-md:max-md:gap-0">
            <div className="flex flex-col w-[47%] max-md:w-full max-md:ml-0">
              <h2 className="justify-center text-slate-50 text-5xl font-bold max-md:w-full max-md:text-4xl">
                Sailing Through<br/>Time and Space
              </h2>
            </div>
            
            <div className="flex flex-col w-[53%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:w-full max-md:mt-10">
                <p className="justify-center text-slate-50 text-opacity-80 text-xl max-md:w-full">
                  At QiQi our mission is simple but profound: redefine hair care
                  with a blend of advanced formulations and aesthetics borrowed
                  from the future. Our innovative approach weaves science, space,
                  and a dash of cosmic glow to launch you to stratospheric heights
                  of beauty, confidence, individuality, and self-expression.
                </p>
                <Link
                  to="/about"
                  className="justify-center text-slate-50 text-opacity-80 text-center text-sm font-extralight whitespace-nowrap mr-10 mt-3 self-end max-md:mr-2.5"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopSales/>
      <div className="text-center pb-20 px-16 max-md:pb-16 max-md:px-8">
        <Link
          to="/shop"
          className="hover-underline-animation text-center text-sm"
        >
          View All Products
        </Link>
      </div>
      <Ethos/>
      <JoinUs/>
    </div>
  );
}
