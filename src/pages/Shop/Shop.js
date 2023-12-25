import React, { useState, useEffect } from 'react';
import Product from '../../components/Product';
import productData from '../../data/Products.json';

export default function Shop() {
  const [filterParam, setFilterParam] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productData);
  
  useEffect(() => {
    if (filterParam) {
      const filtered = productData.filter((product) =>
        product.type.toLowerCase().includes(filterParam.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productData);
    }
  }, [filterParam]);
  
  const handleFilter = (param) => {
    if (filterParam === param) {
      setFilterParam('');
    } else {
      setFilterParam(param);
    }
  };
  
  return (
    <div className="mt-[5rem] py-20 mb-20">
      <div className="flex items-center gap-4 mx-16 max-md:mx-8">
        <p className="font-light">Filter: </p>
        <div className="flex gap-4 max-md:text-xs">
          <button
            className={filterParam === 'pro' ? 'active-filter-item' : 'filter-item'}
            onClick={() => handleFilter('pro')}
          >
            PRO CTRL CARE
          </button>
          <button
            className={filterParam === 'self' ? 'active-filter-item' : 'filter-item'}
            onClick={() => handleFilter('self')}
          >
            SELF CARE
          </button>
        </div>
      </div>
      <div
        className="grid grid-cols-4 pt-8 justify-center items-end max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
      >
        {filteredProducts.map((product, index) => (
          <Product
            key={index}
            imageSrc={product.imageSrc}
            gifSrc={product.gifSrc}
            altText={product.altText}
            name={product.name}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}
