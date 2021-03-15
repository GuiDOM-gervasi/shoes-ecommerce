import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRODUCTS } from "../../graphql/queries";
import { StyledCRUDProducts } from "./StyledCRUDProducts.jsx";
import AddProduct from '../../components/AddProduct';

export default function CRUDProducts() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const allProducts = data ? data.products : null;
  if (loading) return <span> loading </span>;
  if (error) return <span> error {error.message} </span>;
  const handleSubmit = () => {
	  console.log('submitee');
  }

  const handleClick = () => {
    document.querySelector('.modal').style.display = 'flex';
    document.body.onclick = () => document.querySelector('modal').style.display = 'none';
  }

  return (
    <StyledCRUDProducts>
      <AddProduct className='modal' />
      <button className="addButton" onClick={handleClick}> Add new product </button>
      <ul>
        {allProducts?.map((item) => (
          <li key={item.id}>
            <span className="id"> {item.id} </span>
            <span className="name"> {item.name} </span>
            <span className="price"> {item.price} </span>

            <div className="buttons">
              <button disabled> edit </button>
              <button disabled> delete </button>
            </div>
          </li>
        ))}
      </ul>
    </StyledCRUDProducts>
  );
}
