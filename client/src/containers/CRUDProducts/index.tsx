import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRODUCTS } from "../../graphql/queries";
<<<<<<< HEAD:client/src/containers/CRUDProducts/index.tsx
import { StyledCRUDProducts } from "./StyledCRUDProducts";
import { ProductAttributes } from "../../types";
import { useHistory } from "react-router-dom";
=======
import { StyledCRUDProducts } from "./StyledCRUDProducts.jsx";
import AddProduct from '../../components/AddProduct';
>>>>>>> a2002671aa532ab9ed0c423de96c9c17cc40b2af:client/src/containers/CRUDProducts/index.jsx

export default function CRUDProducts() {
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const allProducts = data ? data.products : null;
  if (loading) return <span> loading </span>;
  if (error) return <span> error {error.message} </span>;

  const handleClick = () => {
    history.push("/admin/addProduct");
  };

  const handleClick = () => {
    document.querySelector('.modal').style.display = 'flex';
    document.body.onclick = () => document.querySelector('modal').style.display = 'none';
  }

  return (
    <StyledCRUDProducts>
<<<<<<< HEAD:client/src/containers/CRUDProducts/index.tsx
      <button className="addButton" onClick={handleClick}>
        Add new product
      </button>
=======
      <AddProduct className='modal' />
      <button className="addButton" onClick={handleClick}> Add new product </button>
>>>>>>> a2002671aa532ab9ed0c423de96c9c17cc40b2af:client/src/containers/CRUDProducts/index.jsx
      <ul>
        {allProducts?.map((item: ProductAttributes) => (
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
