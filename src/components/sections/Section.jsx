import React from 'react';
import './section.css';
import Product from '../product/Product';
import new_collection from '../../assets/new_collections';
import { Link } from 'react-router-dom';

const Section = ({ heading }) => {


  return (
    <>
      <div className="heading">
        <h1>{heading}</h1>
      </div>
      <div className="product-container">
        {new_collection.map((item) => (
          <div key={item.id}>
            <Link to={`/product/${item.id}`}>
              <Product
                title={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
                
              />
            </Link>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Section;
