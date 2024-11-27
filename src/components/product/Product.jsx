import React from 'react'
import './product.css'

const Product = ({title , category , newPrice , oldPrice , image, addToCart}) => {



  return (
    <>
    
  
           
    <div class="card">
                <div class="image">
                  <img src={image} alt="" />
                </div>
      
                <h2 class="pro-title">{title}</h2>
                
                <div class="price-sec">
                  <div class="pro-price">
                    <p> ${newPrice}</p>
                    <p>${oldPrice}</p>
                  </div>
                  <div class="pro-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>  
                 </div>

    </>
  )
}

export default Product