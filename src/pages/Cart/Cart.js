import React from 'react';
import {useBasket, useBasketProducts} from '../../hooks/CartContext';
import productData from '../../data/Products.json';
import sadSmile from '../../assets/Sad.svg';
import './Cart.css';

export default function Cart() {
  const {toggleCart, removeItem, updateItem} = useBasket();
  const {items, totalQuantity, totalPrice, isOpen} = useBasketProducts(productData);
  
  const handleToggleCart = (e) => {
    e.preventDefault();
    toggleCart();
  };
  
  const updateQuantity = (item, newQuantity) => {
    const updatedQuantity = Math.max(1, newQuantity);
    updateItem({id: item.product.id, quantity: updatedQuantity});
  };
  
  return (
    <div className={`cart-panel w-[50%] h-screen p-4 max-md:w-full ${isOpen ? 'open' : ''}`}>
      <div className={`w-full h-full ${totalQuantity > 0 ? 'flex flex-col' : ''}`}>
        <button onClick={handleToggleCart}
                className="Oxanium justify-center w-fit text-slate-50 text-center text-sm bg-neutral-500 py-[5px] px-[10px] hover:bg-[#000709]">
          &#x2715; &nbsp; Cart ({totalQuantity})
        </button>
        {totalQuantity > 0 ? (
          <div className="flex flex-col h-full w-full justify-between">
            <div className="product-list">
              {items.map((item) => (
                <div key={item.product.id} className="flex w-full gap-4 mt-8 p-[1px] first:mt-0">
                  <img
                    src={require(`../../assets/${item.product.imageSrc}`)}
                    alt={item.product.altText}
                    className="w-[100px] h-[100px] object-cover object-center"
                  />
                  <div className="w-full">
                    <div className="flex w-full gap-4 items-center justify-between">
                      <p className="Syne">{item.product.name}</p>
                      <p className="Oxanium">${item.totalPrice}</p>
                    </div>
                    <p className="Oxanium text-xs mt-[5px]">{item.product.oz} oz</p>
                    <div className="flex w-full items-center justify-between mt-8">
                      <div className="flex justify-center gap-5">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item, item.quantity - 1)}
                        >
                          -
                        </button>
                        <div className="Oxanium">{item.quantity}</div>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="remove-btn"
                           onClick={() => removeItem({id: item.product.id, quantity: 0})}>
                        <span className="x">&#x2715;</span> <span className="text-xs font-medium">REMOVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full">
              <p className="text-xs py-4">FREE SHIPPING</p>
              <div
                className="flex w-full justify-between items-center pt-4 border-neutral-900 border-t-[1px] border-dashed">
                <p className="text-sm">TOTAL</p>
                <p className="Oxanium">${totalPrice}</p>
              </div>
              <button onClick={() => toggleCart()}
                      className="block justify-center w-full mt-4 text-slate-50 text-center text-sm bg-neutral-500 py-[5px] px-[10px] hover:bg-[#000709]">
                CHECKOUT
              </button>
            </div>
          </div>
        
        ) : (
          <div className="flex flex-col items-center center">
            <p className="Syne font-bold text-2xl">Your cart is empty &nbsp;</p>
            <img src={sadSmile} className="w-[20px]" alt="Sad Smile"/>
          </div>
        )}
      </div>
    </div>
  );
}
