import React, {useState, useEffect} from 'react'
import Productitem from '../components/Productitem';
 import styled from 'styled-components'
 import '../App.css';
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
        const response = await api.get("products", { per_page:100 });
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
      // const response = await fetch('https://codexplained.se/electronics.php');
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
    <ParentDiv>
    <ProduktDiv>
      {/* <h2>
        Welcome!
      </h2>
        <h1 className='all-products'>
          All products
            <motion.Emoji
              animate={{y:[0,100,0,100,0,100]}}
              transition={{ duration: 4, delay: 1}} >
              &#128071;&#127997;
              </motion.Emoji>
        </h1> */}      
        {
          products.map((product) => 
               (
                <Productitem product={product} key={product.id}/>
                
              )
          )
        }

    </ProduktDiv>
    </ParentDiv>

  )

}



export default Products;

const ParentDiv = styled.div`
/* height: 100%;
width: 100%;
display: flex;
justify-content:center;
border:1px solid red; */

`

const ProduktDiv = styled.div`
/* height: 100vh;
display: flex;
flex-wrap: wrap;
border:1px solid black; */

/* width: 20%;
padding: 2em 1.5em;
background-color: #f0f4f1;
align-items: center;
border:1px solid black;
*/
display: grid;
    grid-template-columns: repeat(4, minmax(100px, 300px));
    justify-content: center;
    background-color: white;
    /* grid-gap: 1rem; */
    /* height: 100%; */
    gap: 1em 1em;
    padding: 3em 0em;
/* border: 1px solid red;
display:flex;
flex-wrap:wrap;
justify-content: center; */
`
