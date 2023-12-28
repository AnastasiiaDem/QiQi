import React from "react";
import TopSales from "../../components/TopSales";
import Ethos from "../../components/Ethos";
import JoinUs from "../../components/JoinUs";
import {Link} from "react-router-dom";

export default function Main() {
  // const [xArr, setXArr] = useState([...Array(1)]);
  
  const handleScrollTop = () => {
    window.scroll(0, 0);
  };
  
  // useEffect(() => {
  //   const arrSize = Math.floor(((window.innerWidth - 12) / 2) / 22.26);
  //   setXArr([...Array(arrSize)]);
  // }, []);
  
  
  return (
    <>
      <div className="main_background relative h-[100vh] w-full object-cover object-center">
        <div className="slogan gap-12 max-md:gap-4">
          <p className="text-right">Beyond Limits, Beyond Glow</p>
          <p className="text-left">Infinite Shine, Infinite Care</p>
        </div>
      </div>
      
      <div
        className="bg-[#030303] flex w-full flex-col justify-center items-center max-md:w-full">
        <div className="w-full decorative-container relative">
          {/*<div className="x-container x-container-top">*/}
          {/*  {xArr.map((_, i) => (*/}
          {/*    <span key={i} className="decorative-x" style={{left: 20 * i}}>&#x2715;</span>*/}
          {/*  ))}*/}
          {/*  {xArr.map((_, i) => (*/}
          {/*    <span key={i} className="decorative-x" style={{left: 20 * i}}>&#x2715;</span>*/}
          {/*  ))}*/}
          {/*</div>*/}
          {/*<div className="x-container">*/}
          {/*  {xArr.map((_, i) => (*/}
          {/*    <span key={i} className="decorative-x" style={{left: 20 * i}}>&#x2715;</span>*/}
          {/*  ))}*/}
          {/*  {xArr.map((_, i) => (*/}
          {/*    <span key={i} className="decorative-x" style={{left: 20 * i}}>&#x2715;</span>*/}
          {/*  ))}*/}
          {/*</div>*/}
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
                      onClick={handleScrollTop}
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
              onClick={handleScrollTop}
              className="hover-underline-animation text-center text-sm">
          View All Products
        </Link>
      </div>
      <Ethos/>
      <JoinUs/>
    </>
  )
}
