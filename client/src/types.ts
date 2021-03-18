export interface Action {
  type: String;
  payload?: any;
}

export interface Store {
  counter: number;
}

export interface User {
  name: String;
  id?: Number;
}

export interface QueryUsers {
  users: User[];
}

export interface ProductAttributes {
  id: string;
  name: String;
  description: String;
  price: Number;
  brandId: String;
  CategoriesId: String[];
}

export interface QueryProducts {
  products: ProductAttributes[];
}

export interface Brand{
  id: String;
  name: String;
  __typename: String;
}

// interface para array de productos del catalogo // generar una para el detalle
export interface ProductBasic {
  name: String;
  description: String;
  price: Number;
  brandId: Brand;
  categories: String[];
  __typename: String;
}
