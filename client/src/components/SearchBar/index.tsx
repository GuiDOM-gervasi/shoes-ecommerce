import React, { useState } from "react";
import { StyledSearchBar } from "./StyledSearchBar";
import { SEARCH_PRODUCTS, GET_PRODUCTS } from "../../graphql/queries";
import { useLazyQuery } from "@apollo/react-hooks";
import { QueryProducts } from "./../../types";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const [searchProduct, { data, loading }] = useLazyQuery(SEARCH_PRODUCTS);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    searchProduct({
      variables: {
        name: e.target.value,
      },
    });
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
        {searchValue && data && data["searchProducts"]
          ? data["searchProducts"]
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
