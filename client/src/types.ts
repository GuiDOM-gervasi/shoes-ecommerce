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
  price: number;
  brandId: String;
  CategoriesId: String[];
}

export interface QueryProducts {
  products: ProductAttributes[];
}
