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
  const [filters, setFilters] = React.useState({
    name: '',
    size: 0,
    color: ''
  })

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

  function uniq(info) {
    var seenName = {};
    var seenColor = {};
    var seenSize = {};
    let names = info.map(function(item) {
        if (seenName.hasOwnProperty(item.product?.name) ){
          return null 
        }else{
          seenName[item.product?.name] = true;
          return item.product?.name
        }
    });
    let colors = info.map(function(item) {
      if (seenColor.hasOwnProperty(item.model.color) ){
        return null 
      }else{
        seenColor[item.model.color] = true;
        return item.model.color
      }
    })
    let sizes = info.map(function(item) {
      if (seenSize.hasOwnProperty(item.model.size) ){
        return null 
      }else{
        seenSize[item.model.size] = true;
        return item.model.size
      }
    })

    return {names, colors, sizes}
  }
  
  let {names, colors, sizes} = uniq(data.allStock);
  names = names.filter(e => !!e)
  colors = colors.filter(e => !!e)
  sizes = sizes.filter(e => !!e)


  return (
    <StyledCRUDStock>
      <div className="stockContainer">
        <ul>
          <li className="titles">
            <h5>ID</h5>
            <h5>Name</h5>
            <h5>Color</h5>
            <h5>Size</h5>
            <h5>Stock</h5>
            <div></div>
          </li>
          <li>
            <h5> - </h5>
            <select onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
            setFilters({...filters, name: ev.target.value})
          }>
            { names.map(item =>
              <option>{item}</option>)}
            </select>
            <select>
            { colors.map(item =>
              <option>{item}</option>)}
            </select>
            <select>
            { sizes.map(item =>
              <option>{item}</option>)}
            </select>
            <h5> -  </h5>
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
