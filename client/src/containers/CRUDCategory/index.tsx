import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { StyledCRUDCategory } from "./StyledCRUDCategory";
import { CategoryAttributes } from "../../types";
import { GET_CATEGORIES } from "../../graphql/queries";
import { useHistory } from "react-router-dom";
import { DELETE_CATEGORY } from "../../graphql/mutations";

export default function CRUDCategory() {
	const history = useHistory();
	const { data, loading, error } = useQuery(GET_CATEGORIES);
	const allCategory = data ? data.categories : null;
	const [deleteCategory, { loading: loadingDelete }] = useMutation(
		DELETE_CATEGORY,
		{
			refetchQueries: [{ query: GET_CATEGORIES }],
		}
	);
	if (loading) return <span> loading </span>;
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

	return (
		<StyledCRUDCategory>
			<button className="addButton" onClick={handleClick}>
				Add new Category
			</button>
			<ul>
				{allCategory?.map((item: CategoryAttributes) => (
					<li key={item.id}>
						<span className="id"> {item.id} </span>
						<span className="name"> {item.name} </span>
						<div className="buttons">
							<button onClick={() => handleEdit(item.id)}>
								{" "}
								Edit{" "}
							</button>
							<button onClick={() => handleDelete(item.id)}>
								{" "}
								Delete{" "}
							</button>
						</div>
					</li>
				))}
			</ul>
		</StyledCRUDCategory>
	);
}
