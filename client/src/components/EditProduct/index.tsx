import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { EDIT_PRODUCT } from "../../graphql/mutations";
import {
  GET_PRODUCT_DETAIL,
  GET_BRANDS,
  // GET_CATEGORIES,
  // GET_MODELS,
} from "../../graphql/queries";
import { fotosZapa } from "../ProductDetail/mockup";
import { StyledEditProduct } from "./StyledEditProduct";

export default function EditProduct({ match }) {
  const productId = match.params.productId;
  const [modify, setModify] = useState("");

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      id: productId,
    },
  });

  const {
    data: dataBrands,
  } = useQuery(GET_BRANDS);

  const [editProduct] = useMutation(EDIT_PRODUCT, {
    refetchQueries: [
      { query: GET_PRODUCT_DETAIL, variables: { id: productId } },
    ],
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

  const handleClick = async (e) => {
    const modal: any = document.querySelector(".modal");
    modal.style.display = "flex";
    setModify(e.target.className.split("_")[1]);
  };

  const handleKeyDown = async (e: any) => {
    if (e.key === "Escape") {
      const modal: any = document.querySelector(".modal");
      modal.style.display = "none";
    }

    if (e.key === "Enter") {
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

  return (
    <StyledEditProduct>
      {loading ? (
        "Loading"
      ) : (
        <div className="container">
          <div className="modal">
            <button onClick={() => handleKeyDown({ key: "Escape" })}>x</button>
            <h2 className="headingModal">
              {modify && modify[0].toUpperCase() + modify.slice(1)}
            </h2>
            {modify === "brand" ? (
              <select multiple>
                {dataBrands.brand.map((brand) => (
                  <option value={brand.id}>{brand.name}</option>
                ))}
              </select>
            ) : (
              <input type="text" name="inputModal" onKeyDown={handleKeyDown} />
            )}
          </div>
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
            <div>
              <h1 className="name">
                {name}
                <label className="label_name" onClick={handleClick}>
                  edit
                </label>
              </h1>
            </div>
            <div>
              <h2 className="brand">
                {brand.name}
                <label className="label_brand" onClick={handleClick}>
                  edit
                </label>
              </h2>
            </div>
            <div>
              <p className="description">
                {description}{" "}
                <label className="label_description" onClick={handleClick}>
                  edit
                </label>
              </p>
            </div>
            <h4 className="priceBefore">{priceBefore}</h4>
            <h3 className="price">
              {price}{" "}
              <label className="label_price" onClick={handleClick}>
                edit
              </label>
            </h3>
            <h4>{categories[0].name}</h4>
            <h4>{categories[1].name}</h4>
          </div>
        </div>
      )}
    </StyledEditProduct>
  );
}
