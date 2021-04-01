import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { StyledOffert } from "./StyledOffert";
import { ADD_REVIEW } from "../../graphql/mutations";
import { GET_CATEGORIES } from "../../graphql/queries";


interface Offert {
  className: String;
}

export default function Offert({ match }: any ) {

  const [createReview, { error: errorMutationReview }] = useMutation(
    ADD_REVIEW
  );

  const [form, setForm] = useState({
    description: "",
    title: "",
    score: 3,
    error: true,
  });

  if (errorMutationReview) {
    console.error(errorMutationReview);
  }



  const handleChange = async (e: any) => {
    // const error = check(e, form);
    // setForm(validateChange(e, form, error));
  };
  //---------------------------------------------------------------------------------------------------------
  const { data, loading, error } = useQuery(GET_CATEGORIES, {});
  return (
    <StyledOffert>
      <form>
        <select name="target" id="target">
              <option value='product' key='product'>Product</option>
              <option value='category' key='category'>Category</option>
        </select>

        <div className="div_title">
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Título"
            value={form.title}
          />
          <span className="span_title"></span>
        </div>
        <div className="div_description">
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Descripción"
            value={form.description}
          />
          <span className="span_description"></span>
        </div>
        <input
          className="addButton"
          type="submit"
          value="Add review"
          disabled={form.error}
        />
      </form>
    </StyledOffert>
  );
}