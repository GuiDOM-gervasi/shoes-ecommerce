import { useQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { StyledCRUDStock } from "./StyledCRUDStock";
import { StockAttributes } from "../../types";

import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import { GET_PRODUCTS, GET_ALL_STOCK } from "../../graphql/queries";
import { EDIT_STOCK } from "../../graphql/mutations";

export default function CRUDStock() {
  var modifies = {}
  const [values, setValues] = useState([]);
  const [modify, setModify] = useState({});
  const [error, setError] = useState(false);
  const history = useHistory();
  const { data, loading, error: stockError } = useQuery(GET_ALL_STOCK);
  const [editStock, { loading: loadingEdit }] = useMutation(EDIT_STOCK, {
    refetchQueries: [{ query: GET_ALL_STOCK }],
  });

  if (loading) return <Loader />;
  if (stockError) return <span> error {stockError.message} </span>;

  const handleEditStock = (productId, modelId, stock) => {
    console.log("EDITANDO");
    editStock({ variables: { productId, modelId, stock } });
  };
  const handleChange = (e, itemId) => {
    let editName = "editStock" + itemId;
    console.log(editName);
    if (e.target.name === editName && e.target.value) {
      setValues([...values,e.target.value]);
      console.log(values)
      setError(false);
    } else {
      setError(true);
    }
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
              <form>
                <input
                  onChange={(e) => handleChange(e, item.id)}
                  min={0}
                  type="number"
                  name={"editStock" + item.id}
                  className="editStock"
                  value={modify[item.id]}
                />
                <button
                  type="submit"
                  onClick={() =>
                    handleEditStock(item.product.id, item.model.id, modify[item.id])
                  }
                >
                  Modificar
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </StyledCRUDStock>
  );
}
