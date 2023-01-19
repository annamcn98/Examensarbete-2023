import { useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import woocommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new woocommerceRestApi({
    url: 'https://anna-nilsson.cme-projects.com/',
    consumerKey: 'ck_7e751480edcce32808fa57574c16630a267d8cce',
    consumerSecret:'cs_768af23bdd31b6188b9a13ffabf4af6bfbb6f167',
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

function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams(); // get the id from the URL

  const fetchProduct = async () => {
    try {
      const response = await fetchWooCommerceProducts().catch((error)=>(error));
      const data = response.data;
      setProduct(data.filter(p => p.id == id)[0]); // filter the list of products to find the one with the matching id
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
          <img src={product.images && product.images[0].src} alt=""></img>
        </div>
        <article>
          <h2>{product.name}</h2>
          <p> {product.description}</p>
          <h2>{product.price} KR</h2>
        </article>
      </div> 
    
    </div> 
  )
}
export default Product;