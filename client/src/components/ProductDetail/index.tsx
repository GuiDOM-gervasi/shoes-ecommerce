import React, { useEffect } from "react";
import { StyledProductDetail } from "./StyledProductDetail";
import { useQuery, useLazyQuery } from "@apollo/client";
import {
  GET_PRODUCT_DETAIL,
  GET_PRODUCTS_BY_CATEGORIES,
} from "../../graphql/queries";
import { fotosZapa } from "./mockup";
import { Link } from "react-router-dom";

export default function ProductDetail({ match }) {
  const productId = match.params.id;

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      id: productId,
    },
  });

  useEffect(() => {
	if(data) console.log('data', data);	
  }, [data])

  const [
    getSimils,
    { loading: loadingSimil, error: errorSimil, data: similProducts },
  ] = useLazyQuery(GET_PRODUCTS_BY_CATEGORIES);

  const [modelsState, setModelsState] = React.useState({
    colors: [],
    sizes: [],
  });

  let colors = [];
  let sizes = [];

  if (loading || loadingSimil) return <div>'Loading...'</div>;
  if (error || errorSimil) return <div>`Error! ${error}`</div>;

  const { name, brand, price, categories, models } = data.productDetail;

  function filterModels(value) {
    sizes = models.filter((prop) => prop.color === value);
    sizes = sizes.map((model) => model.size);
    setModelsState({ ...modelsState, sizes });
  }

  if (!modelsState.colors.length || !modelsState.sizes.length) {
    colors = models.map((model) => model.color);
    sizes = models.filter((prop) => prop.color === colors[0]);
    sizes = sizes.map((model) => model.size);
    colors = Array.from(new Set(colors));
    sizes = Array.from(new Set(sizes));
    setModelsState({ sizes, colors });
  }

  const {
    photo,
    photoDetail1,
    photoDetail2,
    photoDetail3,
    priceBefore,
  } = fotosZapa;

  return (
    <StyledProductDetail>
      {loading ? (
        "Loading"
      ) : (
        <div className="container">
          <div>
            <div className="fondoVioleta"></div>
            <img className="photo" src={photo} alt={name} />
            <ul>
              <li>
                <img
                  className="photoDetail"
                  src={photoDetail1}
                  alt={`photoDetail 1 - ${name}`}
                />
              </li>
              <li>
                <img
                  className="photoDetail"
                  src={photoDetail2}
                  alt={`photoDetail 2 - ${name}`}
                />
              </li>
              <li>
                <img
                  className="photoDetail"
                  src={photoDetail3}
                  alt={`photoDetail 3 - ${name}`}
                />
              </li>
            </ul>
          </div>
          <div className="info">
            <h1>{name}</h1>
            <div className="description">
              <span>{categories.map((category) => category.name + ", ")}</span>
              <span>{brand.name}</span>
            </div>
            <div className="precios">
              <h4 className="priceBefore">${priceBefore}</h4>
              <h2 className="price">${price}</h2>
            </div>
            <div className="botones">
              <select
                className="botonInvertido"
                onChange={(e: any) => filterModels(e.target.value)}
              >
                {modelsState.colors?.map((color) => (
                  <option value={color}>{color}</option>
                ))}
              </select>
              <select className="botonInvertido">
                {modelsState.sizes?.map((size) => (
                  <option value={size}>{size}</option>
                ))}
              </select>
              <button className="boton" disabled>Agregar al carrito</button>
            </div>
          </div>
          {/* <div className="related">
            {similProducts.productForCategory?.map((item, i) => (
              <Link to={`/product/${item.id || 1}`} key={item.id}>
                <img
                  src={item.photo || fotosZapa.photo}
                  alt="name"
                  className="productImg"
                />
              </Link>
            ))}
          </div> */}
        </div>
      )}
    </StyledProductDetail>
  );
}
