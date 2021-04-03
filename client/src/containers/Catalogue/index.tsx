import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { StyledCatalogue } from "./StyledCatalogue";
import { GET_PRODUCTS } from "../../graphql/queries";
import Slider from "../../components/Slider";
import Filter from "../../components/Filter";
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";
import { useAuth } from "../../hooks/AuthProvider";
import { CREATE_CART } from "../../graphql/mutations";

export default function Catalogue() {
  let { data, loading, error } = useQuery(GET_PRODUCTS);
  const [createCart] = useMutation(CREATE_CART);
  const [loadedProducts, setLoadedProduct] = React.useState([]);
  const [filterOfferts, setFilterOfferts] = React.useState(false);
  const { userId } = useAuth();
  if (parseInt(userId) > 0) {
    createCart({
      variables: {
        userId: userId,
        state: "reserved",
      },
    });
  }
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
  // let filterOfferts = true;
  return (
    <StyledCatalogue className="fondoDegradado">
      <Slider />
      <div className="sectionBar">
        {/* <section className="create">Crear</section>
        <section className="trend">Tendencias</section> */}
        <section className="sale" onClick={() => setFilterOfferts(!filterOfferts)}>For sale!</section>
        <Filter setLoadedProduct={setLoadedProduct} />
      </div>
      
      <ul>
        {loadedProducts.map((item, i) => {
          
            if(!filterOfferts || item.discount > 0 ){
              return (            
              <li key={item.id}>
                <ProductCard item={item} />
              </li>
            )}
              else{
                return <></>
              }
            })}
      </ul>
    </StyledCatalogue>
  );
}
