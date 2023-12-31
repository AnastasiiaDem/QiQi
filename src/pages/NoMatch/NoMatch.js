import React from 'react';
import './NoMatch.scss';
import {Link} from 'react-router-dom';
import FlyingBalls from "../../components/FlyingBalls";
import useScrollToTop from "../../hooks/useScrollToTop";


export default function NoMatch() {
  
  useScrollToTop();
  
  return (
    <div className="cursor-pointer max-h-[100vh] Syne">
      <FlyingBalls/>
      <p className="oops">
        Oops! It seems like you've taken a wrong turn.
        <br/>
        The page you're looking for might have been moved, deleted, or never existed.
      </p>
      
      <p className="-z-10 center flex flex-col items-center text-[10rem] Oxanium font-black">404</p>
      
      <Link
        to="/"
        className="back-link"
      >
        <span>&#8689;</span>
        <span>Back to homepage</span>
      </Link>
    </div>
  )
}
