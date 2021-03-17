import { useQuery} from "@apollo/client";
import { Link } from "react-router-dom";
import {loadedProducts} from '../../graphql/index'
import { StyledCatalogue } from "./StyledCatalogue";
import { fotosZapa } from "../../components/ProductDetail/mockup";
import { GET_PRODUCTS } from "../../graphql/queries";
import Slider from "../../components/Slider";
import Filter from "../../components/Filter";


export default function Catalogue() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading || !data) return <span>Loading</span>;
  if (error) return <span>Error {error.message}</span>;

  loadedProducts(data.products)  // this is a reactive variable from apollo server
  const products = loadedProducts();

  return (
    <StyledCatalogue>
      <Slider />
      <div className="filterBar">
        <section className="create">Crear</section>
        <section className="trend">Tendencias</section>
        <section className="sale">Ofertas</section>
      </div>
      <Filter />
      {products.map((item, i) => (
        <Link to={`/product/${item.id || 1}`}>
          <img
            src={item.photo || fotosZapa.photo}
            alt="name"
            className="productImg"
            key={item.id}
          />
        </Link>
      ))}
    </StyledCatalogue>
  );
}
