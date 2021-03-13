import React, { useState } from "react";
import { StyledSearchBar } from "./StyledSearchBar";
import { SEARCH_PRODUCTS, GET_PRODUCTS } from "../../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import { QueryProducts } from "./../../types";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [dataProduct, setDataProdutc] = useState([]);

  const { data, loading, refetch } = useQuery(SEARCH_PRODUCTS, {
    variables: { name: searchValue },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleQuery = () => {
    if (searchValue) {
      setDataProdutc(data["searchProducts"]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    handleQuery();
  };

  return (
    <StyledSearchBar>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleChange}
          value={searchValue}
        ></input>
        <input type="submit" value="submit"></input>
      </form>
      <div>
        {dataProduct
          ? dataProduct
              .sort((a, b) => {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              })
              .map((item, i) => <h5 key={i}>{item.name}</h5>)
          : null}
      </div>
    </StyledSearchBar>
  );
}
