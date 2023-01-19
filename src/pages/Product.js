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
    <Div>
      <Divitem>
        <Produktrubrik>{product.name}</Produktrubrik>
        <Divvit>
        <Divbild>
          <Img src={product.images && product.images[0].src} alt=""></Img>
        </Divbild>
        </Divvit>
        <article>
          <Price>{product.price} KR</Price>
        </article>
      </Divitem> 
    
    </Div> 
  )
}
export default Product;

const Div = styled.div`
/* background-color:#FAEDE4; */
`
const Produktrubrik = styled.h2`
padding-top:20px;
font-family: 'Josefin Sans', ssans-serif;
`

const Price = styled.h3`
padding-bottom:25px;

`
const Divbild = styled.div`
display:flex;
justify-content:center;
`
const Divvit = styled.div`
background-color:#FAEDE4;
display:flex;
width:35vw;
justify-content: center; 
padding:1em 0;
`
const Divitem = styled.div`
justify-content:center;
display:flex;
margin:50px 0px 50px 0px;
`

const Img = styled.img`
max-height:60vh;
padding-top:10px;
`