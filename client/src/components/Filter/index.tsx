import React from 'react'
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_CATEGORIES, GET_PRODUCTS_BY_CATEGORIES } from "../../graphql/queries";

// typescript interface
interface Category {
  id: string
  name: string
  __typename: string

}

export default function Filter({setLoadedProduct}) {

  // get form apollo/graphQL the categories to be show as options to filter
  const { data, loading, error } = useQuery(GET_CATEGORIES, {});
  const [getProducts, { data:productsData, loading:productsLoading }] = useLazyQuery(GET_PRODUCTS_BY_CATEGORIES);

  const handleCategoryFilter = (value) => {

    getProducts({
      variables: {
        name: value,
      },
    });
  }
  

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>something go wrong loading the filter bar</div>
  }

  if(!productsLoading && !!productsData) {
    setLoadedProduct(productsData.productForCategory)
  }

  const categories: Category[] = data.categories;

  return (
    <div>
      Filter{" "}
      <select onChange={(
                ev: React.ChangeEvent<HTMLSelectElement>,
            ): void => handleCategoryFilter(ev.target.value)}>
          <option id="zzz" value = ''>todas</option>
        {categories.map((e) =>
          <option id={e.id} value={e.name} key={e.id}>{e.name} </option>)
        }
      </select>
    </div>
  );
}