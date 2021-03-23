import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { StyledAddReview } from "./StyledAddReview";
import { ADD_REVIEW } from "../../graphql/mutations";
import { GET_CATEGORIES, GET_BRANDS, GET_MODELS } from "../../graphql/queries";
import {
  validateChange,
  check,
  formReview,
} from "../../helpers/validationReview";
import Loader from "../Loader";
import { NavLink } from "react-router-dom";

interface AddProductAttributes {
  className: String;
}

export default function AddReview(
  { match }: any,
  { className }: AddProductAttributes
) {
  const [createReview, { error: errorMutationReview }] = useMutation(
    ADD_REVIEW
  );
  const productId = match.params.id;
  const userId = match.params.user;

  const [form, setForm] = useState<formReview>({
    description: "",
    title: "",
    score: 3,
    userId,
    productId,
    error: true,
  });

  if (errorMutationReview) {
    console.log(errorMutationReview);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { title, description, score, userId, productId } = form;
    try {
      await createReview({
        variables: {
          title,
          description,
          score,
          userId,
          productId,
        },
      });
    } catch (err) {
      console.log(err);
      return;
    }
    setForm({
      description: "",
      title: "",
      score: 0,
      userId: "1",
      productId: "1",
      error: true,
    });
    alert("Review creada");
  };

  const handleChange = async (e: any) => {
    const error = check(e, form);
    setForm(validateChange(e, form, error));
  };

  return (
    <StyledAddReview>
      <form onSubmit={handleSubmit}>
        <div className="div_title">
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Review Title"
            value={form.title}
          />
          <span className="span_title"></span>
        </div>
        <div className="div_description">
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Product description"
            value={form.description}
          />
          <span className="span_description"></span>
        </div>
        <div className="div_title">
          <input
            type="number"
            name="score"
            min="1"
            max="5"
            step="1"
            onChange={handleChange}
            placeholder="Review Score"
            value={form.score}
          />
          <span className="span_title"></span>
        </div>
        <input
          className="addButton"
          type="submit"
          value="Add review"
          disabled={form.error}
        />
      </form>
    </StyledAddReview>
  );
}
