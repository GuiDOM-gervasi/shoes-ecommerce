import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PRODUCTS, GET_DELETED } from "../../graphql/queries";
import { DELETE_PRODUCT, UNDELETE_PRODUCT } from "../../graphql/mutations";
import { StyledCRUDProducts } from "./StyledCRUDProducts";
import { ProductAttributes } from "../../types";
import { useHistory } from "react-router-dom";
import Loader from '../../components/Loader';

export default function CRUDProducts() {
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const { data: deletedQuery, loading: loadingDeleted, error: errorDeleted } = useQuery(GET_DELETED);
  const allProducts = data ? data.products : null;
  const deletedProducts = deletedQuery ? deletedQuery.deleted : null;
  const [deleteProduct, { loading: loadingDelete }] = useMutation(
    DELETE_PRODUCT,
    {
      refetchQueries: [{ query: GET_PRODUCTS }, { query: GET_DELETED }],
    }
  );
  const [undeleteProduct, { loading: loadingRestore }] = useMutation (
    UNDELETE_PRODUCT,
    {
      refetchQueries: [{ query: GET_PRODUCTS }, { query: GET_DELETED }], 
    }
  );

  if (loading || loadingDeleted || loadingDelete || loadingRestore) return <Loader />;
  if (error || errorDeleted) return <span> error {error.message} </span>;

  const handleClick = () => {
    history.push("/admin/addProduct");
  };

  const handleDelete = (id) => {
    deleteProduct({ variables: { id } });
  };

  const handleRestore = (id) => {
    undeleteProduct({ variables: { id } })
  }

  const handleEdit = (id) => {
    history.push(`/admin/editProduct/${id}`);
  };

  return (
    <StyledCRUDProducts>
      <button className="addButton" onClick={handleClick}>
        Add new product
      </button>
      <ul className="activeProducts">
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
      <div className="deleted">
        <h4> Deleted products </h4>
      <ul className="deletedProducts">
        {deletedProducts?.map((item: ProductAttributes) => (
          <li key={item.id}>
            <span className="id"> {item.id} </span>
            <span className="name"> {item.name} </span>
            <span className="price"> {item.price} </span>
	    <div className="buttons">            
              <button onClick={() => handleRestore(item.id)}> restore </button>
	    </div>
          </li>
        ))}
      </ul>
      </div>
    </StyledCRUDProducts>
  );
}
