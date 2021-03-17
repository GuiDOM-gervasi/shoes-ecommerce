import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../graphql/queries";

// typescript interface
interface Category {
  id: string
  name: string
  __typename: string

}

export default function Filter() {

  // get form apollo/graphQL the categories to be show as options to filter
  const { data, loading, error } = useQuery(GET_CATEGORIES, {});

  const handleCategoryFilter = (value) => {
    console.log(value)

  } 

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>something go wrong loading the filter bar</div>
  }

  const categories: Category[] = data.categories;

  return (
    <div>
      Filter{" "}
      <select onChange={(
                ev: React.ChangeEvent<HTMLSelectElement>,
            ): void => handleCategoryFilter(ev.target.value)}>
        {categories.map((e) =>
          <option id={e.id} value={e.name}>{e.name} </option>)
        }
      </select>
    </div>
  );
}