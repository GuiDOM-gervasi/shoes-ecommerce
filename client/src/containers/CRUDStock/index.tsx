import { useQuery } from "@apollo/client";
import React from "react";
import { StyledCRUDStock } from "./StyledCRUDStock";
import { StockAttributes } from "../../types";

import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import { GET_ALL_STOCK } from "../../graphql/queries";

export default function CRUDStock() {
  const history = useHistory();
  const { data, loading, error: stockError } = useQuery(GET_ALL_STOCK);

  if (loading) return <Loader />;
  if (stockError) return <span> error {stockError.message} </span>;

  const handleEdit = (productId, modelId) => {
    history.push(`/admin/editStock/${productId}/${modelId}`);
  };

  return (
    <StyledCRUDStock>
      <ul>
        <li className="titles">
          <h5>ID</h5>
          <h5>Nombre</h5>
          <h5>Color</h5>
          <h5>Talle</h5>
          <h5>Stock</h5>
          <div></div>
        </li>
        {data.allStock?.map((item: StockAttributes) => (
          <li key={item.id}>
            <span className="itemId">
              <p className="itemId">ID</p>
              {item.id}{" "}
            </span>
            <span className="itemName">
              <p className="itemName">Nombre</p>
              {item.product.name}{" "}
            </span>
            <span className="itemColor">
              <p className="itemColor">Color</p>
              {item.model.color}{" "}
            </span>
            <span className="itemSize">
              <p className="itemSize">Talle</p>
              {item.model.size}{" "}
            </span>
            <span className="itemStock">
              <p className="itemStock">Stock</p>
              {item.stock}{" "}
            </span>

            <div className="buttons">
              <button
                type="submit"
                onClick={() => handleEdit(item.product.id, item.model.id)}
              >
                Modificar stock
              </button>
            </div>
          </li>
        ))}
      </ul>
    </StyledCRUDStock>
  );
}
