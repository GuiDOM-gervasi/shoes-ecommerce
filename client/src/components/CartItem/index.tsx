import React from "react";
import { StyledCartItem } from "./StyledCartItem";
import Swal from "sweetalert2";

export default function CartItem({
  cartProductItem,
  product,
  handleDelete,
  handleClick,
  handleQuantity,
}) {
  return (
    <StyledCartItem>
      <div className="itemContainer" key={cartProductItem.finalproducts?.id}>
        <div>
          <img
            src={product.muestraimg}
            alt={`photoDetail 3 - ${product.name}`}
          />
          <button
            className="buttonDelete"
            onClick={() => {
              Swal.fire({
                title: "Sure?",
                text:
                  "Please confirm if you want to remove this item from your cart.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete.",
                showConfirmButton: true,
              }).then((result) => {
                if (result.isConfirmed) {
                  handleDelete(
                    cartProductItem.finalproducts
                      ? cartProductItem.finalproducts.id.toString()
                      : cartProductItem.id.toString()
                  );
                }
              });
            }}
          >
            <i className="fas fa-window-close"></i>
          </button>
        </div>
        <div className="itemData">
        <h4>{product.name}</h4>
        {cartProductItem.finalproducts?.model ? (
          <p>
            size:
            <strong>{" " + cartProductItem.finalproducts?.model?.size}</strong>
            {"     "}
            color:
            <strong>
              {" " + cartProductItem.finalproducts?.model?.color}{" "}
            </strong>
          </p>
        ) : (
          ""
        )}
        <p>
          Price:{" "}
          <strong>
            ${" "}
            {product.discount
              ? Math.floor(product.price * (1 - product.discount))
              : product.price}
          </strong>
        </p>
        </div>
        <div className="number-input">
          <button
            id="-"
            onClick={(e) => handleClick(e, cartProductItem)}
          >
            <i className="fas fa-minus-square"></i>
          </button>
          <input
            id="quantity"
            className="quantity"
            type="number"
            onChange={(e) => handleQuantity(e, cartProductItem.id)}
            value={cartProductItem.quantity}
          />
          <button
            id="mas"
            onClick={(e) => {handleClick(e, cartProductItem)}}
            className="plus"
          ><i id="mas" className="fas fa-plus-square"></i></button>
        </div>
      </div>
    </StyledCartItem>
  );
}
