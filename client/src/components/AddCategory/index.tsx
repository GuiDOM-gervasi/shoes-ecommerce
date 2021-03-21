import React, { useState } from "react";
import { useMutation} from "@apollo/client";
import { StyledAddCategory } from "./StyledAddCategory";
import { ADD_CATEGORY } from "../../graphql/mutations";
import { validateChange, check, formCategory} from "../../helpers/validation";

interface AddCategoryAttributes{
	className: String
}

export default function AddCategory({className} : AddCategoryAttributes){
	const [createCateogry, {error: errorMutationModel}] = useMutation(ADD_CATEGORY)
	const [form,setForm] = useState<formCategory>({
		name:"",
	})
	const handleSubmit= async(e) => {
	e.preventDefault();
	let {name} = form
	try {
	await createCateogry({
		variables: {
		name
		},
	})
	}catch(err){
		console.log(err)
	}finally{
		setForm({name: ""})
	}
	
}
	const handleChange= async(e: any) => {
	const error = check(e,form as any);
	setForm(validateChange(e,form as any,error as any))
}
	if(errorMutationModel){
		console.log(errorMutationModel)
	}
	return (
	<StyledAddCategory>
	<form onSubmit={handleSubmit}>
	<div className="div_name">
		<input 
		type = "text"
		name = "name"
		onChange = {handleChange}
		placeholder= "Category Name"
		value={form.name}
		/>
		<span className="span_name"></span>
	</div>
	<input type = "submit" value="Add Category"/> 
	</form>
	</StyledAddCategory>
)
}


