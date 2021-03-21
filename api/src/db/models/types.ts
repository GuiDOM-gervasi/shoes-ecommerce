export interface UserAttributes {
  id?: string;
  firstName: string;
  lastName: string;
  userName: string;
  isAdmin: Boolean;
  email: string;
  password: string;
  nlsuscribe: Boolean;
}

export interface ProductAttributes {
  id?: string;
  name: string;
  description: string;
  price: number;
  muestraimg: string;
  brandId: string;
  CategoriesId: [string];
  ModelsId: [string];
}

export interface CategoryAttributes {
  id?: string;
  name: string;
}

export interface BrandAttributes {
  id?: string;
  name: string;
}

export interface ImageAttributes {
  id?: string;
  title: string;
  productId: string;
}

export interface ModelAttributes {
  id?: string;
  size: string;
  color: string;
}

export interface CartAttributes {
  id?: string;
  userId: string;
  state: string;
}

export interface CartProductAttributes{
  id?: string;
  finalproductId: string;
  cartId: string;
  quantity: number;
  price: number;
}

export interface UpdateProductAttributes {
  id: string;
  atr: string;
  input: [string];
}

export interface UpdateUserAttributes {
  id?: string;
  atr: string;
  input: string;
}