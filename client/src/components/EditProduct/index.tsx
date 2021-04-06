import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { EDIT_PRODUCT } from "../../graphql/mutations";
import {
  GET_PRODUCT_DETAIL,
  GET_BRANDS,
  GET_CATEGORIES,
} from "../../graphql/queries";
import { fotosZapa } from "../ProductDetail/mockup";
import { StyledEditProduct } from "./StyledEditProduct";
import Loader from "../Loader";

export default function EditProduct({ match }) {
  const productId = match.params.productId;
  const [modify, setModify] = useState("");

  const { loading, error, data: mainProduct } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      id: productId,
    },
  });

  const { data: dataBrands } = useQuery(GET_BRANDS);

  const { data: dataCategories } = useQuery(GET_CATEGORIES);

  const [editProduct] = useMutation(EDIT_PRODUCT, {
    refetchQueries: [
      { query: GET_PRODUCT_DETAIL, variables: { id: productId } },
    ],
  });

  const [modelsState, setModelsState] = useState({
    colors: [],
    sizes: [],
  });

  let colors = [];
  let sizes = [];

  useEffect(() => {
    if (mainProduct) {
      const {
        productDetail: { models, categories },
      } = mainProduct;
      colors = models.map((model) => model.color);
      colors = Array.from(new Set(colors));
      sizes = models.filter((model) => model.color === colors[0]);
      sizes = sizes.map((model) => model.size);
      sizes = Array.from(new Set(sizes));
      setModelsState({ sizes, colors });
    }
  }, [mainProduct]);

  if (loading) return <Loader />;
  if (error) return <div>`Error! ${error.message}`</div>;

  const {
    photo,
    photoDetail1,
    photoDetail2,
    photoDetail3,
    priceBefore,
  } = fotosZapa;

  const handleClick = async (e) => {
    const modal: any = document.querySelector(".modal");
    modal.style.display = "flex";
    let modifyProp = e.target.id.split("_")[1];
    if (modifyProp === "size" || modifyProp === "color") modifyProp = "models";
    setModify(modifyProp);
  };

  const handleKeyDown = async (e: any) => {
    if (e.key === "Escape") {
      const modal: any = document.querySelector(".modal");
      modal.style.display = "none";
    }

    if (e.key === "Enter") {
      console.log("modify", modify, e.target.value)
      await editProduct({
        variables: {
          id: productId,
          atr: modify,
          input: e.target.value,
        },
      });
      const modal: any = document.querySelector(".modal");
      modal.style.display = "none";
    }
  };

  document.body.onkeydown = handleKeyDown;

  function filterModels(value) {
    sizes = models.filter((prop) => prop.color === value);
    sizes = sizes.map((model) => model.size);
    setModelsState({ ...modelsState, sizes });
  }

  const {
    name,
    brand,
    price,
    discount,
    muestraimg,
    detalleimg1,
    detalleimg2,
    detalleimg3,
    categories,
    models,
    id,
  } = mainProduct.productDetail;

  return (
    <StyledEditProduct>
      <div className="container">
        <div className="modal">
          <button
            className="close"
            onClick={() => handleKeyDown({ key: "Escape" })}
          >
            x
          </button>
          <h2 className="headingModal">{"New " + modify}</h2>
          {modify === "brand" ? (
            <select multiple>
              {dataBrands.brand.map((brand) => (
                <option value={brand.id}>{brand.name}</option>
              ))}
            </select>
          ) : modify === "categories" ? (
            <select multiple>
              {dataCategories.categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
            </select>
          ) : (
            <input type="text" name="inputModal" onKeyDown={handleKeyDown} />
          )}
        </div>
        <div className="fondoVioleta"></div>
        <div className="imagenes">
          <div className="img1">
            <i
              className="fas fa-edit icon icon_name"
              id="edit_muestraimg"
              onClick={handleClick}
            ></i>
            <img
              id="photoMain"
              className="photoMain"
              src={muestraimg || photo}
              alt={name}
            />
          </div>
          <ul>
            <li>
              <img
                className="photoDetail"
                src={detalleimg1 || photoDetail1}
                alt={`photoDetail 1 - ${name}`}
              />
              <i
                className="fas fa-edit icon icon_name"
                id="edit_detalleimg1"
                onClick={handleClick}
              ></i>
            </li>
            <li>
              <img
                className="photoDetail"
                src={detalleimg2 || photoDetail2}
                alt={`photoDetail 2 - ${name}`}
              />
              <i
                className="fas fa-edit icon icon_name"
                id="edit_detalleimg2"
                onClick={handleClick}
              ></i>
            </li>
            <li>
              <img
                className="photoDetail"
                src={detalleimg3 || photoDetail3}
                alt={`photoDetail 3 - ${name}`}
              />
              <i
                className="fas fa-edit icon icon_name"
                id="edit_detalleimg3"
                onClick={handleClick}
              ></i>
            </li>
          </ul>
        </div>
        <div className="info">
          <h1 className={name.length > 20 ? "tituloLargo" : "tituloCorto"}>
            {name}
            <i
              className="fas fa-edit icon icon_name"
              id="edit_name"
              onClick={handleClick}
            ></i>
          </h1>
          <div className="description">
            {categories?.map((category, i) => (
              <span key={`${category} ${i}`} className="category">
                {category.name},{" "}
              </span>
            ))}
            <i
              className="fas fa-edit icon icon_categories"
              id="edit_categories"
              onClick={handleClick}
            ></i>
            <span>{brand.name}</span>
            <i
              className="fas fa-edit icon icon_brand"
              id="edit_brand"
              onClick={handleClick}
            ></i>
          </div>
          <div className="precios">
            {!!discount && discount > 0 ? (
              <div style={{ display: "flex" }}>
                <h4 className="priceBefore">Before: ${price}</h4>
                <i
                  className="fas fa-edit icon icon_discount"
                  id="edit_discount"
                  onClick={handleClick}
                ></i>
              </div>
            ) : (
              <h4>List Price:</h4>
            )}
            {!!discount && discount > 0 ? (
              <h2 className="price">${Math.round(price * (1 - discount))}</h2>
            ) : (
              <div style={{ display: "flex" }}>
                <h2 className="price">${price}</h2>
                <i
                  className="fas fa-edit icon icon_price"
                  id="edit_price"
                  onClick={handleClick}
                ></i>
              </div>
            )}
            {!!discount && discount > 0 ? (
              <h3 className="sale"> {discount * 100}% OFF!!!</h3>
            ) : (
              <></>
            )}
          </div>
          <div className="botones">
            <div style={{ display: "flex" }}>
              <select
                className="botonInvertido"
                onChange={(e: any) => {
                  filterModels(e.target.value);
                }}
                id="color-select"
              >
                {modelsState.colors?.map((color, i) => (
                  <option value={color} key={`${color} ${i}`}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ display: "flex" }}>
              <select className="botonInvertido" id="size-select">
                {modelsState.sizes?.map((size, i) => (
                  <option value={size} key={`${size} ${i}`}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <button className="boton" id="addToCart" onClick={handleClick}>
              Add to cart
            </button>
            <div id="noStock"></div>
          </div>
        </div>
      </div>
    </StyledEditProduct>
  );
}
