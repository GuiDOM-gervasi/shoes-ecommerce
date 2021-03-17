import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_PRODUCTS } from "../../graphql/queries";
import { DELETE_PRODUCT } from "../../graphql/mutations";
import { StyledCRUDProducts } from "./StyledCRUDProducts";
import { ProductAttributes } from "../../types";
import { useHistory } from "react-router-dom";

export default function CRUDProducts() {
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const allProducts = data ? data.products : null;
  const [deleteProduct, { loading: loadingDelete }] = useMutation(
    DELETE_PRODUCT,
    {
      refetchQueries: [{ query: GET_PRODUCTS }],
    }
  );

  if (loading) return <span> loading </span>;
  if (error) return <span> error {error.message} </span>;

  const handleClick = () => {
    history.push("/admin/addProduct");
  };

  const handleDelete = (id) => {
    deleteProduct({ variables: { id } });
  };

  const handleEdit = (id) => {
    history.push(`/admin/editProduct/${id}`);
  };

  if (loadingDelete) return <span>loading...</span>;

  return (
    <StyledCRUDProducts>
      <button className="addButton" onClick={handleClick}>
        Add new product
      </button>
      <ul>
        {allProducts?.map((item: ProductAttributes) => (
          <li key={item.id}>
            <span className="id"> {item.id} </span>
            <span className="name"> {item.name} </span>
            <span className="price"> {item.price} </span>

            <div className="buttons">
              <button onClick={() => handleEdit(item.id)}> edit </button>
              <button onClick={() => handleDelete(item.id)}> delete </button>
            </div>
          </li>
        ))}
      </ul>
    </StyledCRUDProducts>
  );
}
