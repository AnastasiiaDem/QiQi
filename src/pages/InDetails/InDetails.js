import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import productData from '../../data/Products.json';
import {useBasket} from "../../hooks/CartContext";
import Lenis from "@studio-freight/lenis";

export default function InDetails() {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const [productImageSrc, setProductImageSrc] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  const {addItem} = useBasket();
  
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    lenis.scrollTo('#top');
    
    
    const selectedProduct = productData.find((p) => p.id === productId);
    setProduct(selectedProduct);
    setProductImageSrc(selectedProduct?.imageSrc || "");
  }, [productId]);
  
  const updateQuantity = (newQuantity) => {
    setQuantity(Math.max(1, newQuantity));
  };
  
  const handleAddProduct = (e) => {
    e.preventDefault();
    addItem({id: productId, quantity: quantity});
  };
  
  return (
    <div className="mt-[10rem] gap-[10rem] py-20 px-16 mb-20 flex flex-col max-md:px-8">
      <div className="w-full gap-5 flex items-center max-md:flex-col max-md:w-full max-md:gap-0">
        <div className="flex flex-col w-[52%] max-md:w-full">
          <h1 className="text-5xl font-bold max-md:w-full max-lg:text-3xl max-md:text-2xl">
            {product.name}
          </h1>
          <p className="text-xl mt-7 max-md:w-full max-lg:text-lg max-md:text-md">{product.undertext}</p>
          <div className="flex justify-between gap-5 mt-7 items-center max-md:w-full max-md:flex-wrap">
            <div className="Oxanium font-extralight">{product.oz} oz</div>
            <div className="Oxanium font-extralight">${product.price}</div>
          </div>
          <div className="flex justify-center gap-5 mt-4">
            <button
              aria-label="Decrease quantity"
              onClick={() => updateQuantity(quantity - 1)}
            >
              -
            </button>
            <div className="Oxanium font-light">{quantity}</div>
            <button
              aria-label="Increase quantity"
              onClick={() => updateQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button onClick={handleAddProduct}
                  className="justify-center w-full mt-8 text-slate-50 text-center text-sm bg-neutral-500 px-3.5 py-4 rounded-lg hover:bg-[#000]">
            Add to cart
          </button>
        </div>
        <div className="w-[48%] max-md:mt-16 max-md:w-full">
          {productImageSrc && (
            <img
              src={require(`../../assets/${productImageSrc}`)}
              alt={product.altText}
            />
          )}
        </div>
      </div>
      <div className="flex w-full justify-between gap-12 max-md:flex-col max-md:mt-10">
        {["BENEFITS", "INGREDIENTS", "DESCRIPTION"].map((section, index) => (
          <div key={index}>
            <h4 className="text-xl font-bold max-md:w-full max-md:text-lg">
              {section}
            </h4>
            <p className="mt-4 max-md:w-full">{product[section.toLowerCase()]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
