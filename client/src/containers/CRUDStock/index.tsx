import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { StyledCRUDStock } from "./StyledCRUDStock";
import { StockAttributes } from "../../types";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import { GET_ALL_STOCK } from "../../graphql/queries";
import { EDIT_STOCK } from "../../graphql/mutations";

export default function CRUDStock() {
  const history = useHistory();
  const { data, loading, error: stockError } = useQuery(GET_ALL_STOCK);
  const [editStock] = useMutation(EDIT_STOCK, {
    refetchQueries: [{ query: GET_ALL_STOCK }],
  });

  if (loading) return <Loader />;
  if (stockError) return <span> error {stockError.message} </span>;

  const handleEdit = (
    productId,
    modelId,
    productName,
    modelSize,
    modelColor
  ) => {
    Swal.mixin({
      input: "number",
      confirmButtonText: "Change stock",
      showCancelButton: true,
      inputAttributes: {
        min: "0",
      },
      inputValidator: (value) => {
        if (!value) {
          return "You need to write a number!";
        }
      },
    })
      .queue([
        {
          title: "Change the stock of:",
          text: productName + ", Size " + modelSize + ", Color " + modelColor,
        },
      ])
      .then(async (result: any) => {
        if (result.value) {
          try {
            await editStock({
              variables: {
                productId,
                modelId,
                input: parseInt(result.value[0]),
              },
            });
            history.push("/admin/stock");
          } catch (e) {
            console.log(e);
          } finally {
            // console.log(productId);
            // console.log(modelId);
            // console.log(modify);
          }

          Swal.fire({
            icon: "success",
            title: "Stock was changed",
            text:
              "Stock of " +
              productName +
              ", Size " +
              modelSize +
              ", Color " +
              modelColor +
              "was changed",
          });
        }
      });

    // history.push(`/admin/editStock/${productId}/${modelId}`);
  };

  return (
    <StyledCRUDStock>
      <div className="stockContainer crud_container">
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
                {item.product?.name}{" "}
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
                  onClick={() =>
                    handleEdit(
                      item.product.id,
                      item.model.id,
                      item.product.name,
                      item.model.size,
                      item.model.color
                    )
                  }
                >
                  Modificar stock
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="footerFake"></div>
    </StyledCRUDStock>
  );
}
