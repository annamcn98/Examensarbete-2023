import React from "react";
import { Link } from "react-router-dom";


function ProductItem({product}) {
    return (
  
      
      <article>
          <Link to={`/product/${product.id}`}>
            <h1>{product.name}</h1>
          </Link>
              <Link to={`/product/${product.id}`}>
              <img src={product.url}></img>
              </Link>
            <h3>{product.price} SEK</h3>
      </article>
    
        )
  }
  
  export default ProductItem