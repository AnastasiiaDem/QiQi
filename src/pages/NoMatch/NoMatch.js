import React from 'react'
import {Link} from "react-router-dom";

export default function NoMatch() {
  
  const handleScrollTop = () => {
    window.scroll(0, 0);
  };
  
  return (
    <div className="overflow-hidden max-h-[100vh] error-container Oxanium text-white">
      <p className="oops text-white">
        Oops! It seems like you've taken a wrong turn.
        <br/>
        The page you're looking for might have been moved, deleted, or never existed in the first place. Don't worry, it
        happens to the best of us.
      </p>
      
      <p className="-z-10 center flex flex-col items-center text-[15vw] text-white font-black">404</p>
      
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
