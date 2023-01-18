import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function ProductItem({product}) {
    return (
  
      <ProduktItemCon>
      <ProductArticle>
              <Link to={`/product/${product.id}`}>

                  <ProductImg src={product.images[0] ? product.images[0].src :null} alt="product-img"></ProductImg>

              </Link>
          <Link className='Linkfont' to={`/product/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>
            <p>{product.price} kr</p>
            <button>Lägg i varukorg</button>
      </ProductArticle>
      </ProduktItemCon>
    
        )
  }
  
  export default ProductItem

  const ProduktItemCon = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5em 0;
    background-color: #FAEDE4;
    /* justify-content: center; */
    align-items: center;
    /* max-width: 16vw; */
    /* margin: auto; */

    /* margin: 1em 2em; */
`
const ProductArticle = styled.article`
    justify-items: center;
    text-align: center;
    background-color: white;
    padding: 1em 0;
    width: 80%;
    max-height: 50vh;
    /* max-width: 20vw; */
    /* position: relative; */

`
const ProductImg = styled.img`
/* position: absolute; */
max-height: 25vh;
max-width: 10vw;
`