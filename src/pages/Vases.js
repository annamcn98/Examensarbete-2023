import React, {useState, useEffect} from 'react'
import Productitem from '../components/Productitem';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


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

function Vases() {
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
    <div className='parentdiv'>
        <NewsDiv>
        <div>
          <h1 className=''>
            Shoppa vaser
          </h1>
          <h3 className='underrubrik'>
            Hos oss hittar du den <br></br>
            perfekta vasen till<br></br>
            hemmets alla rum   
          </h3> 
          <Link to="/products">
          <button className='filterbtn'>
            Tillbaka till alla produkter
          </button> 
          </Link>  
        </div>
            {
              products.map((product) => 
                  (
                    product.categories[0] ? 
                      product.categories[0].name==="Vaser" ?

                      <Productitem product={product}
                        key={product.id} 
                      />
                    :null:null
                  )
              )
            }
        </NewsDiv>
    </div>
  )
}
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

export default Vases