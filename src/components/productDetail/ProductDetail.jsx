// src/components/product/ProductDetail.js

import React from 'react'
import { useParams } from 'react-router-dom'
import './productDetail.css'
import new_collection from '../../assets/new_collections'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';


const ProductDetail = () => {
  const { productId } = useParams();
  const product = new_collection.find(item => item.id === parseInt(productId));
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  console.log(product);

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <>
    <div className="pro-detail-main">
    <div className="product-detail">

      <div className="pro-det-img">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="pro-det-cont">
      <h1>{product.name}</h1>
      <p>New Price: ${product.new_price}</p>
      <p>Old Price: ${product.old_price}</p>
      <p>{product.description}</p>
      <button onClick={() => handleAddToCart(product)}className='btn'>Add to Cart</button> 
      </div>
      {/* <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>New Price: ${product.new_price}</p>
      <p>Old Price: ${product.old_price}</p>
      <p>{product.description}</p>
      <button onClick={() => handleAddToCart(product)}className='btn'>Add to Cart</button> */}

    </div>
    </div>
    </>
  )
}

export default ProductDetail
