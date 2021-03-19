import React, { useEffect } from "react";
import { StyledProductDetail } from "./StyledProductDetail";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DETAIL } from "../../graphql/queries";
import { fotosZapa } from "./mockup";

export default function ProductDetail({ match }) {
  const productId = match.params.id;

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      id: productId,
    },
  });

  const [modelsState, setModelsState] = React.useState({
    colors: [],
    sizes: [],
  });

  let colors = [];
  let sizes = [];

  if (loading) return <div>'Loading...'</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  const { name, brand, price, categories, models } = data.productDetail;

  function filterModels(param, value) {
    switch (param) {
      case "size":
        colors = models.filter((prop) => prop.size === value);
        colors = colors.map((model) => model.color);
        setModelsState({ ...modelsState, colors });
        break;

      case "color":
        sizes = models.filter((prop) => prop.color === value);
        sizes = sizes.map((model) => model.size);
        setModelsState({ ...modelsState, sizes });
        break;

      default:
        return "error";
    }
  }

  const {
    photo,
    photoDetail1,
    photoDetail2,
    photoDetail3,
    priceBefore,
  } = fotosZapa;

  return (
    <StyledProductDetail>
      {loading ? (
        "Loading"
      ) : (
        <div className="container">
          <div>
            <img className="photo" src={photo} alt={name} />
            <ul>
              <li>
                <img
                  className="photoDetail"
                  src={photoDetail1}
                  alt={`photoDetail 1 - ${name}`}
                />
              </li>
              <li>
                <img
                  className="photoDetail"
                  src={photoDetail2}
                  alt={`photoDetail 2 - ${name}`}
                />
              </li>
              <li>
                <img
                  className="photoDetail"
                  src={photoDetail3}
                  alt={`photoDetail 3 - ${name}`}
                />
              </li>
            </ul>
          </div>
          <div className="info">
            <div className="fondoVioleta"></div>
            <h1>{name}</h1>
            <div className="description">
              <span>{categories.map((category) => category.name + " ")}</span>
              <span>{brand.name}</span>
            </div>
            <h4 className="priceBefore">${priceBefore}</h4>
            <h3 className="price">${price}</h3>
            <select
              className="botonInvertido"
              onChange={(e: any) => filterModels("color", e.target.value)}
            >
              {modelsState.colors?.map((color) => (
                <option value={color}>{color}</option>
              ))}
            </select>
            <select
              className="botonInvertido"
              onChange={(e: any) => filterModels("size", e.target.value)}
            >
              {modelsState.sizes?.map((size) => (
                <option value={size}>{size}</option>
              ))}
            </select>
            <button className="boton" disabled>
              Añadir a favoritos
            </button>
            <button className="botonGlass">Ver Detalle</button>
            <button className="boton">Agregar al carrito</button>
          </div>
        </div>
      )}
    </StyledProductDetail>
  );
}
