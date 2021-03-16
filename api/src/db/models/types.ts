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

export interface ModelAttributes {
  id?: string;
  size: string;
  color: string;
}