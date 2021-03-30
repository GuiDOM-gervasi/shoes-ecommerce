import React, { useEffect } from "react";
import { StyledProductDetail } from "./StyledProductDetail";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import {
  FINAL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  GET_PRODUCTS_BY_CATEGORIES,
  GET_CART,
  GET_CART_SIMPLE,
  GET_STOCK,
  GET_REVIEWS,
} from "../../graphql/queries";
import { fotosZapa } from "./mockup";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import { ADD_TO_CART } from "../../graphql/mutations";
import { useAuth } from "../../hooks/AuthProvider";
import Reviews from "../../containers/Reviews";

export default function ProductDetail({ match }: any) {
  const productId = match.params.id;
  const { userId } = useAuth();

  const [addToCart] = useMutation(ADD_TO_CART, {
    refetchQueries: [
      {
        query: GET_CART_SIMPLE,
        variables: {
          userId: userId && userId,
        },
      },
      {
        query: GET_CART,
        variables: {
          userId: userId && userId,
        },
      },
    ],
  });

  const { data } = useQuery(GET_CART_SIMPLE, {
    variables: {
      userId: userId && userId,
    },
  });

  const { loading, error, data: mainProduct } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      id: productId,
    },
  });

  const {
    data: dataStock,
    loading: loadingStock,
    error: errorStock,
  } = useQuery(GET_STOCK, {
    variables: {
      productId,
    },
  });
  const {
    data: reviewData,
    loading: reviewLoading,
    error: reviewError,
  } = useQuery(GET_REVIEWS, {
    variables: {
      productId,
    },
  });

  const [
    getSimils,
    { data: similProducts, loading: loadingSimil, error: errorSimil },
  ] = useLazyQuery(GET_PRODUCTS_BY_CATEGORIES);
  const [
    finalproducts,
    { data: finalData, loading: finalLoading, error: finalError },
  ] = useLazyQuery(FINAL_PRODUCTS, {
    onCompleted: (finalData) => {
      if (finalData.finalproducts[0].stock > 0) {
        if (!data?.cartSimple?.id) {
          let cartLocal = JSON.parse(localStorage.getItem("cart"));
          const itemLocal = { ...finalData.finalproducts[0], quantity: 1 };
          cartLocal.items.push(itemLocal);
          localStorage.setItem("cart", JSON.stringify(cartLocal));
        } else {
          addToCart({
            variables: {
              finalproductId: finalData.finalproducts[0].id,
              cartId: data.cartSimple.id,
              price,
              quantity: 1,
            },
          });
        }
        alert("Producto añadido al carrito");
      } else {
        alert("No queda stock de ese modelo");
      }
    },
  });

  useEffect(() => {
    if (mainProduct) {
      const {
        productDetail: { models, categories },
      } = mainProduct;
      colors = models.map((model) => model.color);
      colors = Array.from(new Set(colors));
      sizes = models.filter((model) => model.color === colors[0]);
      sizes = sizes.map((model) => model.size);
      sizes = Array.from(new Set(sizes));
      setModelsState({ sizes, colors });
      if (categories[0]) {
        getSimils({ variables: { name: categories[0].name } });
      }
    }
  }, [mainProduct]);

  // useEffect(() => {

  // }, [dataStock]);

  // const [stock, setStock] = React.useState(false);
  const [modelsState, setModelsState] = React.useState({
    colors: [],
    sizes: [],
  });

  let colors = [];
  let sizes = [];

  if (loading || loadingSimil || loadingStock) return <Loader />;
  if (error || errorSimil || errorStock)
    return <div>`Error! ${error?.message}`</div>;
  const {
    name,
    brand,
    price,
    muestraimg,
    detalleimg1,
    detalleimg2,
    detalleimg3,
    categories,
    models,
    id,
  } = mainProduct.productDetail;

  function filterModels(value) {
    sizes = models.filter((prop) => prop.color === value);
    sizes = sizes.map((model) => model.size);
    setModelsState({ ...modelsState, sizes });
  }

  function findStock() {
    const sizeSelect: any = document.querySelector("#size-select");
    const colorSelect: any = document.querySelector("#color-select");
    const noStock = document.querySelector("#noStock");
    const model = models.find(
      (current) =>
        current.size === sizeSelect?.value &&
        current.color === colorSelect?.value
    );

    if (dataStock) {
      const modelsStock = dataStock.allModelsProduct;
      for (let i = 0; i < modelsStock.length; i++) {
        if (modelsStock[i].model.id === model?.id) {
          if (modelsStock[i].stock > 0) {
            (document.getElementById(
              "addToCart"
            ) as HTMLInputElement).disabled = false;
            noStock.innerHTML = "";
          } else {
            (document.getElementById(
              "addToCart"
            ) as HTMLInputElement).disabled = true;
            noStock.innerHTML = "No tenemos stock en ese color y talle";
          }
        }
      }
    }
  }

  const {
    photo,
    photoDetail1,
    photoDetail2,
    photoDetail3,
    priceBefore,
  } = fotosZapa;

  const handleClick = () => {
    const sizeSelect: any = document.querySelector("#size-select");
    const colorSelect: any = document.querySelector("#color-select");
    const model = models.find(
      (current) =>
        current.size === sizeSelect.value && current.color === colorSelect.value
    );
    const finalproductId = finalproducts({
      variables: {
        productId: id,
        modelId: model.id,
      },
    });
  };
  return (
    <StyledProductDetail>
      <div className="container">
        <div className="fondoVioleta"></div>
        <div className="imagenes">
          <img className="photoMain" src={muestraimg || photo} alt={name} />
          <ul>
            <li>
              <img
                className="photoDetail"
                src={detalleimg1 || photoDetail1}
                alt={`photoDetail 1 - ${name}`}
              />
            </li>
            <li>
              <img
                className="photoDetail"
                src={detalleimg2 || photoDetail2}
                alt={`photoDetail 2 - ${name}`}
              />
            </li>
            <li>
              <img
                className="photoDetail"
                src={detalleimg3 || photoDetail3}
                alt={`photoDetail 3 - ${name}`}
              />
            </li>
          </ul>
        </div>
        <div className="info">
          <h1 className={name.length > 20 ? "tituloLargo" : "tituloCorto"}>
            {name}
          </h1>
          <div className="description">
            {categories?.map((category, i) => (
              <span
                key={`${category} ${i}`}
                className="category"
                onClick={() =>
                  getSimils({ variables: { name: category.name } })
                }
              >
                {category.name},{" "}
              </span>
            ))}
            <span>{brand.name}</span>
          </div>
          <div className="precios">
            <h4 className="priceBefore">${priceBefore}</h4>
            <h2 className="price">${price}</h2>
          </div>
          <div className="botones">
            <select
              className="botonInvertido"
              onChange={(e: any) => {
                filterModels(e.target.value);
                findStock();
              }}
              id="color-select"
            >
              {modelsState.colors?.map((color, i) => (
                <option value={color} key={`${color} ${i}`}>
                  {color}
                </option>
              ))}
            </select>
            <select
              onChange={() => findStock()}
              className="botonInvertido"
              id="size-select"
            >
              {modelsState.sizes?.map((size, i) => (
                <option value={size} key={`${size} ${i}`}>
                  {size}
                </option>
              ))}
            </select>
            <button
              className="boton"
              id="addToCart"
              onClick={() => handleClick()}
            >
              Agregar al carrito
            </button>
            <div id="noStock"></div>
          </div>
        </div>
        <div className="reviewsSection">
          {reviewData && (
            <Reviews className="review" allReviews={reviewData.getReviews} />
          )}
        </div>
        <div className="related">
          <h3>Relacionados</h3>
          <div className="photo">
            <ul>
              {similProducts?.productForCategory?.map((item, i) =>
                item.id === id ? null : (
                  <li key={i}>
                    <Link
                      to={`/product/${item.id || 1}`}
                      key={item.id}
                      onClick={() => window.scroll(0, 0)}
                    >
                      <img
                        src={item.muestraimg || fotosZapa.photo}
                        alt="name"
                        className="productImg"
                      />
                      <div className="similData">
                        <h5>{item.name}</h5>
                        <h5>${item.price}</h5>
                      </div>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </StyledProductDetail>
  );
}
