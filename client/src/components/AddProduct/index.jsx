import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { StyledAddProduct } from "./StyledAddProduct";

export default function AddProduct() {
  const [createProduct, { error: errorMutation }] = useMutation(ADD_PRODUCT);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    brandId: "1",
    CategoriesId: ["1", "2"],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, price, brandId, CategoriesId } = form;
    try {
      await createProduct({
        variables: {
          name,
          description,
          price,
          brandId,
          CategoriesId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  if (errorMutation) {
    console.log(errorMutation);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (!form[e.target.name]) {
      document.querySelector("span_" + e.target.name).innerText =
        "Todos los campos son obligatorios";
    }
  };

  return (
    <StyledAddProduct>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" />
        </div>
        <div>
          <input type="text" name="description" />
        </div>
        <div>
          <input type="number" name="price" />
        </div>
        <div>
          <select name="brandId" id="brands">
            {/* Aca va la query para las brands, mapeo y doy un option por cada una */}
            <option value=""></option>
          </select>
        </div>
        <div>
          <select name="CategoriesId" id="categories">
            {/* Aca va la query que trae categories, las mapeo y doy una option por cada una */}
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </form>
    </StyledAddProduct>
  );
}
