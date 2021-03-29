import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { StyledAddReview } from "./StyledAddReview";
import { ADD_REVIEW } from "../../graphql/mutations";
import {
  validateChange,
  check,
  formReview,
} from "../../helpers/validationReview";

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

  var formScore;

  switch (form.score) {
    case 1:
      formScore = "Muy Malas";
      break;
    case 2:
      formScore = "Malas";
      break;
    case 3:
      formScore = "Regulares";
      break;
    case 4:
      formScore = "Buenas";
      break;
    case 5:
      formScore = "Excelentes";
      break;
    default:
      ;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { title, description, score, userId, productId } = form;
    console.log(form);
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
      <p>Usuario {userId}</p>
      <p>Producto {productId}</p>
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
        <div className="div_score">
          <h6>¿Cómo calificarías tus zapatillas?</h6>
          <p>{formScore}</p>
          <input
            type="range"
            name="score"
            min="1"
            max="5"
            step="1"
            onChange={handleChange}
            placeholder="Review Score"
            value={form.score}
          />
          <span className="span_score"></span>
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
