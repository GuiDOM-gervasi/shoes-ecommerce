import React, { useState } from "react";
import { StyledSearchBar } from "./StyledSearchBar";
import { SEARCH_PRODUCTS } from "../../graphql/queries";
import { useLazyQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
  const [activeAutoComplete, setActiveAutoComplete] = useState(false);
  const [searchProduct, { called, loading, data }] = useLazyQuery(
    SEARCH_PRODUCTS
  );

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setActiveAutoComplete(false);
    if(searchValue){
      history.push(`/search?query=${searchValue}`)
    }
  };

  const handleClick = (e) => {
    const idProduct = e.target.id;
    setActiveAutoComplete(false);

    if (idProduct) {
      history.push(`/product/${idProduct}`);
      setSearchValue("")
    }
  };

  const handleKeyPress = (e) => {
    setActiveAutoComplete(false);
    if(e.which === 13){ // Enter code = 13;
      history.push(`/search?query=${searchValue}`)
    }
  }

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchValue(query);
    query && setActiveAutoComplete(true);
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
          onKeyPress={handleKeyPress}
          value={searchValue}
          placeholder="Zapatilla Nike Airmax..."
        ></input>
        <input type="submit" value="search" className="boton"></input>
      </form>
      {called && loading ? null : activeAutoComplete ? (
        <div className="contentResult">
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
                  if (i < 3) {
                    return (
                      <div key={i} className="contentResultItem">
                        <div>
                          <div className="name" id={item.id} onClick={handleClick}>
                            {item.name}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })
            : null}
        </div>
      ) : null}
    </StyledSearchBar>
  );
}
