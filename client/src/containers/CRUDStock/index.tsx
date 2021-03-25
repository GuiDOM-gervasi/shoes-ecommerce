import { useQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { StyledCRUDStock } from "./StyledCRUDStock";
import { StockAttributes } from "../../types";

import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import { GET_PRODUCTS, GET_ALL_STOCK } from "../../graphql/queries";

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
        {data.allStock?.map((item: StockAttributes) => (
          <li key={item.id}>
            <span className="itemId"> {item.id} </span>
            <span className="itemName"> {item.product.name} </span>
            <span className="itemColor"> {item.model.color} </span>
            <span className="itemSize"> {item.model.size} </span>
            <h4 className="itemStock"> {item.stock} </h4>

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
