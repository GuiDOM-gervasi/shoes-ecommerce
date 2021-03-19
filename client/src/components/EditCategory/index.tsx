import React, { useState , } from "react";
import { useMutation } from "react-apollo";
import {GET_CATEGORIES} from "../../graphql/queries"
import { EDIT_CATEGORY} from "../../graphql/mutations";
import { StyledEditCategory } from "./StyleEditCategory";
import {useHistory} from "react-router-dom"


export default function EditCategory({match}){
  const history = useHistory()
  const categoryId = match.params.categoryId;
  const [modify,setModify] = useState("");
  const [error,setError] = useState(false);
  const [updateCategory] = useMutation(EDIT_CATEGORY,{
    refetchQueries: [{query:GET_CATEGORIES}]

  })
  const handleSubmit = async(e) => {
    	e.preventDefault();
    	try{
	  await updateCategory({
		variables:{
		  id:categoryId,
		  input:modify,

		}
	  })
	  history.push("/admin/category")
	}catch(e){
	  console.log(e)
	}finally{
		console.log(categoryId)
	  	console.log(modify)
	}
  }
  const handleChange = (e) => {
   if(e.target.name === "name" && e.target.value ){setModify(e.target.value);setError(false)}else{setError(true)}
	
  }

 
  return(
    <StyledEditCategory>
      <form onSubmit={handleSubmit}>
	<div>
	  <input
	    type="text"
	    name="name"
	    onChange={handleChange}
	    placeholder="New Name"
	    value={modify}
	  />
          <span className="snap_name"></span>
	</div>
	<input type="submit" value="Modify Name" disabled={error} />
      </form>

    </StyledEditCategory>
    
  )
}
