import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_PRODUCTS,
  GET_DELETED,
  GET_CATEGORIES,
  GET_BRANDS,
  GET_MODELS,
} from "../../graphql/queries";
import {
  DELETE_PRODUCT,
  UNDELETE_PRODUCT,
  ADD_PRODUCT,
  EDIT_STOCK,
} from "../../graphql/mutations";
import { StyledCRUDProducts } from "./StyledCRUDProducts";
import { ProductAttributes } from "../../types";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";

export default function CRUDProducts() {
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const {
    data: deletedQuery,
    loading: loadingDeleted,
    error: errorDeleted,
  } = useQuery(GET_DELETED);
  const allProducts = data ? data.products : null;
  const deletedProducts = deletedQuery ? deletedQuery.deleted : null;
  const [editStock] = useMutation(EDIT_STOCK);
  const [createProduct, { error: errorMutationProduct }] = useMutation(
    ADD_PRODUCT,
    {
      refetchQueries: [{ query: GET_PRODUCTS }],
    }
  );
  const { data: dataCat, loading: loadingCat, error: errorCat } = useQuery(
    GET_CATEGORIES
  );
  const {
    data: dataBrands,
    loading: loadingBrands,
    error: errorBrands,
  } = useQuery(GET_BRANDS);
  const { data: dataMod, loading: loadingMod, error: errorMod } = useQuery(
    GET_MODELS
  );
  const [deleteProduct, { loading: loadingDelete }] = useMutation(
    DELETE_PRODUCT,
    {
      refetchQueries: [{ query: GET_PRODUCTS }, { query: GET_DELETED }],
    }
  );
  const [undeleteProduct, { loading: loadingRestore }] = useMutation(
    UNDELETE_PRODUCT,
    {
      refetchQueries: [{ query: GET_PRODUCTS }, { query: GET_DELETED }],
    }
  );

  // const { categories } = dataCat;
  // const { brand } = dataBrands;
  // const { models } = dataMod;
  if (
    loading ||
    loadingDeleted ||
    loadingDelete ||
    loadingRestore ||
    loadingBrands ||
    loadingCat ||
    loadingMod
  )
    return <Loader />;
  if (error || errorDeleted) return <span> error {error.message} </span>;

  const handleAddProduct = () => {
    let brandInputOptions = {};
    dataBrands?.brand?.map(
      (brand) => (brandInputOptions[brand.id] = brand.name)
    );

    const templateSelectCategory = (catName, catId) => {
      return `<input type="checkbox" id=${catName} name=${catName} value=${catId} >
      <label>${catName}</label>
      </input><br/>`;
    };
    let categoryInputOptions = dataCat?.categories?.map((category) => {
      return templateSelectCategory(category.name, category.id);
    });


    const templateSelectModel = (modelSize, modelColor, modelId) => {
      return `<input type="checkbox" id=${modelId} name=${modelId} value=${modelId} >
      <label>${modelSize} - ${modelColor}</label>
      </input><br/>`;
    };
    let modelInputOptions = dataMod?.models?.map((model) => {
      return templateSelectModel(model.size, model.color, model.id);
    });

    Swal.mixin({
      confirmButtonText: "Next &rarr;",
      showCancelButton: true,
      progressSteps: ["1", "2", "3", "4", "5", "6"],
    })
      .queue([
        {
          title: "New product",
          text: "Product name",
          input: "text",
          inputValidator: (value) => {
            if (!value) {
              return "You need to name your product.";
            }
          },
        },
        {
          title: "New product",
          text: "Product description",
          input: "text",
          inputValidator: (value) => {
            if (!value) {
              return "You need to describe your product.";
            }
          },
        },
        {
          title: "New product",
          text: "Product price",
          input: "number",
          inputAttributes: {
            min: "1",
          },
          inputValidator: (value) => {
            if (!value) {
              return "You need to set a price for your product.";
            }
          },
        },
        {
          title: "New product",
          text: "Product brand",
          input: "select",
          inputOptions: brandInputOptions,
        },
        {
          title: "Select product categories",
          html: categoryInputOptions.join(''),
          preConfirm: () => {
            var checked = [];
            var checkboxes = document.querySelectorAll(
              "input[type=checkbox]:checked"
            ) as any;
            for (var i = 0; i < checkboxes.length; i++) {
              checked.push(checkboxes[i].value);
            }
            return checked;
          },
        },
        {
          title: "Select product models",
          html: modelInputOptions.join(""),
          preConfirm: () => {
            var checked = [];
            var checkboxes = document.querySelectorAll(
              "input[type=checkbox]:checked"
            ) as any;
            for (var i = 0; i < checkboxes.length; i++) {
              checked.push(checkboxes[i].value);
            }
            return checked;
          },
        },
      ])
      .then(async (result: any) => {
        if (result.value) {
          try {
            await createProduct({
              variables: {
                name: result.value[0],
                description: result.value[1],
                price: parseInt(result.value[2]),
                brandId: result.value[3],
                CategoriesId: result.value[4],
                ModelsId: result.value[5],
              },
            }).then((res) => {
              const productId = res.data.createProduct.id;
              editStock({
                variables: {
                  productId,
                  modelId: "all",
                  input: 0,
                },
              });
            });
            Swal.fire({
              icon: "success",
              title: "Product added",
              text:
                "Product " +
                result.value[0] +
                " added successfully. Please check stock and images for this product.",
            });
          } catch (err) {
            console.log(err);
            return;
          }
        }
      });
  };

  const handleDelete = (id) => {
    deleteProduct({ variables: { id } });
  };

  const handleRestore = (id) => {
    undeleteProduct({ variables: { id } });
  };

  const handleEdit = (id) => {
    history.push(`/admin/editProduct/${id}`);
  };

  return (
    <StyledCRUDProducts>
      <button className="addButton" onClick={handleAddProduct}>
        Add new product
      </button>
      <ul className="activeProducts">
        {allProducts?.map((item: ProductAttributes) => (
          <li key={item.id}>
            <span className="id"> {item.id} </span>
            <span className="name"> {item.name} </span>
            <span className="price"> {item.price} </span>

            <div className="buttons">
              <i onClick={() => handleEdit(item.id)} className="fas fa-edit" />
              <i
                onClick={() => handleDelete(item.id)}
                className="fas fa-trash-alt"
              />
              {/* <button onClick={() => handleEdit(item.id)}> edit </button>
              <button onClick={() => handleDelete(item.id)}> delete </button> */}
            </div>
          </li>
        ))}
      </ul>
      <div className="deleted">
        <h4> Deleted products </h4>
        <ul className="deletedProducts">
          {deletedProducts?.map((item: ProductAttributes) => (
            <li key={item.id}>
              <span className="id"> {item.id} </span>
              <span className="name"> {item.name} </span>
              <span className="price"> {item.price} </span>
              <div className="buttons">
                <i
                  onClick={() => handleRestore(item.id)}
                  className="fas fa-trash-restore"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledCRUDProducts>
  );
}
