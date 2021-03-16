import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { StyledCRUDCategory } from "./StyledCRUDCategory";
import { CategoryAttributes } from "../../types"
import { GET_CATEGORIES } from "../../graphql/queries"
import { useHistory } from "react-router-dom";
import AddCategory from "../../components/AddCategory"


export default function Category(){
	const history = useHistory();
	const {data,loading,error} = useQuery(GET_CATEGORIES)
	const allCategory = data ? data.categories : null;
	const handleClick = () => {
		history.push("/admin/addCategory")
	}
	return(
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
				<button disabled> Edit </button>
				<button disabled> Delete </button>
			</div>
		</li>

	))}

	</ul>
	</StyledCRUDCategory>
)
}


