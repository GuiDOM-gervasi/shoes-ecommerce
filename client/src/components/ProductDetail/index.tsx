import React from "react";
import { StyledProductDetail } from "./StyledProductDetail";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DETAIL, GET_MODELS } from "../../graphql/queries";
import { fotosZapa } from "./mockup";

export default function ProductDetail({ match }) {
  const productId = match.params.id;

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      id: productId,
    },
  });

  const { data: dataModels } = useQuery(GET_MODELS);
  const colors = dataModels.map((model) => model.color);

  if (loading) return <div>'Loading...'</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  const { name, brand, description, price, categories } = data.productDetail;
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
            <select className="botonInvertido">{color.map(color => <option value={color}>{color}</option>)}</select>
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
