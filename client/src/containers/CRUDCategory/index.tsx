import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { StyledCRUDCategory } from "./StyledCRUDCategory";
import { CategoryAttributes } from "../../types";
import { GET_CATEGORIES, GET_DELETED_CATEGORIES } from "../../graphql/queries";
import { useHistory } from "react-router-dom";
import { DELETE_CATEGORY, UNDELETE_CATEGORY } from "../../graphql/mutations";
import Loader from "../../components/Loader";

export default function CRUDCategory() {
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_CATEGORIES);
  const {
    data: deletedCategories,
    loading: loadingDeleted,
    error: errorDeleted,
  } = useQuery(GET_DELETED_CATEGORIES);
  const allCategory = data ? data.categories : null;

  const [deleteCategory] = useMutation(DELETE_CATEGORY, {
    refetchQueries: [{ query: GET_CATEGORIES }, { query: GET_DELETED_CATEGORIES }],
  });
  const [restoreCategory, { loading: loadingRestore }] = useMutation(UNDELETE_CATEGORY, {
    refetchQueries: [{ query: GET_CATEGORIES }, { query: GET_DELETED_CATEGORIES }],
  });

  if (loading) return <Loader />;
  if (error) return <span> error {error.message} </span>;
  const handleClick = () => {
    history.push("/admin/addCategory");
  };
  const handleDelete = (id) => {
    deleteCategory({ variables: { id } });
  };
  const handleEdit = (id) => {
    history.push(`/admin/editCategory/${id}`);
  };

  const handleRestore = (id) => {
    restoreCategory({ variables: { id } });
  };

  return (
    <StyledCRUDCategory>
      <button className="addButton" onClick={handleClick}>
        Add new Category
      </button>
      <ul>
        <li className="titles">
          <h5>ID</h5>
          <h5>Category</h5>
          <div></div>
        </li>
        {allCategory?.map((item: CategoryAttributes) => (
          <li key={item.id}>
            <span className="id"> {item.id} </span>
            <span className="name"> {item.name} </span>
            <div className="buttons">
              <i onClick={() => handleEdit(item.id)} className="fas fa-edit" />
              <i
                onClick={() => handleDelete(item.id)}
                className="fas fa-trash-alt"
              />
              {/* <button onClick={() => handleEdit(item.id)}> Edit </button> */}
              {/* <button onClick={() => handleDelete(item.id)}> Delete </button> */}
            </div>
          </li>
        ))}
      </ul>
      <div className="deleted">
        <h4>Deleted categories</h4>
        <ul className="deletedCategories">
          {deletedCategories?.deletedCategories?.map((item: CategoryAttributes) => (
            <li key={item.id}>
              <span className="id">
                {item.id}
              </span>
              <span className="name">
                {item.name}
              </span>
              <span>
                <div className="buttons">
                  <i
                    onClick={() => handleRestore(item.id)}
                    className="fas fa-trash-restore"
                  />
                </div>
              </span>
            </li>
          ))}
        </ul>
        

      </div>
    </StyledCRUDCategory>
  );
}
