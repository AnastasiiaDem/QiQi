import React from 'react'
import {Link} from "react-router-dom";
import FlyingBalls from "../../components/FlyingBalls";


export default function NoMatch() {
  
  const handleScrollTop = () => {
    window.scroll(0, 0);
  };
  
  return (
    <div className="cursor-pointer max-h-[100vh] error-container Syne">
      <FlyingBalls />
      <p className="oops">
        Oops! It seems like you've taken a wrong turn.
        <br/>
        The page you're looking for might have been moved, deleted, or never existed.
      </p>
      
      <p className="-z-10 center flex flex-col items-center text-[10rem] font-black">404</p>
      
      <Link
        to="/"
        onClick={handleScrollTop}
        className="back-link"
      >
        <span>&#8689;</span>
        <span>Back to homepage</span>
      </Link>
    </div>
  )
}
