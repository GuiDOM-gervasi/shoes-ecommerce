import React from "react";
import { useQuery } from "react-apollo";
import { GET_PRODUCT_DETAIL } from "../../graphql/queries";
import { fotosZapa } from "../ProductDetail/mockup";
import { StyledEditProduct } from "./StyledEditProduct";

export default function EditProduct({ match }) {
  const productId = match.params.productId;

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

  const handleClick = (e) => {
    const text: String = e.target.className.split("_")[1];
    const header: any = document.querySelector("." + text);
    header.style.display = "none";
    const input: any = document.querySelector(".input_" + text);
    input.style.display = "block";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const text: String = e.target.className.split("_")[1];
      const header: any = document.querySelector("." + text);
      header.style.display = "block";
      const input: any = document.querySelector(".input_" + text);
      input.style.display = "none";
    }
  };

  return (
    <StyledEditProduct>
      {loading ? (
        "Loading"
      ) : (
        <div className="container">
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
            <input
              type="text"
              className="input_name"
              style={{ display: "none" }}
              value={name}
              onKeyDown={handleKeyDown}
            />
            <h1 className="name">
              {name}
              <label className="label_name" onClick={handleClick}>
                edit
              </label>
            </h1>
            <h2 className="brand">
              {brand.name} <label className="label_brand">edit</label>
            </h2>
            <p className="description">
              {description} <label className="label_description">edit</label>
            </p>
            <h4 className="priceBefore">{priceBefore}</h4>
            <h3 className="price">
              {price} <label className="label_price">edit</label>
            </h3>
            <h4>{categories[0].name}</h4>
            <h4>{categories[1].name}</h4>
            <button className="boton">Agregar al carrito</button>
          </div>
        </div>
      )}
    </StyledEditProduct>
  );
}
