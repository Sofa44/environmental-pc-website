import React from 'react';

function ProductItem({ image, name, price, description }) {
  return (
    <div>
      <div className="productItem" >
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <h4> ${price} </h4>
        <p> {description} </p>
      </div>
      <div className="space" />
    </div>
  );
}

export default ProductItem;
