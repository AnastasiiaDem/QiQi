import React from 'react';
import {Link} from 'react-router-dom';
import {useBasket, useBasketProducts} from "../hooks/CartContext";
import productData from '../data/Products.json';
import Cart from "../pages/Cart/Cart";

export default function Header() {
  const {toggleCart} = useBasket();
  
  const {totalQuantity} = useBasketProducts(productData);
  
  const handleToggleCart = (e) => {
    e.preventDefault();
    toggleCart();
  };
  
  return (
    <div id="top">
      <Link
        to="/"
        className="logo top-8 z-0 text-center text-6xl font-extrabold max-md:top-16 max-md:text-6xl"
      >
        QiQi
      </Link>
      
      <header
        className="fixed z-10 top-0 mix-blend-difference overflow-hidden flex w-full items-center gap-5 px-[37px] py-[32px] justify-between text-slate-50 max-md:w-full max-md:flex-wrap max-md:px-5">
        <nav className="relative flex justify-between gap-5 max-md:justify-center">
          <Link to="/shop" className="header-link">
            Shop
          </Link>
          <Link to="/about" className="header-link">
            About
          </Link>
          <Link to="/contacts" className="header-link">
            Contacts
          </Link>
        </nav>
        <button onClick={handleToggleCart} className="relative header-link">
          Cart ({totalQuantity})
        </button>
      </header>
      
      <Cart/>
    </div>
  );
}
