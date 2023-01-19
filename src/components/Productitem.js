import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function ProductItem({product}) {
    return (
  
      <ProduktItemCon>
      <ProductArticle>
        <div>
              <Link to={`/product/${product.id}`}>

                  <ProductImg src={product.images[0] ? product.images[0].src :null} alt="product-img"></ProductImg>

              </Link>
        </div>
            <InfoDiv>
              <Link className='Linkfont' to={`/product/${product.id}`}>
                <h3>{product.name}</h3>
              </Link>
                <p>{product.price} kr</p>
                  <BuyBtn>Lägg i varukorg</BuyBtn>
            </InfoDiv>

            
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
    justify-content: flex-end;
    align-items: center;
`
const ProductArticle = styled.article`
  display: flex;
  flex-direction: column;
    justify-content: space-between;
    text-align: center;
    background-color: white;
    padding: 1em 0;
    width: 80%;
    height: 100%;
`
const ProductImg = styled.img`
/* position: absolute; */
max-height: 25vh;
max-width: 10vw;
`
const BuyBtn = styled.button`
  background-color: white;
  padding: 0.6em;
  border-radius: 8px;
  font-family: 'Josefin Sans', sans-serif;
  border: 1px solid #343434;
`
const InfoDiv = styled.div`

`