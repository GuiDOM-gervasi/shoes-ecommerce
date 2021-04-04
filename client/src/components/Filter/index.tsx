import React from "react";
import { StyledFilter } from "./StyledFilter";
import { useQuery, useLazyQuery } from "@apollo/client";
import {
  GET_CATEGORIES,
  GET_PRODUCTS_BY_CATEGORIES,
  GET_FILTERED_PRODUCTS,
  GET_BRANDS
} from "../../graphql/queries";

// typescript interface
interface Category {
  id: string;
  name: string;
  __typename: string;
}

interface Brands {
  id: string;
  name: string;
  __typename: string;
}

export default function Filter({ setLoadedProduct }) {
  // get form apollo/graphQL the categories to be show as options to filter
  const { data: catData, loading: catLoading, error: catError } = useQuery(GET_CATEGORIES, {});
  const { data: brandsData, loading: brandsLoading, error: brandsError } = useQuery(GET_BRANDS, {});
  const [
    getProducts,
    { data: productsData, loading: productsLoading },
  ] = useLazyQuery(GET_FILTERED_PRODUCTS);

  const handleCategoryFilter = (value) => {
    console.log([value])
    getProducts({
      variables: {
        categoryId : [value],
        brandId: ['']
      },
    });
  };

  if (catLoading || brandsLoading ) {
    return <div>Loading ...</div>;
  }
  if (catError || brandsError ) {
    return <div>Something go wrong loading the filter bar</div>;
  }

  if(!productsLoading && !!productsData) {
    setLoadedProduct(productsData.filteredProducts)
  }

  const categories: Category[] = catData.categories;
  const brands: Category[] = brandsData.brand;

  return (
    <StyledFilter>
      <div className="filter">
        <select 
          onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
            handleCategoryFilter(ev.target.value)
          }
        >
          <option className="option" id="zzz" value="">
            All categories
          </option>
          {categories.map((e) => (
            <option className="option" id={e.name} value={e.id} key={e.id}>
              {e.name}{" "}
            </option>
          ))}
        </select>
        <span className="focus"></span>
      </div>
      <div className="filter">
        <select 
          onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
            handleCategoryFilter(ev.target.value)
          }
        >
          <option className="option" id="zzz" value="">
            All brands
          </option>
          {brands.map((e) => (
            <option className="option" id={e.name} value={e.id} key={e.id}>
              {e.name}{" "}
            </option>
          ))}
        </select>

        <span className="focus"></span>
      </div>
    </StyledFilter>
  );
}
