import React from 'react';
import {Link} from 'react-router-dom';


export default function Product({imageSrc, gifSrc, altText, name, price, id}) {
  
  return (
    <div className="product-container relative items-center flex gap-4 flex-col m-4 max-md:mt-10">
      <div className="img-container min-h-[200px] min-w-[200px]">
      <img
        src={require(`../assets/${imageSrc}`)}
        alt={altText}
      />
      <img
        className="product-gif"
        src={require(`../assets/${gifSrc}`)}
        alt={altText}
      />
      </div>
      <div className="product-info flex w-[80%] h-[50px] justify-between gap-5">
        <p className="Syne">{name}</p>
        <p className="Oxanium">${price}</p>
      </div>
      <Link to={`/info/${id}`}
            className="discover-btn w-full h-[50px] text-[#000] Syne text-center text-sm px-3.5 py-4 hover:text-[#f1f1ee] hover:bg-[#000]">
        Learn more
      </Link>
    </div>
  );
}
