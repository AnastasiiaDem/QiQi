import React from 'react';
import {Link} from 'react-router-dom';
import {useBasket, useBasketProducts} from "../hooks/CartContext";
import productData from '../data/Products.json';
import Cart from "../pages/Cart/Cart";

export default function Header() {
  const {toggleCart} = useBasket();
  
  const {totalQuantity} = useBasketProducts(productData);
  
  const handleScrollTop = () => {
    window.scroll(0, 0);
  };
  
  const handleToggleCart = (e) => {
    e.preventDefault();
    toggleCart();
  };
  
  return (
    <>
      <Link
        to="/"
        onClick={handleScrollTop}
        className="logo text-[#e2d2c5] top-8 text-center text-8xl font-bold max-md:top-16 max-md:text-6xl"
      >
        QiQi
      </Link>
      
      <header
        className="fixed z-10 top-0 mix-blend-difference overflow-hidden flex w-full items-center gap-5 p-8 justify-between text-slate-50 max-md:w-full max-md:flex-wrap max-md:px-5">
        <nav className="relative flex justify-between gap-5 max-md:justify-center">
          <Link to="/shop" onClick={handleScrollTop} className="header-link">
            Shop
          </Link>
          <Link to="/about" onClick={handleScrollTop} className="header-link">
            About
          </Link>
          <Link to="/contacts" onClick={handleScrollTop} className="header-link">
            Contacts
          </Link>
        </nav>
        <button onClick={handleToggleCart} className="relative header-link">
          Cart ({totalQuantity})
        </button>
      </header>
      
      <Cart/>
    </>
  );
}
