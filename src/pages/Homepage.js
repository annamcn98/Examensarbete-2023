import React, {useState, useEffect} from 'react'
import Productitem from '../components/Productitem';
import styled from 'styled-components'
import bukett from '../bukett.jpg'
import vase from '../vase.jpg'
import { Link } from 'react-router-dom'

// import bluevase from '../bluevase.png'
// import flowers from '../flowers.jpg'
// import component1 from '../component1.png'
// import { Link } from 'react-router-dom'

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

// fetch(api.url)
// .then((response) => {
//   console.log(response);
//   console.log(response.ok);

//   return response.json();
  
// })
// .then((data) => {
//   console.log(data);
// })


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
      <Wrapper>
        <LeftDiv>
          <Link to="/products/vases">
            <Img src={vase} alt="vase"></Img>
              <Btn1>
                Shoppa vaser
              </Btn1>
          </Link>
              {/* <h1 className='Linkfont'>
                All you need is love, some flowers and a good vase..
              </h1> */}
        </LeftDiv>
        <RightDiv>
          <Link to="/products/vases">
            <Img src={bukett} alt="dried flowers"></Img>
              <Btn2>
                Shoppa blommor
              </Btn2>
          </Link>
      {/* <Img src={bluevase} alt="dried flowers"></Img> */}
      {/* <Img src={flowers} alt="dried flowers"></Img> */}

        </RightDiv>
      </Wrapper>
        <NewsDiv>
          <h1>
            Nyheter!
          </h1>
            <div>
            {
              products.map((product) => 
                  (
                    <Productitem product={product} key={product.id}/>
                  )
              )
            }
            </div>
        </NewsDiv>
    </div>
  )
}

export default Homepage

const Wrapper = styled.div`
    display: flex;
    max-height: 480px;
    margin: 50px 0;
    justify-content: center;
    align-items: center;
`
const Btn1 = styled.button`
  height: 30px;
  margin-right: 0.5em;
  background-color: #EEB5A2;
  border: none;
  margin-bottom: 1em;
`
const Btn2 = styled.button`
height: 30px;
margin-left: 0.5em;
background-color: #EEB5A2;
border: none;
margin-bottom: 1em;

`
const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 500px;
    max-width: 300px;
    margin-right: 1em;
    background-color: white;
    justify-content: center;
    align-items: center;
`
const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 500px;
    max-width: 300px;
    margin-right: 1em;
    background-color: white;
    justify-content: center;
    align-items: center;
`

const Img = styled.img `
  /* min-width: 15vw; */
  max-height: 25vh;
  margin-bottom: 20px;
  padding: 1em;
`
const NewsDiv = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  flex-direction: column;
`