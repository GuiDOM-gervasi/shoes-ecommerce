import React, { useState } from "react";
import { StyledSearchBar } from "./StyledSearchBar";
import { SEARCH_PRODUCTS, GET_PRODUCTS } from "../../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import { QueryProducts } from "./../../types";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const { data: dataQuery, loading, refetch } = useQuery<QueryProducts>(
    SEARCH_PRODUCTS
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataQuery);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  return (
    <StyledSearchBar>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleChange}
          value={searchValue}
        ></input>
        <input type="submit" value=""></input>
      </form>
    </StyledSearchBar>
  );
}
