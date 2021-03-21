import React from "react";
import { useLocation } from "react-router";
import { useLazyQuery, useQuery } from "@apollo/client";
import { SEARCH_PRODUCTS } from "../../graphql/queries";
import { Link } from "react-router-dom";
import { fotosZapa } from "../../components/ProductDetail/mockup";
import { StyledSearchResult } from "./StyledSearchResult";

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResult() {
  const query = useQueryParams();
  query.get("query");
  const { data, loading, error } = useQuery(SEARCH_PRODUCTS, {
    variables: { name: query.get("query") },
  });
  const products = data["searchProducts"];

  return (
    <StyledSearchResult className="fondoDegradado">
      <div className="filterBar">
        <ul>
          {products &&
            products.map((item, i) => (
              <Link to={`/product/${item.id}`}>
                <li>
                  <img
                    src={item.muestraimg || fotosZapa.photo}
                    alt={item.name}
                    className="productImg"
                    key={item.id}
                  />
                  <div className="productData">
                    <h5>{item.brand.name} {item.name}</h5>
                    <p>${item.price}</p>
                  </div>
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </StyledSearchResult>
  );
}
