import React, {useState, useEffect} from 'react'
import Productitem from '../components/Productitem';
import styled from 'styled-components'
import bukett from '../bukett.jpg'
import vase from '../vase.jpg'
import { Link } from 'react-router-dom'

// import bluevase from '../bluevase.png'
// import component1 from '../component1.png'

import woocommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new woocommerceRestApi({
  url: 'https://anna-nilsson.cme-projects.com/',
  consumerKey: 'ck_7e751480edcce32808fa57574c16630a267d8cce',
  consumerSecret: 'cs_768af23bdd31b6188b9a13ffabf4af6bfbb6f167',
  wpAPIPrefix: "examen/wp-json",
});

export async function fetchWooCommerceProducts() {
  try {
      const response = await api.get("products");
      // console.log(response);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }


function Homepage() {
  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    try {
      const response = await fetchWooCommerceProducts().catch((error)=> console.error(error));
      console.log(response.data);
      const data = response.data;
      
      setProducts(data);
    } catch (error) {
      console.log (error);
    }
  
  }
    useEffect( () => {
      fetchProducts();
    },[])
  return (
    <div>
            <div>
          <H1>
            Nyheter!
          </H1>

      </div>
        <NewsDiv>
            {
              products.map((product) => 
                  (
                    product.categories[0] ? 
                      product.categories[0].name==="Nyheter" ?

                      <Productitem product={product}
                        key={product.id} 
                      />
                    :null:null
                  )
              )
            }
        </NewsDiv>
        <H1>
            Shoppa efter kategori
          </H1>
      <Wrapper>
          <LinkBtn to="/products/vases">
        <LeftDiv>
              <Btn1>
                Shoppa vaser
              </Btn1>
              {/* <h1 className=''>
                All you need is love, some flowers and a good vase..
              </h1> */}
        </LeftDiv>
              </LinkBtn>
          <LinkBtn to="/products/flowers">
        <RightDiv>
              <Btn2>
                Shoppa blommor
              </Btn2>
      {/* <Img src={bluevase} alt="dried flowers"></Img> */}
      {/* <Img src={flowers} alt="dried flowers"></Img> */}

        </RightDiv>
          </LinkBtn>
      </Wrapper>
    </div>
  )
}

export default Homepage

const Wrapper = styled.div`

    display: flex;
    max-height: 480px;
    padding: 5em 0;
    justify-content: center;
    /* align-items: center; */
    background-color: #FAEDE4;

`
const Btn1 = styled.button`
  height: 30px;
  background-color: #EEB5A2;
  border: none;
  margin-bottom: 1em;
`
const Btn2 = styled.button`
  height: 30px;
  background-color: #EEB5A2;
  border: none;
  margin-bottom: 1em;

`
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* max-height: 500px;
  max-width: 300px; */
  min-height: 350px;
  min-width: 250px;
  margin-right: 1em;
  background-color: white;
  justify-content: center;
  align-items: center;
  background-image: url(${vase});
  /* background-position: center; */
  background-size: cover;
`
const LinkBtn = styled(Link) `
  text-decoration: none;

`
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* max-height: 500px;
  max-width: 300px; */
  min-height: 350px;
  min-width: 250px;
  margin-right: 1em;
  background-color: white;
  justify-content: center;
  align-items: center;
  background-image: url(${bukett});
  /* background-position: center; */
  background-size: cover;
`

const Img = styled.img `
  /* min-width: 15vw; */
  max-height: 25vh;
  margin-bottom: 20px;
  padding: 1em;
`
const NewsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 300px));
    justify-content: center;
    background-color: white;

    /* grid-gap: 1rem; */
    /* height: 100%; */
    gap: 1em 1em;
    padding: 3em 0em;
`
const H1 = styled.h1 `
padding-top: 2em;
color: #343434;
`
