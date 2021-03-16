import React from "react";
import { StyledProductDetail } from "./StyledProductDetail";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRODUCT_DETAIL } from "../../graphql/queries";
import { fotosZapa } from "./mockup";

export default function ProductDetail({ match }) {
  const productId = match.params.id;

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      id: productId,
    },
  });
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
          {console.log("Data", data)}
          <div>
            <img className="photo" src={photo} alt="main" />
            <ul>
              <li>
                <img className="photoDetail" src={photoDetail1} alt="detail" />
              </li>
              <li>
                <img
                  className="photoDetail"
                  src={photoDetail2}
                  alt="detail 2"
                />
              </li>
              <li>
                <img
                  className="photoDetail"
                  src={photoDetail3}
                  alt="detail 3"
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
            <h4>{categories[1].name}</h4>
            <button className="boton">Agregar al carrito</button>
          </div>
        </div>
      )}
    </StyledProductDetail>
  );
}
