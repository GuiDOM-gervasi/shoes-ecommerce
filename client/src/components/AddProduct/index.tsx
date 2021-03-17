import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { StyledAddProduct } from "./StyledAddProduct";
import { ADD_PRODUCT } from "../../graphql/mutations";
import { GET_CATEGORIES, GET_BRANDS, GET_MODELS } from "../../graphql/queries";
import { validateChange, check, form } from "../../helpers/validation";

interface AddProductAttributes {
  className: String;
}

export default function AddProduct({ className }: AddProductAttributes) {
  const [
    createProduct,
    { error: errorMutationProduct },
  ] = useMutation(ADD_PRODUCT);
  // const [createModel, { error: errorMutationModel }] = useMutation(ADD_MODEL);

  const { data: dataCat, loading: loadingCat, error: errorCat } = useQuery(
    GET_CATEGORIES
  );
  const {
    data: dataBrands,
    loading: loadingBrands,
    error: errorBrands,
  } = useQuery(GET_BRANDS);
  const { data: dataMod, loading: loadingMod, error: errorMod } = useQuery(
    GET_MODELS
  );

  const [form, setForm] = useState<form>({
    name: "",
    description: "",
    price: 0,
    brandId: "1",
    CategoriesId: [],
    ModelsId: [],
    error: true,
  });

  if (errorMutationProduct) {
    console.log(errorMutationProduct);
  }

  if (loadingCat || loadingBrands || loadingMod) return <span>loading...</span>;
  if (errorCat || errorBrands || errorMod)
    return (
      <span>
        error: {errorCat?.message || errorBrands?.message || errorMod?.message}
      </span>
    );

  const { categories } = dataCat;
  const { brand } = dataBrands;
  const { models } = dataMod;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { name, description, price, brandId, CategoriesId, ModelsId } = form;
    price = Number(price);
    try {
      await createProduct({
        variables: {
          name,
          description,
          price,
          brandId,
          CategoriesId,
          ModelsId,
        },
      });
    } catch (err) {
      console.log(err);
      return;
    }
    setForm({
      name: "",
      description: "",
      price: 0,
      brandId: "1",
      CategoriesId: [],
      ModelsId: [],
      error: true,
    });
    alert("Producto creado");
  };

  const handleChange = async (e: any) => {
    if (e.target.name === "price" && Number(e.target.value) <= 0) return;
    const error = check(e, form);
    setForm(validateChange(e, form, error));
  };

  return (
    <StyledAddProduct>
      <form onSubmit={handleSubmit}>
        <div className="div_name">
          <input
            type="text" 
            name="name"
            onChange={handleChange}
            placeholder="Air max"
            value={form.name}
          />
          <span className="span_name"></span>
        </div>
        <div className="div_description">
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Great description"
            value={form.description}
          />
          <span className="span_description"></span>
        </div>
        <div className="div_price">
          <input
            type="number"
            name="price"
            onChange={handleChange}
            placeholder="999"
            value={form.price}
          />
          <span className="span_price"></span>
        </div>
        <div className="div_brand">
          <select name="brandId" id="brands" onChange={handleChange}>
            {brand?.map((brand) => (
              <option value={brand.id} key={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className="selectsMultiple">
          <div className="div_categories">
            <select
              name="CategoriesId"
              id="categories"
              onChange={handleChange}
              multiple
            >
              <optgroup label="Categories">
                {categories?.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
          <div className="div_models">
            <select
              name="ModelsId"
              id="models"
              onChange={handleChange}
              multiple
            >
              <optgroup label="Models">
                {models?.map((model) => (
                  <option value={model.id} key={model.id}>
                    {model.size} - {model.color}
                  </option>
                ))}
              </optgroup>
            </select>
            <button disabled>New model</button>
          </div>
        </div>
        <input type="submit" value="Add product" disabled={form.error} />
      </form>
    </StyledAddProduct>
  );
}
