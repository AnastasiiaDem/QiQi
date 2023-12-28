import React from "react";
import {Link} from "react-router-dom";

export default function JoinUs() {
  
  const handleScrollTop = () => {
    window.scroll(0, 0);
  };
  
  return (
    <div className="bg-[#030303] flex w-full flex-col justify-center items-center p-16 max-md:w-full max-md:px-5">
      <h1 className="gradient-text text-5xl font-bold max-md:text-4xl">Join Us</h1>
      <p className="text-slate-50 text-center mt-10 max-w-[500px]">
        QiQi Hair Care — Unleashing Cosmic Radiance <br/>
        Jump on board QiQi and embark on a journey of self-love and explore the future of hair care today.
      </p>
      <Link to="/shop" onClick={handleScrollTop}
        className="text-slate-50 text-center text-sm bg-violet-600 mt-6 px-3.5 py-3 rounded-lg hover:bg-violet-400"
      >
        Shop Now
      </Link>
    </div>
  );
}
