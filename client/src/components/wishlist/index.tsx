import React, { useState } from "react";
import { useHistory } from "react-router";
import { useQuery, useMutation } from "@apollo/client";
import { StyledWishListTable } from "./StyledWishList";
import { GET_WISHLIST } from "../../graphql/queries";
import { DELETE_FROM_WISHLIST, UPDATE_STATE } from "../../graphql/mutations";
import Loader from "../Loader";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/AuthProvider";
import { Link } from "react-router-dom";

const WishListTable = () => {
  const {userId} = useAuth()
  const { data, loading, error, refetch } = useQuery(GET_WISHLIST, {
    variables: { 
      userId:  userId && userId
    }
  });
  
  const [deletefromWishList] = useMutation(DELETE_FROM_WISHLIST, {
    refetchQueries: [
      {
        query: GET_WISHLIST,
        variables: {
          userId: userId && userId,
        },
      },
    ],
  });
  
  
  if (loading) return <Loader />;
  if (error)return <span> Error! {error?.message} </span>;
  
const wishList = data.wishList

const handleDelete = (productId) => {
    deletefromWishList({
      variables: {
        productId,
        userId,
      },
    });
}
  const orders = data.viewOrders;

  return (
    <StyledWishListTable>
      <h1>Your WishList</h1>     
      <ul>
        { wishList?.map((w) => (
          <li>
            {console.log(w)}
            <span>
             <img src={w.product.muestraimg} alt="muestraImg"/>
            </span>
            <span>
              <Link to={`/product/${w.product.id}`} className="white">
              {w.product.name}
              </Link>
            </span>
            <span className="white">
              {w.product.brand.name}
            </span>
            <span>
            <i className="fas fa-trash-alt" onClick={() => {
                      Swal.fire({
                        title: "Sure?",
                        text: "Please confirm if you want to remove this item from your wish list.",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete.",
                        showConfirmButton: true,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleDelete(
                            w.product.id
                          );
                        }
                      });
                    }}/>
            </span>
          </li>
        )) }
      </ul>
    </StyledWishListTable>
  );
};

export default WishListTable;
