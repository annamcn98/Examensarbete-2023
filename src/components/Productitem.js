import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function ProductItem({product}) {
    return (
  
      <ProduktItemDiv>
      <article>
          <Link to={`/product/${product.id}`}>
            <h1>{product.name}</h1>
          </Link>
              <Link to={`/product/${product.id}`}>

                  <img src={product.images[0] ? product.images[0].src :null} alt="product-img"></img>

              </Link>
            <h3>{product.price} SEK</h3>
      </article>
      </ProduktItemDiv>
    
        )
  }
  
  export default ProductItem

  const ProduktItemDiv = styled.div`
/* justify-items: center;
text-align: center;*/
border:1px solid black; 
width: 20%;
  `