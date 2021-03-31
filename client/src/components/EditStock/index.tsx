import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { EDIT_STOCK } from "../../graphql/mutations";
import { StyleEditStock } from "./StyledEditStock";
import { useHistory } from "react-router-dom";
import { GET_ALL_STOCK } from "../../graphql/queries";

export default function EditStock({ match }) {
	const history = useHistory();
	const productId = match.params.productId;
	const modelId = match.params.modelId;
	const [modify, setModify] = useState("");
	const [error, setError] = useState(false);
	const [editStock] = useMutation(EDIT_STOCK, {
		refetchQueries: [{ query: GET_ALL_STOCK }]
	});
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await editStock({
				variables: {
					productId,
					modelId,
					input: parseInt(modify),
				},
			});
			alert("Stock modificado")
			history.push("/admin/stock");
		} catch (e) {
			console.log(e);
		} finally {
			// console.log(productId);
			// console.log(modelId);
			// console.log(modify);
		}
	};
	const handleChange = (e) => {
		if (e.target.name === "stock" && e.target.value) {
			setModify(e.target.value);
			setError(false);
		} else {
			setError(true);
		}
	};

	return (
		<StyleEditStock>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="number"
						name="stock"
						min={0}
						onChange={handleChange}
						placeholder="New Stock"
						value={modify}
					/>
					<span className="snap_name"></span>
				</div>
				<input type="submit" value="Modify Stock" disabled={error} />
			</form>
		</StyleEditStock>
	);
}
