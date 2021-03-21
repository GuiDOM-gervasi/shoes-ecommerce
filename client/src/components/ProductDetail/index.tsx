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
  if (loading) return <Loader />;
  if (error) return <div>`Error! ${error.message}`</div>;

  const [
    getSimils,
    { data: similProducts, loading: loadingSimil, error: errorSimil },
  ] = useLazyQuery(GET_PRODUCTS_BY_CATEGORIES);

  useEffect(() => {
    if (data) {
      const {
        productDetail: { models, categories },
      } = data;
      colors = models.map((model) => model.color);
      colors = Array.from(new Set(colors));

      sizes = models.filter((model) => model.color === colors[0]);
      sizes = sizes.map((model) => model.size);
      sizes = Array.from(new Set(sizes));

      setModelsState({ sizes, colors });

      getSimils({ variables: { name: categories[0].name } });
    }
  }, [data]);

  const [modelsState, setModelsState] = React.useState({
    colors: [],
    sizes: [],
  });

  let colors = [];
  let sizes = [];

  if (loading || loadingSimil) return <div>'Loading...'</div>;
  if (error || errorSimil) return <div>`Error! ${error}`</div>;

  const { name, brand, price, categories, models, id } = data.productDetail;

  function filterModels(value) {
    sizes = models.filter((prop) => prop.color === value);
    sizes = sizes.map((model) => model.size);
    setModelsState({ ...modelsState, sizes });
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
<<<<<<< HEAD
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
                {modelsState.colors?.map((color, i) => (
                  <option value={color} key={`${color} ${i}`}>
                    {color}
                  </option>
                ))}
              </select>
              <select className="botonInvertido">
                {modelsState.sizes?.map((size, i) => (
                  <option value={size} key={`${size} ${i}`}>
                    {size}
                  </option>
                ))}
              </select>
              <button className="boton" disabled>
                Agregar al carrito
              </button>
            </div>
          </div>
          <div className="related">
            <h3>Relacionados</h3>
            <div className="photo">
              {similProducts?.productForCategory?.map((item, i) =>
                item.id === id ? null : (
                  <Link to={`/product/${item.id || 1}`} key={item.id}>
                    <img
                      src={item.photo || fotosZapa.photo}
                      alt="name"
                      className="productImg"
                    />
                  </Link>
                )
              )}
            </div>
=======
            <h2>{brand.name}</h2>
            <p>{description}</p>
            <h4 className="priceBefore">{priceBefore}</h4>
            <h3 className="price">{price}</h3>
            <h4>{categories[0].name}</h4>
            <button className="botonInvertido">Seleccionar talle</button>
            <button className="boton" disabled>
              Añadir a favoritos
            </button>
            <button className="botonGlass">Ver Detalle</button>
            <button className="boton">Agregar al carrito</button>
>>>>>>> d03ff6025fdfd682be6cba1bafd42821b3619584
          </div>
        </div>
    </StyledProductDetail>
  );
}
