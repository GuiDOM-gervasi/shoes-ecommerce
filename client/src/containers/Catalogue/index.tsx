import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { Link } from "react-router-dom";
import { StyledCatalogue } from "./StyledCatalogue";
import { fotosZapa } from "../../components/ProductDetail/mockup";
import { GET_PRODUCTS } from "../../graphql/queries";
import Slider from "../../components/Slider";

export default function Catalogue() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  if (loading) return <span>Loading</span>;
  if (error) return <span>Error {error.message}</span>;

  const products = data.products;

  return (
    <StyledCatalogue className="fondoDegradado">
      <Slider />
      <div className="sectionBar">
        <section className="create">Crear</section>
        <section className="trend">Tendencias</section>
        <section className="sale">Ofertas</section>
      </div>
      {products.map((item:any) => (
        <Link key={item.id} to={`/product/${item.id || 1}`}>
          <img
            src={item.photo || fotosZapa.photo}
            alt="name"
            className="productImg"
          />
        </Link>
      ))}
    </StyledCatalogue>
  );
}
