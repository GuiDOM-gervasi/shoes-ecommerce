import React, { useState } from "react";
import { StyledSearchBar } from "./StyledSearchBar";
import { SEARCH_PRODUCTS } from "../../graphql/queries";
import { useLazyQuery } from "@apollo/react-hooks";
import { Link, useHistory } from 'react-router-dom'


export default function SearchBar() {
  
  const [searchValue, setSearchValue] = useState("");
  const [activeAutoComplete, setActiveAutoComplete] = useState(false);
  const [searchProduct, { called, loading, data }] = useLazyQuery(SEARCH_PRODUCTS);
  const history = useHistory();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    const query = e.target.innerText;
    setSearchValue(query);
    history.push(`/search?query=${query}`);
  }

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchValue(query);
    query && setActiveAutoComplete(!activeAutoComplete);
    searchProduct({
      variables: {
        name: query,
      },
    });
  };

  return (
    <StyledSearchBar>
        <form autoComplete="off" onSubmit={handleSubmit} className="formSearch">
          <input
            type="text"
            onChange={handleChange}
            value={searchValue}
            placeholder="Zapatilla Nike Airmax..."
          ></input>
          <input type="submit" value="search" className="boton"></input>
        </form>
        {
          (called && loading) ? null : 
          <div className={activeAutoComplete ? "contentResult" : "contentResult"}>
          {searchValue && data && data["searchProducts"]
            ? data["searchProducts"]
                .sort((a: { name: string }, b: { name: string }) => {
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
                .map((item, i) => {
                  if(i<3){
                    return (<div key={i} className="contentResultItem">
                    <div>
                      <div className="name" onClick={handleClick}>{item.name}</div>
                      <Link to={`/product/${item.id}`}><div className="goPage">go!</div></Link>
                    </div>
                  </div>)
                  }}) : null}
    </div>
        }
    </StyledSearchBar>
  );
}
