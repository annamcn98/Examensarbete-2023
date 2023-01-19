import React, {useState, useEffect} from 'react'
import Productitem from '../components/Productitem';
 import styled from 'styled-components'
 import '../App.css';
 import { Link } from 'react-router-dom'

// import { motion } from "framer-motion"
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

function Products() {

  const [products, setProducts] = useState([]);
  // const wooProducts = await fetchWooCommerceProducts().catch((error)=> console.error(error));
  
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
    <ProduktDiv>
        <div>

          <h1>
            Alla produkter
          </h1>
          <h3 className='underrubrik'>
            En vas med torkade<br></br>
            blommor är alla rums<br></br>
            perfekta centerpiece.<br></br><br></br>
            Hitta din personliga <br></br>
            kombo hos oss!   
          </h3> 

          <Link to="/products/vases">
          <button className='filterbtn'>
            Shoppa vaser
          </button>  
          </Link>
          <Link to="/products/flowers">

          <button className='filterbtn'>
            Shoppa blommor
          </button>  
          </Link>

        </div>
        {
          products.map((product) => 
               (
                <Productitem product={product} key={product.id}/> 
              )
          )
        }

    </ProduktDiv>
    </div>

  )

}



export default Products;


const ProduktDiv = styled.div`
display: grid;
    grid-template-columns: repeat(4, minmax(100px, 300px));
    justify-content: center;
    background-color: white;
    gap: 1em 1em;
    padding: 3em 0em;

`
