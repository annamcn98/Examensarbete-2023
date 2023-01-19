import { useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import woocommerceRestApi from '@woocommerce/woocommerce-rest-api';
import styled from "styled-components";

const api = new woocommerceRestApi({
    url: 'https://anna-nilsson.cme-projects.com/',
    consumerKey: 'ck_7e751480edcce32808fa57574c16630a267d8cce',
    consumerSecret:'cs_768af23bdd31b6188b9a13ffabf4af6bfbb6f167',
    wpAPIPrefix: "examen/wp-json",
  });
  
  export async function fetchWooCommerceProducts() {
      try {
          const response = await api.get("products");
          return response;
        } catch (error) {
          throw new Error(error);
        }
      }

function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const response = await fetchWooCommerceProducts().catch((error)=>(error));
      const data = response.data;
      setProduct(data.filter(p => p.id == id)[0]);
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
        <Produktrubrik>{product.name}</Produktrubrik>
          <Img src={product.images && product.images[0].src} alt=""></Img>
        </div>
        <article>
          <p> {product.description}</p>
          <h2>{product.price} KR</h2>
        </article>
      </div> 
    
    </div> 
  )
}
export default Product;

const Produktrubrik = styled.h2`
padding-top:20px;
`
const Img = styled.img`
width:20%;
padding-top:10px;
`