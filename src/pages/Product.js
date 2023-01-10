import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
// import styled from 'styled-components'
// import Nav from '../components/Nav';


function Product() {
  const params = useParams();
  console.log(params)
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
  try {
    const response = await fetch('https://codexplained.se/electronics.php?id=' + params.id);
    const data = await response.json();
    console.log(data)
    
    setProduct(data);
  } catch (error) {
    console.log (error)
  }

}
  useEffect(() => {
    fetchProduct();
  },)

  return (

    <div>
      <div>
            <div>
              <img src={product.url}></img>
            </div>
            <article>
              <h2>{product.name}</h2>
              <p>p: {product.description}</p>
              <h3>Storage: {product.storage} left in stock</h3>
              <h2>{product.price} SEK</h2>
            </article>
      </div>

    </div>

  )
}
export default Product;