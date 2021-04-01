import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { StyledAddCategory } from "./StyledAddCategory";
import { ADD_CATEGORY } from "../../graphql/mutations";
import { validateChange, check, formCategory } from "../../helpers/validation";
import { GET_CATEGORIES } from "../../graphql/queries";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

interface AddCategoryAttributes {
  className: String;
}

export default function AddCategory({ className }: AddCategoryAttributes) {
  const history = useHistory();
  const [createCategory, { error: errorMutationModel }] = useMutation(
    ADD_CATEGORY, {
      refetchQueries: [{ query: GET_CATEGORIES }]
    });
  const [form, setForm] = useState<formCategory>({
    name: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let { name } = form;
    try {
      await createCategory({
        variables: {
          name,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Category added",
      });
      history.push("/admin/category");
    } catch (err) {
      console.log(err);
    } finally {
      setForm({ name: "" });
    }
  };
  const handleChange = async (e: any) => {
    const error = check(e, form as any);
    setForm(validateChange(e, form as any, error as any));
  };
  if (errorMutationModel) {
    console.log(errorMutationModel);
  }
  return (
    <StyledAddCategory>
      <form onSubmit={handleSubmit}>
        <div className="div_name">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Category Name"
            value={form.name}
          />
          <span className="span_name"></span>
        </div>
        <input className="addButton" type="submit" value="Add Category" />
      </form>
    </StyledAddCategory>
  );
}
