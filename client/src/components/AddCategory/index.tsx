import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { StyledAddCategory } from "./StyledAddCategory";
import { ADD_PRODUCT, ADD_MODEL } from "../../graphql/mutations";
import { GET_CATEGORIES, GET_BRANDS, GET_MODELS } from "../../graphql/queries";
import { validateChange, check, form } from "../../helpers/validation";


export default function AddCategory(){
	return (
	<StyledAddCategory>
	<div>
	</div>
	</StyledAddCategory>
)
}


