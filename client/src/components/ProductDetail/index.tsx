import React from "react";
import { StyledProductDetail } from "./StyledProductDetail";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DETAIL } from "../../graphql/queries";
import { fotosZapa } from "./mockup";
import Loader from '../Loader';

export default function ProductDetail({ match }: any) {
  const productId = match.params.id;

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      id: productId,
    },
  });
  if (loading) return <Loader />;
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
            <h1>{name}</h1>
            <h2>{brand.name}</h2>
            <p>{description}</p>
            <h4 className="priceBefore">{priceBefore}</h4>
            <h3 className="price">{price}</h3>
            <h4>{categories[0].name}</h4>
            <button className="botonInvertido">Seleccionar talle</button>
            <button className="boton" disabled>
              Añadir a favoritos
            </button>
            <button className="botonGlass">Ver Detalle</button>
            <button className="boton">Agregar al carrito</button>
          </div>
        </div>
    </StyledProductDetail>
  );
}
