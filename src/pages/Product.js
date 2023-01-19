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
  console.log(product);

  useEffect(() => {
    fetchProduct();
  },)

  return (
     <Parent>


      <div>
        <Produktnamn>{product.name}</Produktnamn>
        </div>

          <Img src={product.images && product.images[0].src} alt=""></Img>
    
        <div>
          <H3>{product.price} KR</H3>
        </div>
        <div>
        <button className="buybtn">
          Lägg i varukorg

        </button>
        </div>

      </Parent> 
    
  )
}
export default Product;

const Produktnamn = styled.h2`
margin:0;
margin-bottom:15px;
`

const Parent = styled.div`
background-color:#FAEDE4;
padding:4em;
`

const Img = styled.img`
max-height:60vh;
align-items:center;
margin:15px 0;
`
const H3 = styled.h3`
margin-bottom:15px;
`



