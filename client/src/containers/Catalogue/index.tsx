import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import React from "react";
import { StyledCatalogue } from "./StyledCatalogue";
import { fotosZapa } from "../../components/ProductDetail/mockup";
import { GET_PRODUCTS } from "../../graphql/queries";
import Slider from "../../components/Slider";
import Filter from "../../components/Filter";
import Loader from "../../components/Loader";
import {useAuth} from "../../hooks/AuthProvider";
import { CREATE_CART,} from "../../graphql/mutations";



export default function Catalogue () {
  let { data, loading, error } = useQuery(GET_PRODUCTS);
  const [createCart, { error: errorMutationCart }] = useMutation(
    CREATE_CART
  );
  const [loadedProducts, setLoadedProduct] = React.useState([]);
  const {userId} = useAuth()
  console.log(userId)
  if(userId){
    const carrito = createCart({
      variables :{
        userId: userId,
        state:'reserved'
      },
    })
  }
  //console.log(carrito)
  // Esto es mejor hacerlo con un useEffect para que no explote si no hay ningun producto
  // if (loadedProducts.length < 1) {
  //   console.log(data);
  //   setLoadedProduct(data.products);
  // }

  React.useEffect(() => {
    data && setLoadedProduct(data.products);
  }, [data]);

  if (loading || !data) return <Loader />;
  if (error) return <span>Error {error.message}</span>;

  return (
    <StyledCatalogue className="fondoDegradado">
      <Slider />
      <div className="sectionBar">
        <section className="create">Crear</section>
        <section className="trend">Tendencias</section>
        <section className="sale">Ofertas</section>
        <Filter setLoadedProduct={setLoadedProduct} />
      </div>
      {console.log("data.products", data.products)}
      {console.log("loadedProducts", loadedProducts)}
      <ul>
        {loadedProducts.map((item, i) => (
          <li>
            <Link to={`/product/${item.id || 1}`} key={item.id}>
              <img
                src={item.muestraimg || fotosZapa.photo}
                alt="name"
                className="productImg"
              />

              <div className="productData">
                <h5>
                  {item.brand.name} {item.name}
                </h5>
                <p>${item.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </StyledCatalogue>
  );
}
