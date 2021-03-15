import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from "@apollo/react-hooks";
import { StyledAddProduct } from "./StyledAddProduct";
import { ADD_PRODUCT, ADD_MODEL } from '../../graphql/mutation';
import { GET_CATEGORIES, GET_BRANDS, GET_MODELS } from '../../graphql/queries';

interface AddProductAttributes {
  className: String
}

export default function AddProduct({className}: AddProductAttributes) {
  const [createProduct, { error: errorMutationProducts }] = useMutation(ADD_PRODUCT);
  const [createModel, { error: errorMutationModels }] = useMutation(ADD_MODEL);
  const [data: allCategories, loading: loadingCategories, error: errorCategories] = useQuery(GET_CATEGORIES);
  const [data: allBrands, loading: loadingBrands, error: errorBrands] = useQuery(GET_BRANDS);
  const [data: allModels, loading: loadingModels, error: errorModels] = useQuery(GET_MODELS);

  if (errorMutationProducts || errorMutationModels) {
    console.log(errorMutationProducts || errorMutationModels);
  }

  if(errorCategories || errorBrands || errorModels) return <span>error {error.message}</span>
  if(loadingCategories || loadingBrands || loadingModels) return <span>loading...</span>

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    brandId: "0",
    CategoriesId: ["0"],
    ModelsId: ["0"]
  });

  const history = useHistory();

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

    history.push('/');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (!form[e.target.name]) {
      document.querySelector(".span_" + e.target.name).innerText =
        "Todos los campos son obligatorios";
    }
  };

  const showNewModel = (e) => {
    document.querySelector('.inputNewModel').style.display = 'block';
    e.target.style.display = 'none';
  }

  const handleKeyDown = (e) => {
    if(event.key === 'Enter') {
      const values = e.target.value.split('-');
      createModel({
        variables: {
          size: values[1].trim(),
          color: values[0].trim()
        }
      })
    }
  }

  return (
    <StyledAddProduct className={className || container}>
      <form onSubmit={handleSubmit}>
        <div className="inputName">
          <input type="text" name="name" onChange={handleChange} />
          <span className="span_name"></span>
        </div>
        <div className="textDescription">
          <textarea type="text" name="description" onChange={handleChange} />
          <span className="span_description"></span>
        </div>
        <div className="inputNumber">
          <input type="number" name="price" onChange={handleChange} />
          <span className="span_price"></span>
        </div>
        <div className="selectBrands">
          <select name="brandId" id="brands" onChange={handleChange} >
            {allBrands?.map(brand => <option value={brand.id}>{brand.name}</option>)}
          </select>
        </div>
        <div className="selectCategories">
          <select name="CategoriesId" id="categories" onChange={handleChange} >
            {allCategories?.map(category => <option value={category.id}>{category.name}</option>)}
          </select>
        </div>
        <div className="selectModel">
          <select name="ModelsId" id="models" onChange={handleChange}>
            {allModels?.map(model => <option value={model.id}>{model.color} - {model.size}</option>)}
          </select>
          <input type="text" name="new" onKeyDown={handleKeyDown} placeholder="color - size" style={{display:"none"}} className="inputNewModel" />
          <button onClick={showNewModel}>New model</button>
        </div>
        <input type="submit" value="Add Product" />
      </form>
    </StyledAddProduct>
  );
}
